const webpackMerge = require("webpack-merge");

const applyPresets = env => {
  const { presets } = env;
  /** @type {string[]} */
  const mergedPresets = [].concat(...[presets]);
  const mergedconfigs = mergedPresets.map(
    presetName => require(`./presets/webpack.${presetName}`)(env)
  )

  return webpackMerge({}, ...mergedconfigs);
};

module.exports = applyPresets;
