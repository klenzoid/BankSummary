import React from "react";

const SideBar = ({ viewDate, selectDate, totalData }) => {
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
  var noWrap = {
    whiteSpace: "nowrap",
    color: "white"
  };

  var userPickDate = {
    color: "#fd8263"
  };

  return (
    <div>
      <h2 style={noWrap}>
        Viewing: <span style={userPickDate}>{viewDate}</span>
      </h2>
      {datedTransactions}
    </div>
  );
};

export default SideBar;
