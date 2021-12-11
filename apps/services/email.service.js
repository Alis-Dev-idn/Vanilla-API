const mailgun = require('mailgun-js');

let api     = process.env.api_key_email;
let domain  = process.env.domain_email;

async function sendEmail(name, from, to, subject, message){
    const mail = new mailgun({apiKey: api, domain: domain});
    let data = {
        from: `${name} <${from}>`,
        to: to,
        subject: subject,
        html: message
    };
    try{
        const send = await mail.messages().send(data);
        console.log(send);
        return 'Success send email'
    }catch (err){
        throw new Error('oops error : ' + err.message);
    }
}

module.exports = {sendEmail};