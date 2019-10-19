import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import patchJson from '../src/controlllers/jsonPatch';

chai.use(chaiHttp);
const { expect } = chai;

describe('/json endpoint', () => {
  it('should patch document successfully', async () => {
    let res;

    try {
      res = await chai.request(app)
        .patch('/api/v1/json').send({
          document: { firstName: 'Joachim', lastName: 'Wester' },
          operation: { op: 'replace', path: '/firstName', value: 'Bee' },
        });
    } catch (error) {
      console.error(error);
    }

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal('success');
    expect(res.body.data.document.firstName).equal('Bee');
  });

  it('should not patch document successfully when passed invalid operation', async () => {
    let res;

    try {
      res = await chai.request(app)
        .patch('/api/v1/json').send({
          document: { firstName: 'Joachim', lastName: 'Wester' },
          operation: { op: 'replace', path: '/ola', value: 'Joachim' },
        });
    } catch (error) {
      console.error(error);
    }

    expect(res.status).to.equal(400);
    expect(res.body.status).to.equal('error');
    expect(res.body).to.haveOwnProperty('error');
  });
});

// Unit Test
describe('jsonPatchController', () => {
  const req = {
    body: {
      document: '',
      operation: '',
    },
  };
  const res = {
    status: (code) => {
      res.statusCode = code;
      return res;
    },
    json: (data) => {
      res.body = data;
      return res;
    },
  };

  it('should not patch document successfully when passed empty string', () => {
    patchJson(req, res);
    expect(res.statusCode).to.equal(400);
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
