import nodemailer from "nodemailer";
require("dotenv").config()
let username = process.env.USERNAMEMAIL;
let password = process.env.PASSWORDMAIL;
let host = process.env.HOSTMAIL;
let port = process.env.PORTMAIL;

let sendMail = (to, subject, content) => {
    let transporter = nodemailer.createTransport({
        type: "SMTP",
        host: host,
        port: port,
        secure: false, // true for 465, false for other ports
        auth: {
            user: username, // generated ethereal user
            pass: password, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    let info = {
        from: username, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: content, // html body
    };
    return transporter.sendMail(info);
}
module.exports = sendMail;