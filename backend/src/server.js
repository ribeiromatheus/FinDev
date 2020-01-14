require('dotenv').config();

const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);