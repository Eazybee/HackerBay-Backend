import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('/ Endpoint', () => {
  it('should be working', async () => {
    const res = await chai.request(app).get('/');
    expect(res.status).to.equal(200);
  });
});

describe('Invalid endpoint', () => {
  it('should be return 404', async () => {
    const res = await chai.request(app).get('/invalid');
    expect(res.status).to.equal(404);
  });
});
