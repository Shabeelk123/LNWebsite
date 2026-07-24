// netlify/functions/contact.js
// Serverless function — runs on Netlify's Node.js runtime (NOT in the browser)
// Required env vars (set in Netlify dashboard → Site → Environment variables):
//   EMAIL_USER  → info@lamiyaalnujoom.com
//   EMAIL_PASS  → Google App Password (NOT your Google account password)
//                  Generate at: myaccount.google.com → Security → App Passwords

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  // Parse body
  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { firstName, lastName, email, phone, company, service, message } = body;

  // Basic server-side validation
  if (!firstName || !lastName || !email || !service || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  // Google Workspace SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,               // SSL on port 465
    auth: {
      user: process.env.EMAIL_USER, // info@lamiyaalnujoom.com
      pass: process.env.EMAIL_PASS, // Google App Password (16-char, no spaces)
    },
  });

  // Email sent TO you (the business)
  const internalMail = {
    from: `"LN Website Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,  // delivers to info@lamiyaalnujoom.com
    replyTo: email,              // reply goes directly to the enquirer
    subject: `New Enquiry: ${service} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a3a5c; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0;">New Contact Form Enquiry</h2>
          <p style="color: #a0c4e8; margin: 4px 0 0;">Lamiya Al Nujoom Website</p>
        </div>

        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Full Name</td>
              <td style="padding: 8px 0; color: #222;">${firstName} ${lastName}</td>
            </tr>
            <tr style="background: #f0f4f8;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a3a5c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 0; color: #222;">${phone || '—'}</td>
            </tr>
            <tr style="background: #f0f4f8;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 8px 0; color: #222;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Service</td>
              <td style="padding: 8px 0; color: #222;">${service}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />

          <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
          <div style="background: #fff; border-left: 4px solid #1a3a5c; padding: 16px; border-radius: 4px; color: #222; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="background: #e8edf2; padding: 12px 24px; border-radius: 0 0 8px 8px; font-size: 12px; color: #888;">
          Submitted via lamiyaalnujoom.com contact form
        </div>
      </div>
    `,
  };

  // Auto-reply email TO the visitor
  const autoReply = {
    from: `"Lamiya Al Nujoom" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'We received your enquiry — Lamiya Al Nujoom',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a3a5c; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #ffffff; margin: 0;">Thank You, ${firstName}!</h2>
          <p style="color: #a0c4e8; margin: 4px 0 0;">We've received your enquiry.</p>
        </div>

        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none;">
          <p style="color: #222;">Thank you for reaching out to <strong>Lamiya Al Nujoom Facilities Management</strong>. We have received your enquiry regarding <strong>${service}</strong> and our team will get back to you within <strong>24 hours</strong>.</p>

          <p style="color: #555;">For urgent requirements, please contact us directly:</p>
          <ul style="color: #222; line-height: 1.8;">
            <li>📞 <a href="tel:+971565566039" style="color: #1a3a5c;">+971 569 326 544</a></li>
            <li>💬 <a href="https://wa.me/971565566039" style="color: #1a3a5c;">WhatsApp</a></li>
            <li>📧 <a href="mailto:info@lamiyaalnujoom.com" style="color: #1a3a5c;">info@lamiyaalnujoom.com</a></li>
          </ul>

          <p style="color: #555; margin-top: 24px;">Best regards,<br/><strong>Lamiya Al Nujoom Team</strong><br/>401 NGI Building, Port Saeed, Deira, Dubai, UAE</p>
        </div>

        <div style="background: #e8edf2; padding: 12px 24px; border-radius: 0 0 8px 8px; font-size: 12px; color: #888;">
          This is an automated confirmation. Please do not reply to this email.
        </div>
      </div>
    `,
  };

  try {
    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(internalMail),
      transporter.sendMail(autoReply),
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Nodemailer error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email. Please try again.' }),
    };
  }
};
