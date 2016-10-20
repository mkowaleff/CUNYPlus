var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('discussion controller', function() {
  it('should list ALL discussions about major on /major GET');
  it('should list ALL activities posts on /activities GET');
  it('should list ALL groups posts on /groups GET');
  it('should list ALL internship posts on /internship GET');
});