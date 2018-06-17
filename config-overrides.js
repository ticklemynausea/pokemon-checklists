module.exports = function override(config, env) {
  config = {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [
        ...config.resolve.modules,
        "src",
      ]
    }
  }

  return config;
}
