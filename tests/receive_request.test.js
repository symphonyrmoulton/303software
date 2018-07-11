/**
 * Constants (includes the various requests that will be sent and expected responses)
 */
const expect = require('expect')
const app = require('../server')
const request = require("supertest")

const goodResponse2 = [
  {
      "title": "John",
      "id": "1",
      "author": "Ryan",
      "content": "awesome",
      "createdAt": "2018-07-11T13:46:25.000Z",
      "updatedAt": "2018-07-11T13:46:25.000Z"
  }
];

const goodResponse1 = {
  "title": "John",
  "id": "1",
  "author": "Ryan",
  "content": "awesome",
  "createdAt": "2018-07-11T13:46:25.000Z",
  "updatedAt": "2018-07-11T13:46:25.000Z"
};

/**
 * Tests for the request endpoint
 */
describe('POST /request', () => {

    it("should load the server without issues", function (done) {
      request(app.listen())
          .get("/")
          .expect("")
          .end(done)
    })

    it('should return one', (done) => {
      request(app.listen())
        .post('/getOne')
        .send({})
        .expect(200)
        .expect((res) => {
          expect(JSON.stringify(res.body)).toBe(JSON.stringify(goodResponse1))
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }
          done()
        })
    })

    it('should return all', (done) => {
      request(app.listen())
        .post('/getAll')
        .send({})
        .expect(200)
        .expect((res) => {
          expect(JSON.stringify(res.body)).toBe(JSON.stringify(goodResponse2))
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }
          done()
        })
    })
   
  })
