// DESCRIPTION: gets all transactions in a single day

// INPUTS
// date -> selected date as a string
// datedTransactions -> object with date:[transactions] as key:value pair

// OUTPUTS
// display the dated transactions for selected date
import moment from "moment";
export function sortTransactions(uniqueDates, rawData) {
  var sortedTransactions = uniqueDates;
  var data = rawData;
  for (var i = 0, l = data.length - 1; i < l; i++) {
    var dataPoint = moment(data[i][0]).format("MMMM Do YYYY");
    var dataPointInfo = data[i].slice(1);
    if (dataPoint in uniqueDates) {
      sortedTransactions[dataPoint].push(dataPointInfo);
    }
  }
  return sortedTransactions;
}
