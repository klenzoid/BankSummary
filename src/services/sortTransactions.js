// DESCRIPTION: gets all transactions in a single day

// INPUTS
// uniqueDates -> object with date:emptyArray as key:value pair
// rawData -> object that contains relevent data in data attribute
// rawData.data -> array of arrays -> [[date, $amount, null, description, location]]

// OUTPUTS
// object with date: [all transactions on that date] as key:value pairs
import moment from "moment";
export function sortTransactions(uniqueDates, rawData) {
  var sortedTransactions = uniqueDates;
  var data = rawData.data;
  for (var i = 0, l = data.length - 1; i < l; i++) {
    var dataPoint = moment(data[i][0]).format("MMMM Do YYYY");
    var dataPointInfo = data[i].slice(1);
    if (dataPoint in uniqueDates) {
      sortedTransactions[dataPoint].push(dataPointInfo);
    }
  }
  return sortedTransactions;
}
