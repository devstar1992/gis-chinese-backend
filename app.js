require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const app = express();
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(compression())
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(cors(corsOptions));
// app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true}));
app.use(bodyParser.json({ limit: '1000mb', extended: true}));
app.set('trust proxy', true);
require('./routes.js')(app);
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist","index.html"));
});
module.exports = app;