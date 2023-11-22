import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import EmailTemplate from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Contact <contact@paulinegobe.com>', // your verified domain
        to: ['pauline.gobe16@gmail.com', email], // the email address you want to send a message
      subject: `${subject}`,
      react: EmailTemplate({email, subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}