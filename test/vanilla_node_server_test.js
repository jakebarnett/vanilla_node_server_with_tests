'use strict';

require('../lib/vanilla_node_server');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = require("chai").expect;

chai.use(chaihttp);

describe('my node http server' , function () {
  var server = 'localhost:3000';
  var now = new Date().toString();
  it('should respond with the time' , function (done) {
    chai.request(server)
    .get('/time')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql("The current time is " + now);
      done();
    })
  })
  it('should resond with "hello" + name', function (done) {
    chai.request(server)
    .get('/greet/Tyler')
    .end( function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql("Hello Tyler");
      done();
    })
  })
})
