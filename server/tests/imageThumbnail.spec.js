import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
const { expect } = chai;

describe('/image/thumbnail endpoint', () => {
  it('should return thumbail on valid input', async () => {
    const validUrl = 'https://raw.githubusercontent.com/Eazybee/HackerBay-Backend/create-image-endpoint/server/tests/fixtures/epicmail.PNG';
    let res;

    try {
      res = await chai.request(app)
        .get(`/image/thumbnail?url=${validUrl}`);
    } catch (error) {
      console.error('here',error);
    }

    expect(res.status).to.equal(200);
  });

  it('should not return thumbail on invalid input format', async () => {
    const invalidUrl = 'https://github.com/Eazybee/HackerBay-Backend/blob/create-image-endpoint/server';
    let res;

    try {
      res = await chai.request(app)
        .get(`/image/thumbnail?url=${invalidUrl}`);
    } catch (error) {
      console.error('here',error);
    }

    expect(res.status).to.equal(400);
    expect(res.body).to.haveOwnProperty('error');
    expect(res.body.error.url[0]).to.equal('The url format is invalid.');
  });

  it('should not return thumbail on if  url does not exist', async () => {
    const invalidUrl = 'https://github.com/Eazybee/HackerBay-Backend/blob/create-image-endpoint/server.jpg';
    let res;

    try {
      res = await chai.request(app)
        .get(`/image/thumbnail?url=${invalidUrl}`);
    } catch (error) {
      console.error('here',error);
    }

    expect(res.status).to.equal(400);
    expect(res.body).to.haveOwnProperty('error');
  });
});
