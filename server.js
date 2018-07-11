/**
 * Very basic server file basically just gets Node Server running.
 */
const express = require('express');
const app = module.exports = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./api/routes/requestRoutes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

routes(app);

//if not testing run server
if(!module.parent){ app.listen(port); }

//success message
console.log('API server started on: ' + port);
