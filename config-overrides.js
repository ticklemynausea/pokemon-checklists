module.exports = function override(config, env) {

  // Add src/ to resolve modules path.
  config.resolve.modules.push("src");

  // Add sass laoder
  config.module.rules[1].oneOf.unshift({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader"
    ]
  });

  return config;
}
