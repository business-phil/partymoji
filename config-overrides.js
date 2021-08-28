module.exports = function override(config, env) {
  // config.module.rules.push({
  //   test: /\.worker\.ts$/,
  //   use: { loader: 'worker-loader' },
  // });
  config.output = {
    ...config.output,
    globalObject: 'this',
  };
  return config;
};
