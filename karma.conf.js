module.exports = function(config) {
  config.set({

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      // { pattern: "src/**/*.+(js|ts)" },
      // Side-effects work, but no coverage
      { pattern: "src/**/*.ts" },
    ],

    preprocessors: {
      "src/**/*.+(js|ts)": ["karma-typescript"],
    },

    reporters: ["progress", "karma-typescript"],

    karmaTypescriptConfig: {
      compilerOptions: {
        allowJs: true,
      },
    },

    browsers: ["Chrome"]
  });
};

