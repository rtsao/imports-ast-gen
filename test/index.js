'use strict';

var test = require('tape');
var escodegen = require('escodegen');

var genExpressions = require('../').expressions;

test('basic functionality', function t(assert) {

  var modules = {
    'Foo': 'foo',
    'Bar': 'bar'
  };

  var expressions = genExpressions(modules);
  var expected = 'var Foo = require(\'foo\');\nvar Bar = require(\'bar\');'

  assert.equal(escodegen.generate({
    type: 'Program',
    body: expressions}), expected, 'output matches expected');

  assert.end();

});
