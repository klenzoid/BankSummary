import React from "react";

const SideBar = ({ selectDate, totalData }) => {
  var datedTransactions = Object.entries(totalData).map(([date, amount]) => {
    return (
      <button
        className="sideBarContent"
        onClick={e => selectDate(e.target.value)}
        value={date}
        key={date}
      >
        {`${date}: ${amount}`}
      </button>
    );
  });

  return (
    <div>
      {/* <select onChange={e => selectDate(e.target.value)}> */}
      {datedTransactions}
      {/* </select> */}
    </div>
  );
};

export default SideBar;
