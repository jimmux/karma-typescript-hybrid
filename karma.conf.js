module.exports = function(config) {
  config.set({
    // logLevel: "DEBUG",
    // logLevel: "INFO",
    logLevel: "ERROR",

    singleRun: true,

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      { pattern: "src/**/*.+(js|ts)" },
      // In the original project, including .js is needed for coverage, but the imports don't run side effects
      // { pattern: "src/**/*.ts" },
    ],

    preprocessors: {
      "src/**/*.+(js|ts)": ["karma-typescript"],
    },

    reporters: ["progress", "karma-typescript"],

    browsers: [
      // "Chrome",
      "PhantomJS"
    ],

    karmaTypescriptConfig: {
      compilerOptions: {
          allowJs: true
      },
      bundlerOptions: {
        // Could fix issue with imports by turning .js source into proper modules?
        // Only runs the translated source when js files are removed from "files" :(
        transforms: [
          function(context, callback) {
            if( /\.js$/.test(context.module)) {
              console.debug('Injecting into ' + context.module);
              context.source = context.source + `
                //! Exports added by test config for TypeScript compatibility
                console.debug('NEW GLOBAL: a = ' + a);
                global.a = a; 
                //! End of transform 
              `;
              return callback(undefined, true);
            }
            return callback(undefined, false);
          }
        ]
      },
      reports: {
        'html': 'coverage',
        'lcovonly': 'coverage'
      }
    }
  });
};

