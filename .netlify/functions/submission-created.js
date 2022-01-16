const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_AP_KEY }).base(
  process.env.AIRTABLE_BASE_ID_KNON
);

exports.handler = async function (event) {
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
  } catch (err) {
    console.error(err);
  }
  return {
    statusCode: 500,
    body: JSON.stringify({ message: 'Email list update failed!' }),
  };
};
