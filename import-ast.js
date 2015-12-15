'use strict';

module.exports = generateImportAst;

function generateImportAst(varName, moduleName) {
  return {
    type: 'ImportDeclaration',
    specifiers: [
      {
        type: 'ImportDefaultSpecifier',
        local: {
          type: 'Identifier',
          name: varName
        }
      }
    ],
    source: {
      type: 'Literal',
      value: ModuleName
    }
  };
}
