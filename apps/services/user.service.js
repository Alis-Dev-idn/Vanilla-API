const userSchema = require('../database/models/user.model');

async function getUserByToken(token){
    return userSchema.findOne({tokenValidation: token});
}

module.exports = {getUserByToken};