const update = require("./update");
const states = require("./states");

update.execute('../covid-19-data/us-states.csv', '../docs/states.json', states.list);
