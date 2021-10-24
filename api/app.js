const express = require("express");
const bodyParser = require("body-parser");
const port = 8000
const cors = require("cors");

const app = express();

const swaggerUi = require(`swagger-ui-express`);
swaggerDocument = require('./swagger.json')

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors(corsOptions));

// accept request in form or JSON
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync();

require("./app/routes/player.routes")(app);

app.listen(port, () => console.log(port))