import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import * as Sentry from '@sentry/react-native';
import { AnalyticsProvider } from '~/utils/analytics';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <AnalyticsProvider>
        <Main />
      </AnalyticsProvider>
    </SafeAreaProvider>
  );
}

const Main: React.FC = () => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Slot />
    </View>
  );
};
