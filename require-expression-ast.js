'use strict';

module.exports = generateRequireExpressionAst;

function generateRequireExpressionAst(moduleName) {
  return {
    type: 'CallExpression',
    callee: {
      type: 'Identifier',
      name: 'require'
    },
    arguments: [{
      type: 'Literal',
      value: moduleName
    }]
  };
}
