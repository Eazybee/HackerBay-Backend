import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('/login', () => {
  it('should log in successfully', async () => {
    let res;

    try {
      res = await chai.request(app)
        .post('/api/v1/auth/login').send({
          username: 'Eazybee',
          password: 'Eazybeee',
        });
    } catch (error) {
      console.error(error);
    }

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal('success');
  });

  it('should not log in successfully', async () => {
    let res;

    try {
      res = await chai.request(app)
        .post('/api/v1/auth/login').send({
          username: 'Eazybee',
          password: '',
        });
    } catch (error) {
      console.error(error);
    }

    expect(res.status).to.equal(400);
    expect(res.body.status).to.equal('error');
    expect(res.body).to.haveOwnProperty('error');
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
