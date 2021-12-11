const mongoose = require('mongoose');

const mongodbConnect = mongoose.connect(process.env.MONGODB_URL)
    .then(response => {
        console.log('Success Connect to Database');
    }).catch(err => {
        console.log(`${err}`);
    })

module.exports = mongodbConnect;