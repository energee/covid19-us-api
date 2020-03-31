const fs = require("fs");
const parse = require("csv-parse/lib/sync");

module.exports = {
  execute: function (input, output, states) {
    let data = {};
    const csv = fs.readFileSync(input),
          table = parse(csv, {
            columns: true,
            skip_empty_lines: true
          });
    states.forEach(state => {
      data[state] = []
      table.forEach(row => {
        let currentState = row.state;
        if (state == currentState) {
          let day = {
            date: row.date,
            confirmed: row.cases,
            deaths: row.deaths,
          };
          data[state].push(day)
        }
      });
    });
    let json = JSON.stringify(data, null, 2);
    fs.writeFileSync(output, json);
    console.log("New endpoint compiled")
  }
};
