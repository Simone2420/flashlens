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
        val lives = prefs.getInt("currentLives", 5)

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
            val heartsText = "❤️".repeat(lives.coerceIn(0, 5)) + "🤍".repeat((5 - lives).coerceIn(0, 5))
            views.setTextViewText(R.id.widget_lives_text, heartsText)
            views.setOnClickPendingIntent(R.id.widget_compact_root, pendingIntent)

            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }
}
