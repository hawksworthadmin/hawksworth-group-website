
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const {
            firstName,
            lastName,
            email,
            company,
            companySize,
            subject,
            message,
        } = await request.json();

        // Create a transporter using Zoho's SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.ZOHO_EMAIL_USER,
                pass: process.env.ZOHO_EMAIL_PASSWORD,
            },
        });

        // Construct the email content with all form fields
        const mailOptions = {
            from: `"${firstName} ${lastName}" <${process.env.ZOHO_EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL || 'admin@hawksworth.org',
            subject: `New Contact Form Submission - ${subject}`,
            text: `
You have received a new message from ${firstName} ${lastName} (${email}):

Company: ${company || 'Not provided'}
Company Size: ${companySize || 'Not provided'}
Subject: ${subject}
Message:
${message}
            `,
            html: `
<p>You have received a new message from ${firstName} ${lastName} (${email}):</p>
<ul>
  <li><strong>Company:</strong> ${company || 'Not provided'}</li>
  <li><strong>Company Size:</strong> ${companySize || 'Not provided'}</li>
  <li><strong>Subject:</strong> ${subject}</li>
</ul>
<p><strong>Message:</strong></p>
<p>${message}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}