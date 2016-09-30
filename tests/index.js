var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('index controller', function() {
  it('should display home page on / GET');
  it('should change to activies page on /activities USE' );
  it('should change to major page on /major USE');
  it('should change to groups page on /group USE');
  it('should change to login page on /login USE');
  it('should change to signup page on /signup USE');
});
