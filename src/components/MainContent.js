import React from "react";
import { getForDate } from "../services/getForDate";

const MainContent = ({ selectDate, datedTransactions, dayTotal }) => {
  var selectedDate = getForDate(selectDate, datedTransactions);

  function getDateTransactions(date) {
    return date.map((dated, i) => {
      var amount = dated[0];
      var desc = dated[2];
      var location = dated[3];
      return (
        <tr key={i}>
          <td>${amount}</td>
          <td>{desc}</td>
          <td>{location}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <table className="mainContentTable">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {getDateTransactions(selectedDate)}
          <td style={{ backgroundColor: "#fd8263" }}>
            NET AMOUNT: ${dayTotal}
          </td>
          <td style={{ backgroundColor: "#fd8263" }}></td>
          <td style={{ backgroundColor: "#fd8263" }}></td>
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
