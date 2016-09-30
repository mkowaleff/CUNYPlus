var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('groups controller', function() {
  it('should list ALL groups post on /group GET');
  it('should add a SINGLE group post on /group POST');
});
