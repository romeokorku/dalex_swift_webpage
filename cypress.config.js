const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:"https://app.dalexswift.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/examples/*.js"
  },
});

