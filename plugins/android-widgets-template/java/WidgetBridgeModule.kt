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
            prefs.edit().apply {
                putInt("streakDays", streakDays)
                putInt("currentLives", currentLives)
                putLong("nextRegenTimestamp", nextRegenLong)
                putString("wordOfTheDay", wordOfTheDay)
                putString("wordTranslation", wordTranslation)
                apply()
            }

            // Actualizar Widget Compacto
            val compactIntent = Intent(reactContext, CompactWidgetProvider::class.java).apply {
                action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
                val ids = AppWidgetManager.getInstance(reactContext).getAppWidgetIds(
                    ComponentName(reactContext, CompactWidgetProvider::class.java)
                )
                putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)
            }
            reactContext.sendBroadcast(compactIntent)

            // Actualizar Widget Expandido
            val expandedIntent = Intent(reactContext, ExpandedWidgetProvider::class.java).apply {
                action = AppWidgetManager.ACTION_APPWIDGET_UPDATE
                val ids = AppWidgetManager.getInstance(reactContext).getAppWidgetIds(
                    ComponentName(reactContext, ExpandedWidgetProvider::class.java)
                )
                putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)
            }
            reactContext.sendBroadcast(expandedIntent)

            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("WIDGET_UPDATE_ERROR", e.message, e)
        }
    }
}
