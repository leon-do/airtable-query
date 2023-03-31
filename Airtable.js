"use strict";
const axios = require("axios");

module.exports = class Airtable {
  constructor(_airtableApiKey, _airtableId) {
    this.apiKey = _airtableApiKey || process.env.AIRTABLE_API_KEY;
    this.id = _airtableId || process.env.AIRTABLE_ID;
  }

  async get(_column, _value) {
    const url = `https://api.airtable.com/v0/${this.id}?filterByFormula=${encodeURIComponent(`{${_column}}="${_value}"`)}`;
    const headers = { Authorization: `Bearer ${this.apiKey}` };
    const response = await axios.get(url, { headers });
    return response.data.records;
  }

  async create(_data) {
    const url = `https://api.airtable.com/v0/${this.id}`;
    const headers = { Authorization: `Bearer ${this.apiKey}` };
    const response = await axios.post(url, { fields: _data }, { headers });
    return response.data;
  }

  async delete(_column, _value) {
    const rows = await this.get(_column, _value);
    for (const row of rows) {
      const url = `https://api.airtable.com/v0/${this.id}/${row.id}`;
      const headers = { Authorization: `Bearer ${this.apiKey}` };
      await axios.delete(url, { headers });
    }
  }
};
