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
  }
];

const goodResponse1 = {
  "title": "John",
  "id": "1",
  "author": "Ryan",
  "content": "awesome",
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
          expect(JSON.stringify(res.body.title)).toBe(JSON.stringify(goodResponse1.title))
          expect(JSON.stringify(res.body.content)).toBe(JSON.stringify(goodResponse1.content))
          expect(JSON.stringify(res.body.author)).toBe(JSON.stringify(goodResponse1.author))
        })
        .end((err, res) => {
          if (err) {
            return done(err)
          }
          done()
        })
    })
   
  })
