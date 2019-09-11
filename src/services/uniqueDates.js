// DESCRIPTION: get unique dates from JSON

// INPUTS
// takes in array of arrays
// each array in array has structure -> [date, $amount, null, description, location]
// eg) [[transaction]]

// OUTPUTS
// returns object with date: emptyArray as key:value pair

import moment from "moment";

export function uniqueDates(convertedData) {
  let data = convertedData;
  var unique = {};
  for (var i = 0, l = data.length; i < l; i++) {
    var dataPoint = moment(data[i][0]).format("MMMM Do YYYY");
    if (dataPoint in unique === false && dataPoint !== "Invalid date") {
      unique[dataPoint] = [];
    }
  }
  return unique;
}
