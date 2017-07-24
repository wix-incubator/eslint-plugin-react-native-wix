/**
 * @fileoverview Function DeviceEventEmitter.removeAllListeners() (by react's native api) should never be used due to
 * its potentially destructive results (i.e. removing *all* native-bound listeners!).
 */
'use strict';

module.exports = context => {
  return {
      AssignmentExpression: node => {
        if ((node.operator === '=') &&
            (node.left.object.name === 'console' && node.left.property.name === 'disableYellowBox') &&
            (node.right.type === 'Literal' && node.right.value === true)) {
          context.report(node, 'Never commit console.disableYellowBox = true.');
        }
      }
    };
};
