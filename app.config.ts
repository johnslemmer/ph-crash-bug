import type { ExpoConfig } from '@expo/config';

const defineConfig = (): ExpoConfig => ({
  name: 'Foo',
  owner: 'Bar',
  slug: 'Foo',
  scheme: 'foo',
  version: '1.0.0',
  userInterfaceStyle: 'light',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.bar.foo',
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: ['expo-localization'],
});

export default defineConfig;
