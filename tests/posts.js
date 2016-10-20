var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Posts Controller (Version 1)', function() {
  it('should list ALL posts on /posts/ GET');
  it('should list a SINGLE post on /posts/:title GET');
  it('should add a SINGLE post on /posts POST');
  it('should add a SINGLE reply post on /posts/:title PUT')
  it('should update a SINGLE post on /posts/:title PUT');
  it('should delete a SINGLE post on /posts/:title DELETE');
});