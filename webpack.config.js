const createExpoWebpackConfigAsync = require('@expo/webpack-config');

/**
 * @see https://github.com/expo/expo/issues/6660#issuecomment-667991626
 * @see https://github.com/kristerkari/react-native-svg-transformer/issues/135#issuecomment-1008310514
 */
const withSVGR = (config) => {
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      rule.oneOf.unshift({
        test: /.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack']
      });
    }
    return rule;
  });
  return config;
};

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Finally return the new config for the CLI to use.
  return withSVGR(config);
};
