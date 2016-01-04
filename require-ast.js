'use strict';

var requireExpressionAst = require('./require-expression-ast');

module.exports = generateRequireAst;

function generateRequireAst(varName, moduleName, kind) {
  kind = kind || 'var';

  return {
    type: 'VariableDeclaration',
    declarations: [{
      type: 'VariableDeclarator',
      id: {
        'type': 'Identifier',
        'name': varName
      },
      init: requireExpressionAst(moduleName)
    }],
    kind: kind
  };
}
