import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import patchJson from '../controlllers/jsonPatch';

chai.use(chaiHttp);
const { expect } = chai;

describe('/json endpoint', () => {
  it('should patch document successfully', async () => {
    let res;

    try {
      res = await chai.request(app)
        .patch('/json').send({
          document: { firstName: 'Joachim', lastName: 'Wester' },
          operation: { op: 'replace', path: '/firstName', value: 'Joachim' },
        });
    } catch (error) {
      console.error(error);
    }

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal('success');
    expect(res.body.data.document.firstName).equal('Joachim');
  });

  it('should not patch document successfully when passed invalid operation', async () => {
    let res;

    try {
      res = await chai.request(app)
        .patch('/json').send({
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
