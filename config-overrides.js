module.exports = function override(config, env) {
  config.module.rules[1].oneOf[1].use.unshift({
    loader: require.resolve("babel-loader")
  });

  return config;
};
