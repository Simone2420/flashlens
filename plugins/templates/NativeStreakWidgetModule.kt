package com.flashlens.app.widget

import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap

class NativeStreakWidgetModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "NativeStreakWidgetModule"

    @ReactMethod
    fun syncData(data: ReadableMap) {
        val context = reactApplicationContext ?: return
        try {
            val prefs = context.getSharedPreferences("flashlens_widget_prefs", Context.MODE_PRIVATE)
            val editor = prefs.edit()

            if (data.hasKey("streakDays")) editor.putInt("streakDays", data.getInt("streakDays"))
            if (data.hasKey("currentLives")) editor.putInt("currentLives", data.getInt("currentLives"))
            if (data.hasKey("maxLives")) editor.putInt("maxLives", data.getInt("maxLives"))
            if (data.hasKey("nextRegenMinutes")) editor.putInt("nextRegenMinutes", data.getInt("nextRegenMinutes"))
            if (data.hasKey("hasPracticedToday")) editor.putBoolean("hasPracticedToday", data.getBoolean("hasPracticedToday"))
            if (data.hasKey("dailyXp")) editor.putInt("dailyXp", data.getInt("dailyXp"))

            editor.apply()

            // Disparar actualización instantánea (0 ms) en todos los widgets nativos
            StreakMasterWidgetProvider.updateAllWidgets(context)
        } catch (_: Exception) {
            // Manejo de excepciones silencioso y seguro
        }
    }
}
