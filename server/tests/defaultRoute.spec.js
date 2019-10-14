import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('/ Endpoint', () => {
  it('should be working', async () => {
    let res;
    try {
      res = await chai.request(app).get('/');
    } catch (error) {
      console.error(error);
    }
    expect(res.status).to.equal(200);
  });
});

describe('Invalid endpoint', () => {
  it('should be return 404', async () => {
    let res;
    try {
      res = await chai.request(app).get('/invalid');
    } catch (error) {
      console.error(error);
    }
    expect(res.status).to.equal(404);
  });
});
