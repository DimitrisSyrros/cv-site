import nodemailer from 'nodemailer';


export default  async (req,res) => {
    const {firstName, lastName, email, subject, message} = req.body;
    const transporter = nodemailer.createTransport(
        {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

    try {
   const emailRes = await transporter.sendMail({
            from: 'dsyrroscv@gmail.com',
            to: 'dimsyrr@gmail.com',
            subject: `Contact form submission from ${firstName} ${lastName}`,
            html: `<p>You have new contact form submission</p><br>
            <p><strong>FirstName: </strong>${firstName}</p>
            <p><strong>LastName: </strong>${lastName}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Subject: </strong>${subject}</p>
            <p>Message:  ${message}</p>`,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    res.status(200).json(req.body);
}
