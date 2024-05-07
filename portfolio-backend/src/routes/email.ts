import express from 'express';
import nodemailer, { SentMessageInfo } from 'nodemailer';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

router.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, message } = req.body as EmailRequest;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'tylerbloom9787@gmail.com',
    subject: `New Contact Message from ${name}`,
    text: `You have received a new message from ${name} (${email}): ${message}`,
  };

  transporter.sendMail(
    mailOptions,
    (error: Error | null, info: SentMessageInfo) => {
      if (error) {
          console.error('Complete Error:', error);

        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ message: 'Email sent successfully!' });
    }
  );
});

export default router;
