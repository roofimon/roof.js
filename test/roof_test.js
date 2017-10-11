var assert = require("assert");
var sinon = require("sinon");
var files = require("../lib/files");
var Roof = require('../roof.js');

describe('Roof Behavior', function () {
  describe('Module Roof', function () {
    it('should have a getChange Method', function () {
      assert.equal(typeof Roof, 'object');
      assert.equal(typeof Roof.doSomething, 'function');
    })

    it('should greet people through console.log', function () {
      Roof.say = sinon.spy();

      Roof.greetToPeople();

      assert.ok(Roof.say.calledOnce);
    });

    it('should not say anything if directory is not git', function() {
      files.directoryExists = sinon.stub().returns(false);
      Roof.say = sinon.spy();

      Roof.checkGit();

      assert.ok(!Roof.say.called);
    });

    it('should say something if directory is git', function() {
      files.directoryExists = sinon.stub().returns(true);
      Roof.say = sinon.spy();

      Roof.checkGit();

      assert.ok(Roof.say.calledOnce);
    });
  })
});  