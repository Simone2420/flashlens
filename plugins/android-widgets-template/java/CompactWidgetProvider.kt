package com.flashlens.app

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.widget.RemoteViews

class CompactWidgetProvider : AppWidgetProvider() {
    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        val prefs = context.getSharedPreferences("FlashLensWidgetPrefs", Context.MODE_PRIVATE)
        val streak = prefs.getInt("streakDays", 7)
        var lives = prefs.getInt("currentLives", 5)
        var nextRegen = prefs.getLong("nextRegenTimestamp", 0L)
        val now = System.currentTimeMillis()

        // 1. Algoritmo de recarga de vidas en segundo plano
        if (lives < 5 && nextRegen > 0L) {
            if (now >= nextRegen) {
                val intervalMs = 15 * 60 * 1000L // 15 minutos por vida
                val elapsedSinceTarget = now - nextRegen
                val additionalLives = (elapsedSinceTarget / intervalMs) + 1
                val newLives = (lives + additionalLives.toInt()).coerceAtMost(5)
                lives = newLives
                prefs.edit().putInt("currentLives", newLives).apply()

                if (newLives < 5) {
                    nextRegen += (additionalLives * intervalMs)
                    prefs.edit().putLong("nextRegenTimestamp", nextRegen).apply()
                } else {
                    nextRegen = 0L
                    prefs.edit().putLong("nextRegenTimestamp", 0L).apply()
                }
            }
        }

        // 2. Formato de tiempo restante en Horas y Minutos (sin segundos)
        val timerText: String
        if (lives < 5 && nextRegen > 0L) {
            val remainingMs = (nextRegen - now).coerceAtLeast(0L)
            val totalMins = (remainingMs / (60 * 1000L))
            val hours = totalMins / 60
            val mins = totalMins % 60
            timerText = if (hours > 0) "+1 ❤️ en ${hours}h ${mins}m" else "+1 ❤️ en ${mins}m"
        } else {
            timerText = "Vidas llenas"
        }

        val heartsText = "❤️".repeat(lives.coerceIn(0, 5)) + "🤍".repeat((5 - lives).coerceIn(0, 5))

        for (appWidgetId in appWidgetIds) {
            val intent = Intent(context, MainActivity::class.java)
            val pendingIntent = PendingIntent.getActivity(
                context,
                0,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )

            val views = RemoteViews(context.packageName, R.layout.widget_compact_layout)
            views.setTextViewText(R.id.widget_streak_text, "🔥 $streak DÍAS")
            views.setTextViewText(R.id.widget_lives_text, heartsText)
            views.setTextViewText(R.id.widget_timer_text, timerText)
            views.setOnClickPendingIntent(R.id.widget_compact_root, pendingIntent)

            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }
}
