Simplest reproduction repo for https://github.com/PostHog/posthog-js-lite/issues/182

- install node and pnpm
- clone this repo
- `pnpm i`
- setup up this project to build in EAS: https://docs.expo.dev/build/setup/
- add `POSTHOG_API_KEY` and `SENTRY_DSN` as expo secrets to your project
- kick off a build in EAS: `eas build --profile preview --platform ios`
- install this app on an iOS device (I believe this requires a apple developer account)

I've tried this without sentry and it looks like it works fine. There must
be some sort of conflict happening between sentry and posthog.

Also, maybe this is recreate-able without expo/EAS. I just didn't have the time
to figure that out.

NOTE the workaround I describe [here](https://github.com/PostHog/posthog-js-lite/issues/182#issuecomment-1948797068)
is certainly still a useful for this issue even in this simplest case
