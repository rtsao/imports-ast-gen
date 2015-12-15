'use strict';

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
      init: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'require'
        },
        arguments: [{
          type: 'Literal',
          value: moduleName
        }]
      }
    }],
    kind: kind
  }
}
