var chai = require('chai');
var assert = require('assert');
var should = chai.should();
var validate = require('../lib/validations');

describe('User Validations', function () {
  describe('Name is Valid', function() {
    it('Name cannot be blank', function (done) {
      validate.nameIsNotBlank.should.be.a('function');
      assert.equal(validate.nameIsNotBlank('   '), 'Name cannot be blank');
      assert.equal(validate.nameIsNotBlank('George Orwell'), true);
      done();
    });
  });
  describe('Email is Valid', function () {
    xit('should not be blank', function (done) {
      validate.emailIsValid.should.be.a('function');
      assert.equal(validate.emailIsNotBlank('    '), 'Email is invalid')
      assert.equal(validate.emailIsNotBlank('me@me.com'), true)
      done();
    });
  });
  describe('Phone Number is Valid', function () {
    xit('should not be blank', function (done) {
      validate.phoneIsValid.should.be.a('function');
      assert.equal(validate.phoneNumberIsValid('  '), 'Phone number is invalid');
      done();
    });
  });
});
