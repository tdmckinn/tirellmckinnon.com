// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const nodemailer = require('nodemailer');

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */

// const mailClient = createMailClient();

exports.handleRequest = async (event, context) => {
  try {
    // const json = JSON.parse(event.body);

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'tdmckinn@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return new Response('Hello worker!', {
      headers: { 'content-type': 'text/plain' },
      statusCode: 200,
      body: 'Message sent!',
    });
  } catch (err) {
    return new Response('Hello worker!', {
      headers: { 'content-type': 'text/plain' },
      statusCode: 500,
      body: err.toString(),
    });
  }
};
