const { withAndroidManifest, withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withAndroidWidgets = (config) => {
  // 1. Inyectar los receptores en AndroidManifest.xml
  config = withAndroidManifest(config, async (config) => {
    const mainApplication = config.modResults.manifest.application[0];
    const existingReceivers = mainApplication.receiver || [];

    const hasCompact = existingReceivers.some(
      (r) => r.$ && r.$['android:name'] === '.CompactWidgetProvider'
    );
    const hasExpanded = existingReceivers.some(
      (r) => r.$ && r.$['android:name'] === '.ExpandedWidgetProvider'
    );

    if (!hasCompact) {
      existingReceivers.push({
        $: {
          'android:name': '.CompactWidgetProvider',
          'android:label': 'FlashLens Compact (2x2)',
          'android:exported': 'true',
        },
        'intent-filter': [
          {
            action: [
              {
                $: {
                  'android:name': 'android.appwidget.action.APPWIDGET_UPDATE',
                },
              },
            ],
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
            action: [
              {
                $: {
                  'android:name': 'android.appwidget.action.APPWIDGET_UPDATE',
                },
              },
            ],
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
      const javaTargetDir = path.join(androidRoot, 'app', 'src', 'main', 'java', 'com', 'flashlens', 'app');
      const xmlTargetDir = path.join(androidRoot, 'app', 'src', 'main', 'res', 'xml');
      const layoutTargetDir = path.join(androidRoot, 'app', 'src', 'main', 'res', 'layout');

      // Crear directorios de destino si no existen
      fs.mkdirSync(javaTargetDir, { recursive: true });
      fs.mkdirSync(xmlTargetDir, { recursive: true });
      fs.mkdirSync(layoutTargetDir, { recursive: true });

      // Copiar archivos Kotlin
      const javaFiles = [
        'CompactWidgetProvider.kt',
        'ExpandedWidgetProvider.kt',
        'WidgetBridgeModule.kt',
        'WidgetBridgePackage.kt',
      ];
      for (const file of javaFiles) {
        const srcPath = path.join(templateDir, 'java', file);
        const destPath = path.join(javaTargetDir, file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      }

      // Copiar archivos XML de metadata
      const xmlFiles = ['widget_compact_info.xml', 'widget_expanded_info.xml'];
      for (const file of xmlFiles) {
        const srcPath = path.join(templateDir, 'res', 'xml', file);
        const destPath = path.join(xmlTargetDir, file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      }

      // Copiar layouts XML
      const layoutFiles = ['widget_compact_layout.xml', 'widget_expanded_layout.xml'];
      for (const file of layoutFiles) {
        const srcPath = path.join(templateDir, 'res', 'layout', file);
        const destPath = path.join(layoutTargetDir, file);
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      }

      // Inyectar WidgetBridgePackage en MainApplication.kt si no está presente
      const mainAppPath = path.join(javaTargetDir, 'MainApplication.kt');
      if (fs.existsSync(mainAppPath)) {
        let mainAppContent = fs.readFileSync(mainAppPath, 'utf8');
        if (!mainAppContent.includes('WidgetBridgePackage()')) {
          mainAppContent = mainAppContent.replace(
            /PackageList\(this\)\.packages\.apply\s*\{([\s\S]*?)\}/,
            (match, inner) => {
              if (inner.includes('WidgetBridgePackage()')) return match;
              return `PackageList(this).packages.apply {\n              add(WidgetBridgePackage())${inner}\n            }`;
            }
          );
          fs.writeFileSync(mainAppPath, mainAppContent, 'utf8');
        }
      }

      return config;
    },
  ]);

  return config;
};

module.exports = withAndroidWidgets;
