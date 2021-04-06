const express = require("express");
const cors = require("cors");
const request = require("request");
const bodyParser = require("body-parser");
var dbConn = require("./config/db.config");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});
// display books page

app.get("/peliculas", (request, response) => {
  dbConn.query(
    "SELECT *, DATE_FORMAT(estreno," +
      "'" +
      "%d/%m/%Y" +
      "'" +
      ") as fecha2 FROM peliculas",
    (error, result) => {
      if (error) throw error;

      response.send(result);
    }
  );
});

app.get("/estrenos", (request, response) => {
  dbConn.query(
    "SELECT *, DATE_FORMAT(estreno," +
      "'" +
      "%d/%m/%Y" +
      "'" +
      ") as fecha2 FROM peliculas f where f.estreno >= date_sub(curdate(), interval 3 month) ",
    (error, result) => {
      if (error) throw error;

      response.send(result);
    }
  );
});







app.post("/peliculas", (request, response) => {
  console.log(request.body);
  dbConn.query(
    "INSERT INTO peliculas (`titulo`, `descripcion`, `duracion`, `estreno`, `categorias`, `trailer`) VALUES (?, ?, ?, ?, ?, ?)",
    [
      request.body.data.titulo,
      request.body.data.descripcion,
      request.body.data.duracion,
      request.body.data.estreno,
      request.body.data.categorias,
      request.body.data.trailer,
    ],
    (error, result) => {
      if (error) throw error;

      response.status(201).send(`User aded with ID: ${result.insertId}`);
    }
  );
});
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
