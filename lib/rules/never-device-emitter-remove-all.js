/**
 * @fileoverview Function DeviceEventEmitter.removeAllListeners() (by react's native api) should never be used due to
 * its potentially destructive results (i.e. removing *all*, cross-verticals listeners).
 */
'use strict';

module.exports = (context) => {
  return {
    MemberExpression: (node) => {
      if (node.object.name === 'DeviceEventEmitter' && node.property.name === 'removeAllListeners') {
        context.report(node, 'Never use DeviceEventEmitter.removeAllListeners(). Issue multiple calls to removeListener() instead.');
      }
    }
  };
};
