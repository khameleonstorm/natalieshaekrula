import nodemailer from 'nodemailer';


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.SMTP_USER}`,
    pass: `${process.env.SMTP_PASSWORD}`
  },
  tls: { rejectUnauthorized: false }, 
});



async function contactMail(name, country, email, phone, message){
  // setup email data
  let mailOptions = {
    from: `${process.env.SMTP_USER}`,
    to: `${process.env.SMTP_USER}`,
    subject: 'Contact Message!',
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Contact Message!</title>
      <style>
        body, table, td, div, p, a {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
    
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4 !important;
        }
    
        /* Add CSS styles inline */
        .header {
          background-color: #263238 !important;
          padding: 20px;
          text-align: center;
        }
    
        .logo {
          max-width: 150px;
          height: auto;
        }
            
        .greeting {
          font-size: 26px !important; 
          font-weight: 500 !important;
          letter-spacing: -1.5px !important;
          word-spacing: 3px !important;
          color: #333333;
          margin-bottom: 20px;
        }
    
        .content {
          background-color: #ffffff;
          padding: 40px 20px;
        }
    
        .message {
          margin-bottom: 20px;
          line-height: 1.5;
        }
    
        .footer {
          background-color: #263238 !important;
          padding: 20px;
          text-align: center;
        }
    
        .footer-logo {
          max-width: 100px;
          height: auto;
          margin-bottom: 10px;
        }
    
        .footer-message {
          font-size: 12px;
          color: #fafafa !important;
          margin-bottom: 10px;
        }
      </style>
    </head>
    
    <body>
      <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center">
            <table width="600" cellspacing="0" cellpadding="0">
              <tr>
                <td class="header">
                  <img class="logo" src="https://natalieshaekrula.vercel.app/_next/static/media/logo.11ed970f.svg" alt="Natalie Shae Krula Logo">
                </td>
              </tr>
              <tr>
                <td class="content">
                  <h1 class="greeting">Contact Message!</h1>
                  <p class="message">Name: ${name}</p>
                  <p class="message">Email: ${email}</p>
                  <p class="message">Phone: ${phone}</p>
                  <p class="message">Country: ${country}</p>
                  <p class="message">Message: ${message}</p>
                </td>
              </tr>
              <tr>
                <td class="footer">
                  <img class="footer-logo" src="https://natalieshaekrula.vercel.app/_next/static/media/logo.11ed970f.svg" alt="Natalie Shae Krula Logo Logo">
                  <p class="footer-message">© 2022 Natalie Shae Krula | All Rights Reserved</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `,
  };
  
  
  try {
    let info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error.message)
  }

}


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, country, email, phone, message } = req.body;
  
  try{
    contactMail(name, country, email, phone, message)
    res.send({message: 'Successful'});
  } catch (e){ for(i in e.errors) res.status(500).send({message: e.errors[i].message}) }
  }

}
