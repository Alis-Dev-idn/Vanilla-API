const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    roles:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        default: 0
    },
    tokenValidation:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model('user', userSchema);