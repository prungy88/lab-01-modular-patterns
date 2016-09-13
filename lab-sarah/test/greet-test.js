'use strict';

const greetings = require('../lib/greet');

const assert = require('assert');

describe('testing module greet', function() {
  describe('testing #sayHello()', function() {
    it('should return hello Sarah', function() {
      let result = greetings.sayHello('Sarah');
      assert.ok(result === 'hello Sarah', 'was not hello Sarah');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greetings.sayHello();
      }, 'should have thrown a missing name error');
    });
  });
});
