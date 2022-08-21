module.exports = {
    default: {
      format: ['html:test-outputs/reports/cucumber-report.html'],
      parallel: 3,
      require: [
        './bdd/**/*.js',
      ],
    },
  }
  