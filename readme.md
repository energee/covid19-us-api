Transforms data from https://github.com/nytimes/covid-19-data into json. Available at https://energ.ee/covid19-us/api/states.json.

The json contains the number of Coronavirus confirmed cases and deaths for every state January 21st:

```
"Washington": {
  "2020-01-21": {
    "date": "2020-01-21",
    "confirmed": "1",
    "deaths": "0"
  },
  "2020-01-22": {
    "date": "2020-01-22",
    "confirmed": "1",
    "deaths": "0"
  },
  ```

Example:

```
fetch("https://energ.ee/covid19-us/api/states.json")
  .then(response => response.json())
  .then(data => {
    data["Pennsylvania"].forEach(({ date, confirmed, deaths }) =>
      console.log(`${date} active cases: ${confirmed} deaths: ${deaths}`)
    );
  });
```
