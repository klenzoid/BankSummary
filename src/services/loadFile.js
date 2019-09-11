// DESCRIPTION: turn CSV into JSON
//  CSV to JSON with papaparse

// INPUTS
// takes in CSV file with no headers
// CSV has columns of date, $ amount, null, action, location

// OUTPUTS
// outputs object with an array of arrays
//{data: [[transaction]]}

import * as Papa from "papaparse";

export function loadFile(file) {
  var x = {};
  Papa.parse(file, {
    complete: function(result) {
      x.data = result.data;
    }
  });
  return x;
}
