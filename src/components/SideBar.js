import React from "react";

const SideBar = props => {
  var datedTransactions = [];

  for (let [date, amount] of Object.entries(props.totals)) {
    datedTransactions.push([date, amount]);
  }
  return (
    <div>
      <ul>
        {datedTransactions.map(i => {
          return (
            <li key={i[0]}>
              {i[0]}: ${i[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
