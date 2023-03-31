# Airtable Query Class

## Get API Key and ID

```js
// https://airtable.com/create/tokens
const AIRTABLE_API_KEY = "00000000000000000.0000000000000000000000000000000000000000000000000000000000000000";
// https://support.airtable.com/docs/finding-airtable-ids
const AIRTABLE_ID = "app00000000000000/tbl00000000000000";
```

## SELECT Row

```js
// SELECT * FROM Table WHERE column0='value0'
const record = await airtable.get("column0", "value0");
console.log(record);
```

## CREATE Row

```js
// INSERT INTO table (column0, column1) VALUES (value0, value1)
airtable.create({
  column0: "value0",
  column1: "value1",
});
```

## DELETE Rows

```js
// DELETE FROM table WHERE column1='value1'
await airtable.delete("column1", "value1");
```
