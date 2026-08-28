const { withAndroidManifest, withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withAndroidWidgets = (config) => {
  // 1. Modificar AndroidManifest.xml para registrar los receptores de los widgets
  config = withAndroidManifest(config, async (config) => {
    const mainApplication = config.modResults.manifest.application[0];

    // Verificar si ya están registrados
    const existingReceivers = mainApplication.receiver || [];
    const hasCompact = existingReceivers.some(
      (r) => r.$['android:name'] === '.CompactWidgetProvider'
    );
    const hasExpanded = existingReceivers.some(
      (r) => r.$['android:name'] === '.ExpandedWidgetProvider'
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

  return config;
};

module.exports = withAndroidWidgets;
