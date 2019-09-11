import React from "react";

const SideBar = data => {
  var arrayOfDates = Object.keys(data.data);
  return (
    <div>
      <ul>
        {arrayOfDates.map(date => (
          <li>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
