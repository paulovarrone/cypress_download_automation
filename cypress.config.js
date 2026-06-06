const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: 'https://truefilesize.com/',
    redirectionLimit: 100,
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 100000,
    blockHosts: [
      '*googlesyndication.com',
      '*google-analytics.com',
      '*googletagmanager.com',
      '*googletagservices.com',
      '*doubleclick.net',
      '*adservice.google.com',
      '*facebook.net'
    ],
    testIsolation: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
    },
  },
});
