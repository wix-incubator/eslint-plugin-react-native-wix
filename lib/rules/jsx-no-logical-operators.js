/**
 * @fileoverview Disallows && and || operators in JSX
 */
'use strict';

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const NODE_TYPES = {
  JSXExpressionContainer: 'JSXExpressionContainer',
};

const EXPRESSION_TYPES = {
  LogicalExpression: 'LogicalExpression',
};

const DISALLOW_OPERATORS = {
  and: '\\&\\&',
  or: '\\|\\|',
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'No && and || operators in JSX',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: null,
    schema: [
      {
        'type': 'object',
        'properties': {
          'and': {
            'type': 'boolean',
            'default': false,
          },
          'or': {
            'type': 'boolean',
            'default': false,
          },
        },
        'additionalProperties': false,
      },
    ],
  },

  create: function (context) {
    const operators = context.options && context.options[0];
    const includedOperators = operators ?
      Object.keys(operators).reduce((acc, opt) => operators[opt] && DISALLOW_OPERATORS[opt] ? [...acc, DISALLOW_OPERATORS[opt]] : acc, []) :
      Object.values(DISALLOW_OPERATORS);
    const disallowOperatorsRegex = new RegExp(`^(${includedOperators.join('|')})$`);

    return {
      JSXElement: (node) => {
        const jsxExpressionContainers = node.children.filter(({type}) => NODE_TYPES[type]);

        if (jsxExpressionContainers.length) {
          jsxExpressionContainers.forEach((item) => {
            if (item.expression.type === EXPRESSION_TYPES.LogicalExpression && !!item.expression.operator.match(disallowOperatorsRegex)) {
              context.report({
                node: item.expression,
                message: `Unexpected usage of ${RegExp.$1} operator.`,
              });
            }
          });
        }
      },
    }
  },
};
