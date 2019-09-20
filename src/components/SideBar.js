import React from "react";

const SideBar = ({ selectDate, totalData }) => {
  var datedTransactions = Object.entries(totalData).map(([date, amount]) => {
    return <option value={date} key={date}>{`${date}: ${amount}`}</option>;
  });

  return (
    <div>
      <select onChange={e => selectDate(e.target.value)}>
        {datedTransactions}
      </select>
    </div>
  );
};

export default SideBar;
