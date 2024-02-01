import { ServerClient } from 'postmark';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default async function messageRequest(req, res) {
  const { name, email, phone, subject, message } = req.body;
  console.log('Received data', { name, email, phone, subject, message });

  if (req.method === 'POST') {
    try {
      // Validate request body
      if (!name || !email || !phone || !subject || !message) {
        toast.error('Invalid request: Missing required fields');
        return res.status(400).json({ message: 'Invalid request: Missing required fields' });
      }

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

      console.log('Postmark API Response:', response);

      if (response.Message) {
        toast.success('Message sent');
        return res.status(200).json({ message: 'Message sent' });
      } else {
        toast.error('Message not sent: Response does not contain a Message property');
        console.error('Error: Response does not contain a Message property', response);
        return res.status(400).json({ message: 'Message not sent: Response does not contain a Message property' });
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
