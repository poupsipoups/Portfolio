// //import { EmailTemplate } from '../../../components/EmailTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const {body} = req;
//   const {email, subject, message} = body;
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ['pauline.gobe16@gmail.com', email],
//       subject: 'Hello world this is me',
//       react: (
//       <>
//         <h1>{subject}</h1>
//         <p>Thank you for contacting me !</p>
//         <p>New message submitted:</p>
//         <p>{message}</p>
        
//       </>),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

