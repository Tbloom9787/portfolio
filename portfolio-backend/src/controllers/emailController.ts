// src/controllers/emailController.ts
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const oauth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

export async function sendEmail(req: Request, res: Response) {
  const { name, email, message } = req.body;

  try {
    const { token } = await oauth2Client.getAccessToken();

    if (!token) {
      return res.status(401).send('Failed to obtain access token.');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: token,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from ${name} (${email}): ${message}`,
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!', result });
  } catch (error) {
    res
      .status(500)
      .json({ message: error instanceof Error ? error.message : 'Error' });
  }
}
