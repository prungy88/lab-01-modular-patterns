'use strict';

const greetings = require('../lib/greet');

const assert = require('assert');

describe('testing greet module', function() {
  describe('testing greet method', function() {
    it('should return hello Sarah', function() {
      var result = greetings('Sarah');
      assert.ok(result === 'hello Sarah', 'was not hello Sarah');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greetings();
      }, 'should have thrown a missing name error');
    });
  });
});
