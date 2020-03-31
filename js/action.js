const path = require("path");
const update = require("./update");
const states = require("./states");

const WORKSPACE = process.env.GITHUB_WORKSPACE;
const DATA_REPO = "data";
const MAIN_REPO = "main";

const input = path.join(
  WORKSPACE,
  DATA_REPO,
  "us-states.csv"
);

const output = path.join(
  WORKSPACE,
  MAIN_REPO,
  "docs",
  "states.json"
);

console.log('Initiating action');
console.log('Input file: ' + input);
console.log('Output file: ' + output);
update.execute(input, output, states.list);
