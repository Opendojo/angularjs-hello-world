exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '../test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://github.local.opendojo.org/Opendojo/angularjs-hello-world/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
