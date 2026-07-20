'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const audienceLabels: Record<string, string> = {
  parent: 'Parent',
  teen: 'Teen',
  woman: 'Woman',
  'church-leader': 'Church Leader',
};

const inquiryLabels: Record<string, string> = {
  speaking: 'Speaking or Teaching Inquiry',
  book: 'Book Question',
  testimony: 'Personal Testimony',
  general: 'General Inquiry',
};

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function sendContactMessage(
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim() ?? '';
  const email = formData.get('email')?.toString().trim() ?? '';
  const audience = formData.get('audience')?.toString() ?? '';
  const inquiry = formData.get('inquiry')?.toString() ?? '';
  const message = formData.get('message')?.toString().trim() ?? '';

  if (!name || !email || !audience || !inquiry || !message) {
    return { success: false, error: 'Please fill in all fields.' };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    return { success: false, error: 'Contact form is not configured.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Grow With Omolola <contact@growwithomolola.org>',
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Reaching out as: ${audienceLabels[audience] ?? audience}`,
        `Inquiry type: ${inquiryLabels[inquiry] ?? inquiry}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send message. Please try again.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Resend send failed:', err);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
