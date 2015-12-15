'use strict';

var generateImportAst = require('./import-ast');
var generateRequireAst = require('./require-ast');
var generateExpressions = require('./gen-expressions');

module.exports = {
  requireAst: generateRequireAst,
  importAst: generateImportAst,
  expressions: generateExpressions
};
