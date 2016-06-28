'use strict';

const assert = require('chai').assert;
const homeController = require('./homeController');

describe('HomeController', function() {
  describe('message value', function () {
    it('should not be null', function () {
        assert.isOk(homeController);
    });
  });
});