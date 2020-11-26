var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
  host: "smtp.126.com",
  secureConnection: false,
  port:25,
  requiresAuth: true,
  auth: {
    user: 'imflybird@126.com',
    pass: 'YTZDFYUJZZIHEFCW'
  }
});
var mailOptions = {
  from: 'imflybird@126.com',
  to: 'imflybird@126.com',
  subject: 'Sending Email via Node.js',
  text: 'That was easy!'
};

let sendGmail = (req, res) => {
  try{
  mailOptions.subject="www.aidetecting.com";
  mailOptions.text=`
  <h2>您好管理员,</h2>
  您收到了一封来自 ${req.body.name}的电子邮件 :
  详细信息如下:
  <b>名称:</b> ${req.body.name}
  <b>电子邮件:</b> ${req.body.email}
  <b>电话号码:</b> ${req.body.phone}
  <b>信息:</b> ${req.body.message}
  谢谢
  `;
  mail.sendMail(mailOptions, function(error, info){
      if (error) {
        // console.log(error);
        return res.status(401).json({ message: 'failure', err: error });
      } else {
        // console.log('Email sent: ' + info.response);
        return res.json({ message: 'success', result: info.response });
      }
    });
  }
catch (error) {
    return res.status(400).json({
      message: 'Mail can not send now. Please try again.',err:error
    });
  }
}
module.exports = {
 sendGmail:sendGmail
}