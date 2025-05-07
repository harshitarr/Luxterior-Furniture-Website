
import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { name,company,contact,email,subject,message} = body;
  if (!name||!company||!contact||!email||!subject||!message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from:`"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Message: ${subject}`,
      text: `
Name: ${name}
Company: ${company}
Contact: ${contact}
Email: ${email}
Message:
${message}
      `,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
