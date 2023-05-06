const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        /** testing account */
        const testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        let message = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Successfully Register with us.", // plain text body
            html: "<b>Successfully Register with us.</b>", // html body
        }

        await transporter.sendMail(message)
        console.log("email sent sucessfully");
        
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;