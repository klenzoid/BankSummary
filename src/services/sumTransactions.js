// DESCRIPTION: calculate net transaction amount for a single day

// INPUTS
// takes in date: [[transaction]] in key:value pair

// OUTPUTS
// date: netTransactionAmount in key:value pair

// import moment from "moment";

export function sumTransactions(allTransactions) {
  // return this
  var allDaysTransactions = {};
  // daysKeys -> output array of unique dates
  for (var [date, transactions] of Object.entries(allTransactions)) {
    var daySum = 0;
    // const transactionDate = moment(date).format("MMMM Do YYYY");
    var transactionDate = date;
    for (var i = 0, l = transactions.length; i < l; i++) {
      var transactionAmount = parseFloat(transactions[i][0]);
      daySum += transactionAmount;
      allDaysTransactions[transactionDate] = daySum;
    }
  }
  return allDaysTransactions;
}
