var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('groups controller', function() {
  it('should list ALL groups on /group GET');
  it('should add a SINGLE group on /group POST');
});