import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const data = {
    email_address: req.body.email,
    status: 'subscribed',
    merge_fields: {
      EMAIL: req.body.email,
      SUBJECT: req.body.subject,
      MESSAGE: req.body.message,
    },
  };

  try {
    const response = await axios.post(
      `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      data,
      {
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
}
