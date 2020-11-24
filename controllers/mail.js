const send = require('gmail-send')({
    //const send = require('../index.js')({
    user: 'skybluegis0508@gmail.com',
    // user: credentials.user,               // Your GMail account used to send emails
    pass: 'skyblue0508)%)*',
    // pass: credentials.pass,               // Application-specific password
    to: 'skybluegis0508@gmail.com',
    // to:   credentials.user,               // Send to yourself
    //                                       // you also may set array of recipients:
    //                                       // [ 'user1@gmail.com', 'user2@gmail.com' ]
    // from:    credentials.user,            // from: by default equals to user
    // replyTo: credentials.user,            // replyTo: by default `undefined`

    // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
    //                                       // (but no any processing will be done on them)

    subject: 'test subject',
    text: 'gmail-send example 1',         // Plain text
    //html:    '<b>html text</b>'            // HTML
    // files: [ filepath ],                  // Set filenames to attach (if you need to set attachment filename in email, see example below
});

var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    requiresAuth: true,
    domains: ["gmail.com", "googlemail.com"],
    auth: {
      user: 'skybluegis0508@gmail.com',
      pass: 'skyblue0508)%)*'
    }
  });
var mailOptions = {
    from: 'skybluegis0508@gmail.com',
    to: 'skybluegis0508@gmail.com',
    subject: 'Sending Email via Node.js',
    text: 'That was easy!'
};
  
let sendGmail = (req, res) => {
    mailOptions.subject=req.body.name;
    mailOptions.text=req.body.message;
    mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.status(401).json({ message: 'failure', err: error });
        } else {
          console.log('Email sent: ' + info.response);
          return res.json({ message: 'success', result: info.response });
        }
      });
}

module.exports = {
   sendGmail:sendGmail
}