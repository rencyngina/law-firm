import { ServerClient } from 'postmark';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default async function messageRequest(req, res) {
  const { name, email, phone, subject, message } = req.body;
  console.log('Received data', { name, email, phone, subject, message });

  if (req.method === 'POST') {
    try {
      const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN);
      const messageBody = `
        You have a new request for a call from ${name}.
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `;

      const response = await client.sendEmail({
        From: process.env.SEND_FROM_EMAIL,
        To: process.env.SEND_TO_EMAIL,
        Subject: 'New call request',
        TextBody: messageBody,
      });

      if (response.Message) {
        toast.success('Message sent');
        return res.status(200).json({ message: 'Message sent' });
      } else {
        toast.error('Message not sent');
        console.error('Error: Response does not contain a Message property', response);
        return res.status(400).json({ message: 'Message not sent' });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Internal server error');
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}