/** @type {import("@babel/core").ConfigFunction} */
module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      [
        'transform-inline-environment-variables',
        {
          include: ['POSTHOG_API_KEY', 'SENTRY_DSN'],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
