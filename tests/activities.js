var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('activities controller', function() {
  it('should list ALL activities on /activities GET');
  it('should add a SINGLE activity on /activities POST');
});