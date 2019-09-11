export function convertForLine(data) {
  var lineData = [];
  for (var [date, total] of Object.entries(data)) {
    const entry = {};
    entry[date] = total;
    lineData.push(entry);
  }
  return lineData;
}
