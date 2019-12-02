const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key : '009b16baa8d0952407dd8446319211ed-09001d55-e42c1eaf',
        domain : 'sandbox46bae1b5fbfb4013865dc2a14233e21d.mailgun.org'
    }
}

const transporter =  nodemailer.createTransport(mailGun(auth))

const sendMail=(email,subject,text,cb)=>{
    const mailOptions = {
        from : email,
        to : 'ab.zarbakht@gmail.com',
        subject : subject,
        text : text
    }

    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            cb(err,null)
        }
        else {
            cb(null,data)
        }
    })
}

module.exports = sendMail;