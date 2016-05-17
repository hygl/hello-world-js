var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../server');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/user/user4')
      .expect(404, done);
  });
   it('return correct user', function testPath(done) {
    request(server)
      .get('/user/user1')
      .expect(200,{
        user: 'user1'
      }, done);
  });
  
});