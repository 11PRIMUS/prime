import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // Configure your email provider here
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'alok28pa@gmail.com', // Your receiving email
      subject: `New message from ${name} via Portfolio`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>New Portfolio Message</h2>
  <p><strong>From:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <h3>Message:</h3>
  <p style="white-space: pre-line;">${message}</p>
</div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}