// app/api/subscribe/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Subscriber!',
      text: `A new user has subscribed with the email: ${email}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Failed to send email:', err);
    return Response.json({ error: 'Email send failed' }, { status: 500 });
  }
}
