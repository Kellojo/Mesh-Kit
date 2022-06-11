const { defineConfig } = require("cypress");
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
        baseUrl: 'https://kellojo.github.io/Mesh-Kit/',
    setupNodeEvents(on, config) {
        on('task', { isFileExist, findFiles })
    },
  },
});
