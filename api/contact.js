import nodemailer from 'nodemailer';

const recipientEmail = 'wynestti@gmail.com';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed' });
  }

  const { fullName, email, phone, course, message } = request.body || {};

  if (!fullName || !email || !message) {
    return response.status(400).json({ message: 'Full name, email and message are required.' });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return response.status(500).json({
      message: 'Mail settings are missing. Set GMAIL_USER and GMAIL_APP_PASSWORD in your deployment environment.',
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const subject = `New enquiry from ${fullName}${course ? ` - ${course}` : ''}`;
  const text = [
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Course interested in: ${course || 'Not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  await transporter.sendMail({
    from: `WynesTTI Website <${gmailUser}>`,
    to: recipientEmail,
    replyTo: email,
    subject,
    text,
  });

  return response.status(200).json({ message: 'Enquiry sent successfully.' });
}