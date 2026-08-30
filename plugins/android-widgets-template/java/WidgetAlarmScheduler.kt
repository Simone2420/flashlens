package com.flashlens.app

import android.app.AlarmManager
import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.os.Build

object WidgetAlarmScheduler {

    /**
     * Programa una actualización periódica minuto a minuto en segundo plano mediante AlarmManager.
     * Funciona aun con la aplicación cerrada o el teléfono en reposo (Doze mode).
     */
    fun scheduleNextUpdate(context: Context) {
        val prefs = context.getSharedPreferences("FlashLensWidgetPrefs", Context.MODE_PRIVATE)
        val lives = prefs.getInt("currentLives", 5)
        val now = System.currentTimeMillis()

        val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as? AlarmManager ?: return

        // 1. PendingIntent para CompactWidgetProvider
        val compactIntent = Intent(context, CompactWidgetProvider::class.java).apply {
            action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
            val ids = AppWidgetManager.getInstance(context).getAppWidgetIds(
                ComponentName(context, CompactWidgetProvider::class.java)
            )
            putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)
        }
        val compactPending = PendingIntent.getBroadcast(
            context,
            1001,
            compactIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        // 2. PendingIntent para ExpandedWidgetProvider
        val expandedIntent = Intent(context, ExpandedWidgetProvider::class.java).apply {
            action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
            val ids = AppWidgetManager.getInstance(context).getAppWidgetIds(
                ComponentName(context, ExpandedWidgetProvider::class.java)
            )
            putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)
        }
        val expandedPending = PendingIntent.getBroadcast(
            context,
            1002,
            expandedIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        if (lives < 5) {
            // Programar para el siguiente límite de minuto exacto (cada 60 segundos)
            val nextMinuteMs = ((now / 60000L) + 1) * 60000L
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC, nextMinuteMs, compactPending)
                    alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC, nextMinuteMs, expandedPending)
                } else {
                    alarmManager.setExact(AlarmManager.RTC, nextMinuteMs, compactPending)
                    alarmManager.setExact(AlarmManager.RTC, nextMinuteMs, expandedPending)
                }
            } catch (e: Exception) {
                // Fallback con alarma normal si el permiso exacto tiene restricciones
                alarmManager.set(AlarmManager.RTC, nextMinuteMs, compactPending)
                alarmManager.set(AlarmManager.RTC, nextMinuteMs, expandedPending)
            }
        } else {
            // Si las vidas están llenas (5/5), cancelar alarmas para no consumir batería
            alarmManager.cancel(compactPending)
            alarmManager.cancel(expandedPending)
        }
    }
}
