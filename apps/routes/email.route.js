const express = require('express');
const Email = require('../controller/sendEmail');

const email = express.Router();

email.post('/', Email.sendEmail);

module.exports = email;