import React from 'react';
import { PostHog, PostHogProvider } from 'posthog-react-native';

export const analytics = PostHog.initAsync(process.env.POSTHOG_API_KEY, {
  host: 'https://app.posthog.com',
});

export let analyticsSync: PostHog | undefined;
analytics.then((res) => (analyticsSync = res)).catch(console.error);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider
      client={analytics}
      autocapture={{
        captureTouches: true,
        captureLifecycleEvents: true,
        captureScreens: true,
      }}
    >
      {children}
    </PostHogProvider>
  );
}
