package com.flashlens.app.widget

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import android.graphics.Color
import android.widget.RemoteViews
import com.flashlens.app.MainActivity
import com.flashlens.app.R
import org.json.JSONObject
import java.io.File
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

class StreakMasterWidgetProvider : AppWidgetProvider() {

    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        for (appWidgetId in appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId)
        }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        if (intent.action == AppWidgetManager.ACTION_APPWIDGET_UPDATE ||
            intent.action == "com.flashlens.app.ACTION_UPDATE_NATIVE_WIDGET") {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val thisWidget = ComponentName(context, StreakMasterWidgetProvider::class.java)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(thisWidget)
            for (appWidgetId in appWidgetIds) {
                updateAppWidget(context, appWidgetManager, appWidgetId)
            }
        }
    }

    companion object {
        fun updateAllWidgets(context: Context) {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val thisWidget = ComponentName(context, StreakMasterWidgetProvider::class.java)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(thisWidget)
            for (appWidgetId in appWidgetIds) {
                updateAppWidget(context, appWidgetManager, appWidgetId)
            }
        }

        private fun updateAppWidget(context: Context, appWidgetManager: AppWidgetManager, appWidgetId: Int) {
            val views = RemoteViews(context.packageName, R.layout.widget_streak_master_native)

            var streakDays = 0
            var currentLives = 5
            var maxLives = 5
            var nextRegenMinutes = 0
            var hasPracticedToday = false
            var dailyXp = 0
            var lastStreakDate: String? = null

            // 1. Intentar lectura rápida desde SharedPreferences nativas
            val prefs = context.getSharedPreferences("flashlens_widget_prefs", Context.MODE_PRIVATE)
            if (prefs.contains("streakDays")) {
                streakDays = prefs.getInt("streakDays", 0)
                currentLives = prefs.getInt("currentLives", 5)
                maxLives = prefs.getInt("maxLives", 5)
                nextRegenMinutes = prefs.getInt("nextRegenMinutes", 0)
                hasPracticedToday = prefs.getBoolean("hasPracticedToday", false)
                dailyXp = prefs.getInt("dailyXp", 0)
                lastStreakDate = prefs.getString("lastStreakDate", null)
            } else {
                // 2. Fallback de lectura directa SQLite (Room AsyncStorage o RKStorage) en 0ms
                try {
                    var jsonRaw: String? = null

                    // 2a. Probar base de datos moderna de AsyncStorage (Room: "AsyncStorage" -> tabla "Storage")
                    val roomDbPath = context.getDatabasePath("AsyncStorage")
                    if (roomDbPath != null && roomDbPath.exists()) {
                        try {
                            val db = SQLiteDatabase.openDatabase(roomDbPath.path, null, SQLiteDatabase.OPEN_READONLY)
                            val cursor = db.rawQuery(
                                "SELECT value FROM Storage WHERE `key` = ?",
                                arrayOf("@flashlens_widget_shared_data")
                            )
                            if (cursor.moveToFirst()) {
                                jsonRaw = cursor.getString(0)
                            }
                            cursor.close()
                            db.close()
                        } catch (_: Exception) {}
                    }

                    // 2b. Probar base de datos heredada (SQLite: "RKStorage" -> tabla "catalystLocalStorage")
                    if (jsonRaw.isNullOrEmpty()) {
                        val rkDbPath = context.getDatabasePath("RKStorage")
                        if (rkDbPath != null && rkDbPath.exists()) {
                            try {
                                val db = SQLiteDatabase.openDatabase(rkDbPath.path, null, SQLiteDatabase.OPEN_READONLY)
                                val cursor = db.rawQuery(
                                    "SELECT value FROM catalystLocalStorage WHERE key = ?",
                                    arrayOf("@flashlens_widget_shared_data")
                                )
                                if (cursor.moveToFirst()) {
                                    jsonRaw = cursor.getString(0)
                                }
                                cursor.close()
                                db.close()
                            } catch (_: Exception) {}
                        }
                    }

                    if (!jsonRaw.isNullOrEmpty()) {
                        val json = JSONObject(jsonRaw)
                        streakDays = json.optInt("streakDays", 0)
                        currentLives = json.optInt("currentLives", 5)
                        maxLives = json.optInt("maxLives", 5)
                        nextRegenMinutes = json.optInt("nextRegenMinutes", 0)
                        hasPracticedToday = json.optBoolean("hasPracticedToday", false)
                        dailyXp = json.optInt("dailyXp", 0)
                        lastStreakDate = json.optString("lastStreakDate", null)
                    }
                } catch (_: Exception) {
                    // Si SQLite aún no existe, mantiene valores por defecto seguros
                }
            }

            // Validar expiración de racha por fecha actual del dispositivo
            try {
                val sdf = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
                val todayDate = sdf.format(Date())
                val cal = Calendar.getInstance()
                cal.add(Calendar.DAY_OF_YEAR, -1)
                val yesterdayDate = sdf.format(cal.time)

                if (!lastStreakDate.isNullOrEmpty() && lastStreakDate != todayDate && lastStreakDate != yesterdayDate) {
                    streakDays = 0
                    hasPracticedToday = false
                } else if (lastStreakDate != todayDate) {
                    hasPracticedToday = false
                }
            } catch (_: Exception) {}

            // Aplicar Vidas y Temporizador en la cabecera
            val livesText = if (currentLives < maxLives && nextRegenMinutes > 0) {
                "❤️ $currentLives/$maxLives (${nextRegenMinutes}m)"
            } else {
                "❤️ $currentLives/$maxLives"
            }
            views.setTextViewText(R.id.text_lives, livesText)

            // Aplicar Racha y XP en la zona Hero
            val daysLabel = if (streakDays == 1) "DÍA" else "DÍAS"
            views.setTextViewText(R.id.text_streak_days, "$streakDays $daysLabel")
            views.setTextViewText(R.id.text_xp, "$dailyXp XP")

            // Aplicar Banner Inferior de Racha
            if (hasPracticedToday) {
                views.setTextViewText(R.id.text_streak_status, "✓ Racha asegurada")
                views.setTextColor(R.id.text_streak_status, Color.parseColor("#15803D"))
                views.setInt(R.id.text_streak_status, "setBackgroundResource", R.drawable.widget_native_pill_green)
            } else {
                views.setTextViewText(R.id.text_streak_status, "🚨 ¡Salva tu racha!")
                views.setTextColor(R.id.text_streak_status, Color.parseColor("#DC2626"))
                views.setInt(R.id.text_streak_status, "setBackgroundResource", R.drawable.widget_native_pill_red)
            }

            // Configurar apertura instantánea de la app al pulsar el widget
            val launchIntent = Intent(context, MainActivity::class.java).apply {
                flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
            }
            val pendingIntent = PendingIntent.getActivity(
                context,
                0,
                launchIntent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )
            views.setOnClickPendingIntent(R.id.widget_root, pendingIntent)

            // Notificar al Launcher
            appWidgetManager.updateAppWidget(appWidgetId, views)
        }
    }
}
