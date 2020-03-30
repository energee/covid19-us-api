const fs = require("fs");
const parse = require("csv-parse/lib/sync");

let states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

let json = extract('us-states.csv', states);

function extract(file, states) {
  let data = {};
  const csv = fs.readFileSync(file);
  const table = parse(csv, {
    columns: true,
    skip_empty_lines: true
  });
  states.forEach(state => {
    data[state] = {}
    table.forEach(row => {
      let currentState = row.state;
      if (state == currentState) {
        let day = {
          date: row.date,
          confirmed: row.cases,
          deaths: row.deaths,
        };
        data[state][day.date] = day
      }
    });
  });
  let json = JSON.stringify(data, null, 2);
  fs.writeFileSync('api/states.json', json);
}
