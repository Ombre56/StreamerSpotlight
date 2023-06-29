const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),  
  mongoose = require('mongoose')
require("dotenv").config()

const routes = require('./routes/StreamerRoute')

const cors = require('cors');

const PORT = process.env.PORT | 5000;

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(routes);