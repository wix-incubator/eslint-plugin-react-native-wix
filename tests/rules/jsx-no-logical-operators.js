/**
 * @fileoverview Disallows && and || operators in JSX
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../lib/rules/jsx-no-logical-operators'),

  RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({parserOptions: {ecmaVersion: 6, ecmaFeatures: {jsx: true}}});
ruleTester.run('jsx-no-logical-operators', rule, {

  valid: [
    '<component>{true ? 1 : null}</component>',
    '<component prop={true && 1}>{2}</component>',
    '<component>{true && 1 ? 1 : 2}</component>',
  ],

  invalid: [
    {
      code: '<component>{true && 1}</component>',
      errors: [{
        messageId: 'Unexpected usage of && operator.',
      }],
    },
    {
      code: '<component>{true || 1}</component>',
      errors: [{
        messageId: 'Unexpected usage of || operator.',
      }],
    },
  ],
});
