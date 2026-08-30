package com.flashlens.app

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.widget.RemoteViews

class ExpandedWidgetProvider : AppWidgetProvider() {

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        val appWidgetManager = AppWidgetManager.getInstance(context)
        val ids = appWidgetManager.getAppWidgetIds(
            ComponentName(context, ExpandedWidgetProvider::class.java)
        )
        if (ids != null && ids.isNotEmpty()) {
            onUpdate(context, appWidgetManager, ids)
        }
    }

    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        val prefs = context.getSharedPreferences("FlashLensWidgetPrefs", Context.MODE_PRIVATE)
        val streak = prefs.getInt("streakDays", 7)
        var lives = prefs.getInt("currentLives", 5)
        var nextRegen = prefs.getLong("nextRegenTimestamp", 0L)
        val word = prefs.getString("wordOfTheDay", "Break the ice") ?: "Break the ice"
        val trans = prefs.getString("wordTranslation", "Romper el hielo (Modismo)") ?: "Romper el hielo (Modismo)"
        val now = System.currentTimeMillis()

        // 1. Algoritmo robusto de recarga de vidas en segundo plano
        if (lives < 5) {
            if (nextRegen <= 0L || nextRegen < now - (24 * 60 * 60 * 1000L)) {
                nextRegen = now + 15 * 60 * 1000L
                prefs.edit().putLong("nextRegenTimestamp", nextRegen).commit()
            } else if (now >= nextRegen) {
                val intervalMs = 15 * 60 * 1000L // 15 minutos por vida
                val elapsed = now - nextRegen
                val gained = (elapsed / intervalMs) + 1
                val newLives = (lives + gained.toInt()).coerceAtMost(5)
                lives = newLives
                prefs.edit().putInt("currentLives", newLives).commit()

                if (newLives < 5) {
                    nextRegen += (gained * intervalMs)
                    prefs.edit().putLong("nextRegenTimestamp", nextRegen).commit()
                } else {
                    nextRegen = 0L
                    prefs.edit().putLong("nextRegenTimestamp", 0L).commit()
                }
            }
        } else {
            nextRegen = 0L
            prefs.edit().putLong("nextRegenTimestamp", 0L).commit()
        }

        // 2. Formato de tiempo restante en Horas y Minutos (sin segundos)
        val timerText: String
        if (lives < 5 && nextRegen > 0L) {
            val remainingMs = (nextRegen - now).coerceAtLeast(0L)
            val totalMins = (remainingMs / (60 * 1000L))
            val hours = totalMins / 60
            val mins = totalMins % 60
            timerText = if (hours > 0) "⏳ Recarga: +1 ❤️ en ${hours}h ${mins}m" else "⏳ Recarga: +1 ❤️ en ${mins}m"
        } else {
            timerText = "⏳ Vidas completas: 5/5"
        }

        val heartsText = "❤️".repeat(lives.coerceIn(0, 5)) + "🤍".repeat((5 - lives).coerceIn(0, 5)) + " $lives/5"

        for (appWidgetId in appWidgetIds) {
            val intent = Intent(context, MainActivity::class.java)
            val pendingIntent = PendingIntent.getActivity(
                context,
                0,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )

            val views = RemoteViews(context.packageName, R.layout.widget_expanded_layout)
            views.setTextViewText(R.id.exp_widget_streak, "🔥 Racha: $streak Días")
            views.setTextViewText(R.id.exp_widget_lives, heartsText)
            views.setTextViewText(R.id.exp_widget_timer, timerText)
            views.setTextViewText(R.id.exp_widget_word, word)
            views.setTextViewText(R.id.exp_widget_trans, trans)
            views.setOnClickPendingIntent(R.id.widget_expanded_root, pendingIntent)

            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }
}
