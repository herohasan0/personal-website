import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

// function getTable(name) {
//   base(name)
//     .select({
//       // Selecting the first 3 records in Grid view:
//       maxRecords: 3,
//       view: 'Grid view',
//     })
//     .eachPage(
//       function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.

//         records.forEach(function (record) {
//           console.log('Retrieved', record.get('Title'));
//         });

//         // To fetch the next page of records, call `fetchNextPage`.
//         // If there are more records, `page` will get called again.
//         // If there are no more records, `done` will get called.
//         fetchNextPage();
//       },
//       function done(err) {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       }
//     );
// }

async function getTable(table) {
  const records = await base(table)
    .select({
      // maxRecords: 3,
      view: 'Grid view',
    })
    .all();
  const data = await minifiedRecords(records);

  return data.filter((o) => !o.Draft);
}

const minifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record) => {
  return {
    Id: record.id,
    ...record.fields,
  };
};

export { getTable };
