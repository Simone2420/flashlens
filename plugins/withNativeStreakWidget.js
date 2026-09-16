const { withAndroidManifest, withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

/**
 * Expo Config Plugin para inyectar automáticamente el Widget Nativo Pequeño en Android
 * durante prebuild o EAS Build, sin necesidad de versionar la carpeta android/ en git.
 */
function withNativeStreakWidget(config) {
  // 1. Modificar AndroidManifest.xml para declarar el AppWidgetProvider nativo
  config = withAndroidManifest(config, async (manifestConfig) => {
    const manifest = manifestConfig.modResults;
    const application = manifest.manifest.application[0];

    if (!application.receiver) {
      application.receiver = [];
    }

    const receiverName = '.widget.StreakMasterWidgetProvider';
    const existing = application.receiver.find((r) => r.$ && r.$['android:name'] === receiverName);

    const nativeReceiver = {
      $: {
        'android:name': receiverName,
        'android:exported': 'true',
        'android:label': 'Racha FlashLens (Nativo)',
      },
      'intent-filter': [
        {
          action: [
            { $: { 'android:name': 'android.appwidget.action.APPWIDGET_UPDATE' } },
            { $: { 'android:name': 'com.flashlens.app.ACTION_UPDATE_NATIVE_WIDGET' } },
          ],
        },
      ],
      'meta-data': [
        {
          $: {
            'android:name': 'android.appwidget.provider',
            'android:resource': '@xml/widget_provider_streak_master_native',
          },
        },
      ],
    };

    if (!existing) {
      application.receiver.push(nativeReceiver);
    }

    return manifestConfig;
  });

  // 2. Inyectar archivos Kotlin y recursos XML en android/app/src/main/
  config = withDangerousMod(config, [
    'android',
    async (modConfig) => {
      const projectRoot = modConfig.modRequest.projectRoot;
      const templatesDir = path.join(projectRoot, 'plugins', 'templates');

      const androidAppDir = path.join(projectRoot, 'android', 'app', 'src', 'main');
      if (!fs.existsSync(androidAppDir)) {
        return modConfig;
      }

      // Rutas de destino
      const javaWidgetDir = path.join(androidAppDir, 'java', 'com', 'flashlens', 'app', 'widget');
      const resLayoutDir = path.join(androidAppDir, 'res', 'layout');
      const resXmlDir = path.join(androidAppDir, 'res', 'xml');
      const resDrawableDir = path.join(androidAppDir, 'res', 'drawable');

      [javaWidgetDir, resLayoutDir, resXmlDir, resDrawableDir].forEach((dir) => {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
      });

      // Mapeo de archivos a copiar
      const filesToCopy = [
        {
          src: path.join(templatesDir, 'StreakMasterWidgetProvider.kt'),
          dest: path.join(javaWidgetDir, 'StreakMasterWidgetProvider.kt'),
        },
        {
          src: path.join(templatesDir, 'widget_streak_master_native.xml'),
          dest: path.join(resLayoutDir, 'widget_streak_master_native.xml'),
        },
        {
          src: path.join(templatesDir, 'widget_provider_streak_master_native.xml'),
          dest: path.join(resXmlDir, 'widget_provider_streak_master_native.xml'),
        },
        {
          src: path.join(templatesDir, 'widget_native_card_bg.xml'),
          dest: path.join(resDrawableDir, 'widget_native_card_bg.xml'),
        },
        {
          src: path.join(templatesDir, 'widget_native_pill_green.xml'),
          dest: path.join(resDrawableDir, 'widget_native_pill_green.xml'),
        },
        {
          src: path.join(templatesDir, 'widget_native_pill_red.xml'),
          dest: path.join(resDrawableDir, 'widget_native_pill_red.xml'),
        },
        {
          src: path.join(templatesDir, 'widget_native_pill_lives.xml'),
          dest: path.join(resDrawableDir, 'widget_native_pill_lives.xml'),
        },
      ];

      for (const item of filesToCopy) {
        if (fs.existsSync(item.src)) {
          fs.copyFileSync(item.src, item.dest);
        }
      }

      return modConfig;
    },
  ]);

  return config;
}

module.exports = withNativeStreakWidget;
