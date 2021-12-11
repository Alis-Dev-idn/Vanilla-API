const Email = require('../services/email.service');
const validate = require('../validation/email.validate');

const sendEmail = async (req, res) => {
    const data = req.body;
    const {error} = await validate.emailCek.validate(data);
    if(error) return res.status(400).json({message: error.details[0].message});
    try{
        const send = await Email.sendEmail(data.name, data.from, data.to, data.subject, data.message);
        res.status(200).json({message: send});
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {sendEmail};