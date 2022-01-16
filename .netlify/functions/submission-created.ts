import Airtable from 'airtable';
import { Handler } from '@netlify/functions';

const base = new Airtable({ apiKey: process.env.AIRTABLE_AP_KEY }).base(
  process.env.AIRTABLE_BASE_ID_KNON
);

const handler: Handler = async (event, _context) => {
  try {
    const body = JSON.parse(event.body).payload;

    base('blogEmailListTable').create(
      {
        Email: body.email,
      },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email list updated!' }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Email list update failed!' }),
    };
  }
};

export { handler };
