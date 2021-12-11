const {config} = require('dotenv');
config();
const express = require('express');
const bodyParser = require('body-parser');
const email = require('./apps/routes/email.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: `8mb`}));

app.use(express.json());
app.use('/email', email);

app.listen(process.env.Port_Url,()  => {
    console.log(`Server run in >> ${process.env.Base_Url}:${process.env.Port_Url}`);
})

module.exports = app;
