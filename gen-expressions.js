'use strict';

var generateImport = require('./import-ast');
var generateRequire = require('./require-ast');

module.exports = generateExpressions;

 function generateExpressions(modules, kind) {
  kind = kind || 'var';
  var generator = kind === 'es6' ? generateImport : generateRequire;

  return Object.keys(modules).map(function toAst(varName) {
    return generator(varName, modules[varName], kind);
  });
}
