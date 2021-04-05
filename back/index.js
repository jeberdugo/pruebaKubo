const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
var dbConn  = require('./config/db.config');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors());
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// display books page


app.get('/peliculas', (request, response) => {
  dbConn.query('SELECT * FROM peliculas', (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});