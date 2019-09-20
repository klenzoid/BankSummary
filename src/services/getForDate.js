export function getForDate(selectedDate, datedTransactions) {
  for (let [date, transactions] of Object.entries(datedTransactions)) {
    if (date.toString() === selectedDate.toString()) {
      return transactions;
    }
  }
}
