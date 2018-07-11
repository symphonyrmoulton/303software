/**
 * Routes file basically only defines the 1 route required in the test
 */
'use strict';
module.exports = function(app) {
    //request route file
    var request = require('../controllers/receive_request'); 

    //defined the request api route
    app.route('/create')
        .post(request.create);
    app.route('/getOne')
        .post(request.getOne);
    app.route('/getAll')
        .post(request.getAll);
    app.route('/update')
        .post(request.update);
    app.route('/delete')
        .post(request.delete);

    //defined the root route as blank
    app.get("/", function(req, res) {
        res.send("");
    });
};