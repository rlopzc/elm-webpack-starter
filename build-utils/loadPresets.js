const webpackMerge = require("webpack-merge");

const loadPresets = env => {
  const presets = env.presets || [];

  const mergedPresets = [].concat(...[presets]);
  const mergedconfigs = mergedPresets.map(
    presetName => require(`./presets/webpack.${presetName}`)(env)
  )

  return webpackMerge({}, ...mergedconfigs);
};

module.exports = loadPresets;
