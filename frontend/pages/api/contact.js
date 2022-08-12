export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
  },
};

export default function contact(req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.mail.yahoo.com",
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_SENDER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
    secure: true,
    logger: true,
  });

  const attachments = req.body.image
    ? [
        {
          filename: "image.jpg",
          content: req.body.image.split("base64,")[1],
          encoding: "base64",
        },
      ]
    : [];

  const phone = req.body.phone
    ? `<a href='tel:${req.body.phone}'>${req.body.phone}</a>`
    : "Brak.";

  const message = req.body.message ? req.body.message : "Brak.";

  const mailData = {
    from: process.env.NEXT_PUBLIC_SMTP_SENDER,
    to: process.env.NEXT_PUBLIC_SMTP_RECEIVER,
    subject: `Message From ${req.body.name}`,
    html: `
    <div>
      <p>Email: ${req.body.email}</p>
      <p>Telefon: ${phone}</p>
      <p>Wiadomość: ${message}</p>
    </div>
    `,
    attachments,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(500).json({ status: info, err: err });
    else res.status(200).json({ status: "ok" });
  });
}
