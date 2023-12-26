const nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, otpText) {
    try {
        const transporter = nodemailer.createTransport({
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: toEmail,
            subject: subject,
            text: otpText
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
