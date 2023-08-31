import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phoneNumber, message } = req.body;
    

let transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465,
  secure: true,
  auth: {
    user: `help@natalieshaekrula.com`,
    pass: `3099545689`
  },
  connectionTimeout: 10000,
});

function contactMailer(){
  // setup email data
  let mailOptions = {
    from: `help@natalieshaekrula.com`,
    to: `help@natalieshaekrula.com`,
    subject: 'New Contact Message!',
    html: `
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>New Contact Message</title>
      <style>
        /* Body styles */
        body {
          font-family: sans-serif;
          font-size: 22px;
          line-height: 1.3;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        }
      </style>
    </head>
    <body>
      <p>${fullName}</p>
      <p>${email}</p>
      <p>${phoneNumber}</p>
      <p>${message}</p>
    </body>
  </html>
    `,
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (!error) return  res.status(200).json({ message: info.messageId })
    else return res.status(500).json({ message: error.message });
  });
}


    try {
      contactMailer()
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
