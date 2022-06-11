const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        baseUrl: 'https://kellojo.github.io/Mesh-Kit/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
