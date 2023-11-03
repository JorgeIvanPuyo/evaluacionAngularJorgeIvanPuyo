// Karma configuration file

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-jasmine-html-reporter"),
    ],
    client: {
      clearContext: false,
    },
    browsers: ["ChromeHeadlessNoSandbox"],
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  });
};
