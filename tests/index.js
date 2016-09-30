var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('index controller', function() {
  it('should display home page on / GET');
  it('should change to activies page /activities USE' );
  it('should change to major page /major USE');
  it('should change to groups page /group USE');
  it('should change to login page /login USE');
  it('should change to signup page /signup USE');
});