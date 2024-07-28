import nodemailer from 'nodemailer';
import { resolve } from 'path';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oabdulazeez70@gmail.com',
    pass: 'kkyf hszr qqko kscn',
  },
});

export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody(event);

  // Resolve the path to the logo image
  const logoPath = resolve('./assets/logo.png');

  const mailOptions = {
    from: 'no-reply@antrumengineering.com <oabdulazeez70@gmail.com>',
    to: 'abdulazeezolamide50@gmail.com',
    subject: `Message from ${email}`,
    text: message,
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        </style>
        <div style="text-align: center; margin-bottom: 20px; padding: 20px; background-color: #ffffff;">
          <img src="cid:logo" alt="Logo" style="max-width: 150px; height: auto;">
        </div>
        <p style="font-size: 16px; font-weight: 700;">Hi, Antrum Engineering,</p>
        <p style="font-size: 16px; font-weight: 400;">${message}</p>
        <p style="font-size: 16px; font-weight: 400; margin-top: 20px;">Best,</p>
        <p style="font-size: 16px; font-weight: 700;">${name}</p>
        <hr style="border: 0; border-top: 1px solid #ccc; margin-top: 40px; margin-bottom: 20px;">
        <p style="font-size: 14px; color: #777;">37, Bode Thomas Road, Shyllon, Palmgrove, Lagos.</p>
      </div>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: logoPath,
        cid: 'logo', // same cid value as in the html img src
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error(error);
  }
});
