var assert = require("assert");
var Roof = require('../roof.js'); 

describe('Roof Behavior', function(){
  describe('Module Roof', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof Roof, 'object');
      assert.equal(typeof Roof.doSomething, 'function');
    })
  })
});  