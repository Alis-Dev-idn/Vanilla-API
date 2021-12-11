const joi = require('joi');

const emailCek = joi.object({
    name: joi.string().required(),
    from: joi.string().email({minDomainSegments: 2}).required(),
    to: joi.string().email({minDomainSegments: 2}).required(),
    subject: joi.string().required(),
    message: joi.string().required()
});

module.exports = {emailCek};