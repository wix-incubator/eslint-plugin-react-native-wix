'use strict';

module.exports = {
  rules: {
    'never-device-emitter-remove-all': require('./lib/rules/never-device-emitter-remove-all')
  },
  configs: {
    recommended: {
      rules: {
        'never-device-emitter-remove-all': 2
      }
    }
  }
};
