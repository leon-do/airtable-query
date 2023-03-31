const Airtable = require("./Airtable");

main();
async function main() {
  // https://airtable.com/create/tokens
  const AIRTABLE_API_KEY = "00000000000000000.0000000000000000000000000000000000000000000000000000000000000000";
  // https://support.airtable.com/docs/finding-airtable-ids
  const AIRTABLE_ID = "app00000000000000/tbl00000000000000";

  const airtable = new Airtable(AIRTABLE_API_KEY, AIRTABLE_ID);

  const record = await airtable.get("column0", "value0");
  console.log(record);

  await airtable.create({
    column0: "value0",
    column1: "value1",
  });

  await airtable.delete("column1", "value1");
}
