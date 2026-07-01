import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (16-char)
      },
    });

    // Email to you (portfolio owner)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0f172a; color: #f1f5f9; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 28px 32px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #fff;">New Portfolio Message</h1>
            <p style="margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.75);">Someone reached out through your contact form</p>
          </div>
          <!-- Body -->
          <div style="padding: 28px 32px; display: flex; flex-direction: column; gap: 20px;">
            <div style="background: #1e293b; border-radius: 10px; padding: 16px; border: 1px solid #334155;">
              <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6366f1; font-weight: 600;">Sender</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600; color: #f1f5f9;">${name}</p>
            </div>
            <div style="background: #1e293b; border-radius: 10px; padding: 16px; border: 1px solid #334155;">
              <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6366f1; font-weight: 600;">Email</p>
              <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #818cf8; text-decoration: none;">${email}</a>
            </div>
            <div style="background: #1e293b; border-radius: 10px; padding: 16px; border: 1px solid #334155;">
              <p style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6366f1; font-weight: 600;">Message</p>
              <p style="margin: 0; font-size: 15px; color: #cbd5e1; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <!-- Footer -->
          <div style="padding: 16px 32px; border-top: 1px solid #1e293b; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #475569;">Sent from your portfolio at msaifullahawan2004.dev</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Muhammad Saifullah" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 👋`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0f172a; color: #f1f5f9; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
          <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 28px 32px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #fff;">Thanks for reaching out!</h1>
          </div>
          <div style="padding: 28px 32px; line-height: 1.7; color: #cbd5e1; font-size: 15px;">
            <p>Hi <strong style="color: #f1f5f9;">${name}</strong>,</p>
            <p>I've received your message and will get back to you as soon as possible — usually within 24 hours.</p>
            <p style="background: #1e293b; border-left: 3px solid #6366f1; padding: 12px 16px; border-radius: 0 8px 8px 0; font-style: italic; color: #94a3b8;">"${message}"</p>
            <p>Best regards,<br/><strong style="color: #f1f5f9;">Muhammad Saifullah</strong><br/><span style="color: #6366f1; font-size: 13px;">Full-Stack Developer</span></p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
