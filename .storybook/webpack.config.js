const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

const path = require("path");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules[0].test = /\.(ts|tsx)$/;
  config.module.rules[0].query.presets = ["@babel/preset-env"];

  config.module.rules.unshift({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader"),
    include: [path.resolve(__dirname, "../src")],
    options: {
      transpileOnly: true
    }
  });

  // [ts-loader, babel-loader, ...]

  return config;
};
