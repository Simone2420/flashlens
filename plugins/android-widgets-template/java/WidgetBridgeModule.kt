package com.flashlens.app

import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class WidgetBridgeModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "WidgetBridge"

    @ReactMethod
    fun updateWidgets(
        streakDays: Int,
        currentLives: Int,
        nextRegenTimestampDouble: Double,
        wordOfTheDay: String,
        wordTranslation: String,
        promise: Promise
    ) {
        try {
            val nextRegenLong = nextRegenTimestampDouble.toLong()
            val prefs = reactContext.getSharedPreferences("FlashLensWidgetPrefs", Context.MODE_PRIVATE)
            
            // Guardar de manera síncrona (commit) para garantizar que los Widgets lean los datos inmediatamente
            prefs.edit().apply {
                putInt("streakDays", streakDays)
                putInt("currentLives", currentLives)
                putLong("nextRegenTimestamp", nextRegenLong)
                putString("wordOfTheDay", wordOfTheDay)
                putString("wordTranslation", wordTranslation)
            }.commit()

            // 1. Notificar y actualizar Widget Compacto
            val compactManager = AppWidgetManager.getInstance(reactContext)
            val compactIds = compactManager.getAppWidgetIds(
                ComponentName(reactContext, CompactWidgetProvider::class.java)
            )
            if (compactIds != null && compactIds.isNotEmpty()) {
                val compactIntent = Intent(reactContext, CompactWidgetProvider::class.java).apply {
                    action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
                    putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, compactIds)
                }
                reactContext.sendBroadcast(compactIntent)
            }

            // 2. Notificar y actualizar Widget Expandido
            val expandedManager = AppWidgetManager.getInstance(reactContext)
            val expandedIds = expandedManager.getAppWidgetIds(
                ComponentName(reactContext, ExpandedWidgetProvider::class.java)
            )
            if (expandedIds != null && expandedIds.isNotEmpty()) {
                val expandedIntent = Intent(reactContext, ExpandedWidgetProvider::class.java).apply {
                    action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
                    putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, expandedIds)
                }
                reactContext.sendBroadcast(expandedIntent)
            }

            // 3. Programar el ciclo de alarmas en segundo plano para actualizar el temporizador minuto a minuto
            WidgetAlarmScheduler.scheduleNextUpdate(reactContext)

            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("WIDGET_UPDATE_ERROR", e.message, e)
        }
    }
}
