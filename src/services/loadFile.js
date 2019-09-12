// DESCRIPTION: turn CSV into JSON
//  CSV to JSON with papaparse

// INPUTS
// takes in CSV file with no headers
// CSV has columns of date, $ amount, null, action, location

// OUTPUTS
// outputs object with an array of arrays
//{data: [[transaction]]}

import * as Papa from "papaparse";
import { uniqueDates } from "./uniqueDates";
import { sortTransactions } from "./sortTransactions";
export function loadFile(file) {
  var sortedTransactions = {};
  Papa.parse(file, {
    complete: function(result) {
      sortedTransactions.data = result.data;
      var listOfUniqueDates = uniqueDates(sortedTransactions.data);
      var datedTransactions = sortTransactions(listOfUniqueDates, result.data);
      sortedTransactions.data = datedTransactions;
    }
  });
  return sortedTransactions;
}
