var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('major controller', function() {
  it('should list ALL discussion about major on /major GET');
  it('should add a SINGLE major post on /major POST');
});