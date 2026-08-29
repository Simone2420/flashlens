package com.flashlens.app

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.widget.RemoteViews

class ExpandedWidgetProvider : AppWidgetProvider() {
    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        val prefs = context.getSharedPreferences("FlashLensWidgetPrefs", Context.MODE_PRIVATE)
        val streak = prefs.getInt("streakDays", 7)
        val lives = prefs.getInt("currentLives", 5)
        val word = prefs.getString("wordOfTheDay", "Break the ice") ?: "Break the ice"
        val trans = prefs.getString("wordTranslation", "Romper el hielo (Modismo)") ?: "Romper el hielo (Modismo)"

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
            views.setTextViewText(R.id.exp_widget_word, word)
            views.setTextViewText(R.id.exp_widget_trans, trans)
            views.setOnClickPendingIntent(R.id.widget_expanded_root, pendingIntent)

            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }
}
