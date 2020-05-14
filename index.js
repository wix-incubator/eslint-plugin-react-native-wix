'use strict';

module.exports = {
  rules: {
    'never-device-emitter-remove-all': require('./lib/rules/never-device-emitter-remove-all'),
    'no_disable_yellow_box': require('./lib/rules/no_disable_yellow_box'),
    'jsx-no-logical-operators': require('./lib/rules/jsx-no-logical-operators')
  },
  configs: {
    recommended: {
      rules: {
        'never-device-emitter-remove-all': 2,
        'no_disable_yellow_box': 2,
        'jsx-no-logical-operators': 0
      }
    }
  }
};
