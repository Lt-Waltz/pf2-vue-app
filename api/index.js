const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

//express.urlencoded();
//express.json();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

const deitiesRoutes = require('./routes/deitiesRoutes');


app.use(cors());
app.use('/deities', deitiesRoutes);



app.listen(3001);