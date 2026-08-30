const { withAndroidManifest, withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withAndroidWidgets = (config) => {
  // 1. Inyectar los receptores y permisos en AndroidManifest.xml
  config = withAndroidManifest(config, async (config) => {
    const manifest = config.modResults.manifest;
    const mainApplication = manifest.application[0];
    const existingReceivers = mainApplication.receiver || [];

    // Permisos para AlarmManager y reinicio del dispositivo
    const existingPermissions = manifest['uses-permission'] || [];
    const requiredPermissions = [
      'android.permission.RECEIVE_BOOT_COMPLETED',
      'android.permission.SCHEDULE_EXACT_ALARM',
      'android.permission.USE_EXACT_ALARM',
    ];

    for (const perm of requiredPermissions) {
      if (!existingPermissions.some((p) => p.$ && p.$['android:name'] === perm)) {
        existingPermissions.push({
          $: { 'android:name': perm },
        });
      }
    }
    manifest['uses-permission'] = existingPermissions;

    const hasCompact = existingReceivers.some(
      (r) => r.$ && r.$['android:name'] === '.CompactWidgetProvider'
    );
    const hasExpanded = existingReceivers.some(
      (r) => r.$ && r.$['android:name'] === '.ExpandedWidgetProvider'
    );

    const standardWidgetActions = [
      { $: { 'android:name': 'android.appwidget.action.APPWIDGET_UPDATE' } },
      { $: { 'android:name': 'android.intent.action.BOOT_COMPLETED' } },
      { $: { 'android:name': 'android.intent.action.MY_PACKAGE_REPLACED' } },
      { $: { 'android:name': 'android.intent.action.TIME_SET' } },
      { $: { 'android:name': 'android.intent.action.TIMEZONE_CHANGED' } },
    ];

    if (!hasCompact) {
      existingReceivers.push({
        $: {
          'android:name': '.CompactWidgetProvider',
          'android:label': 'FlashLens Compact (2x2)',
          'android:exported': 'true',
        },
        'intent-filter': [
          {
            action: standardWidgetActions,
          },
        ],
        'meta-data': [
          {
            $: {
              'android:name': 'android.appwidget.provider',
              'android:resource': '@xml/widget_compact_info',
            },
          },
        ],
      });
    }

    if (!hasExpanded) {
      existingReceivers.push({
        $: {
          'android:name': '.ExpandedWidgetProvider',
          'android:label': 'FlashLens Word & Streak (4x2)',
          'android:exported': 'true',
        },
        'intent-filter': [
          {
            action: standardWidgetActions,
          },
        ],
        'meta-data': [
          {
            $: {
              'android:name': 'android.appwidget.provider',
              'android:resource': '@xml/widget_expanded_info',
            },
          },
        ],
      });
    }

    mainApplication.receiver = existingReceivers;
    return config;
  });

  // 2. Copiar archivos fuente Kotlin y recursos XML a la estructura generada por Prebuild
  config = withDangerousMod(config, [
    'android',
    async (config) => {
      const projectRoot = config.modRequest.projectRoot;
      const androidRoot = config.modRequest.platformProjectRoot;
      const templateDir = path.join(projectRoot, 'plugins', 'android-widgets-template');

      // Rutas destino en el proyecto nativo generado
      const javaDestDir = path.join(androidRoot, 'app', 'src', 'main', 'java', 'com', 'flashlens', 'app');
      const resLayoutDestDir = path.join(androidRoot, 'app', 'src', 'main', 'res', 'layout');
      const resXmlDestDir = path.join(androidRoot, 'app', 'src', 'main', 'res', 'xml');

      // Crear directorios si no existen
      if (!fs.existsSync(javaDestDir)) fs.mkdirSync(javaDestDir, { recursive: true });
      if (!fs.existsSync(resLayoutDestDir)) fs.mkdirSync(resLayoutDestDir, { recursive: true });
      if (!fs.existsSync(resXmlDestDir)) fs.mkdirSync(resXmlDestDir, { recursive: true });

      // Copiar archivos Kotlin
      const javaSrcDir = path.join(templateDir, 'java');
      if (fs.existsSync(javaSrcDir)) {
        const kotlinFiles = fs.readdirSync(javaSrcDir);
        for (const file of kotlinFiles) {
          fs.copyFileSync(path.join(javaSrcDir, file), path.join(javaDestDir, file));
        }
      }

      // Copiar archivos de Layout
      const layoutSrcDir = path.join(templateDir, 'res', 'layout');
      if (fs.existsSync(layoutSrcDir)) {
        const layoutFiles = fs.readdirSync(layoutSrcDir);
        for (const file of layoutFiles) {
          fs.copyFileSync(path.join(layoutSrcDir, file), path.join(resLayoutDestDir, file));
        }
      }

      // Copiar archivos de Configuración XML
      const xmlSrcDir = path.join(templateDir, 'res', 'xml');
      if (fs.existsSync(xmlSrcDir)) {
        const xmlFiles = fs.readdirSync(xmlSrcDir);
        for (const file of xmlFiles) {
          fs.copyFileSync(path.join(xmlSrcDir, file), path.join(resXmlDestDir, file));
        }
      }

      // 3. Inyectar WidgetBridgePackage en MainApplication.kt
      const mainAppFile = path.join(javaDestDir, 'MainApplication.kt');
      if (fs.existsSync(mainAppFile)) {
        let content = fs.readFileSync(mainAppFile, 'utf-8');
        if (!content.includes('WidgetBridgePackage()')) {
          content = content.replace(
            /PackageList\(this\)\.packages\.apply\s*\{/,
            'PackageList(this).packages.apply {\n              add(WidgetBridgePackage())'
          );
          fs.writeFileSync(mainAppFile, content, 'utf-8');
        }
      }

      return config;
    },
  ]);

  return config;
};

module.exports = withAndroidWidgets;
