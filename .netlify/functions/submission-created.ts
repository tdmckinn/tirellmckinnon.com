import Airtable from 'airtable';
import { Handler } from '@netlify/functions';

const base = new Airtable({ apiKey: process.env.AIRTABLE_AP_KEY }).base(
  process.env.AIRTABLE_BASE_ID_KNON
);

const handler: Handler = async (event, _context) => {
  const body = JSON.parse(event.body).payload

  base('blogEmailListTable').create({
    Email: body
  }, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email list updated!" }),
  };
};

export { handler };
