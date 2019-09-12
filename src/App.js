import React, { useState, useEffect } from "react";
import "./App.css";

// Functions
import { loadFile } from "./services/loadFile";
import { sortTransactions } from "./services/sortTransactions";
import { sumTransactions } from "./services/sumTransactions";

// Components
import SideBar from "./components/SideBar";

function App() {
  // States to load file into app

  //Check if user uploaded file
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // user uploaded file, not processed yet
  // raw file, should be csv
  const [file, setFile] = useState("");

  const [allInfo, setAllInfo] = useState({
    dayTotal: null,
    datedTransactions: null
  });

  useEffect(() => {
    setAllInfo({ ...allInfo, datedTransactions: loadFile(file) });
  }, [file]);

  function onChange(e) {
    e.preventDefault();
    let loadedFile = e.target.files[0];
    setFile(loadedFile);
  }

  function sorted(e) {
    let count = sumTransactions(allInfo.datedTransactions.data);
    setAllInfo({ ...allInfo, dayTotal: count });
    setIsFileLoaded(true);
  }

  return (
    <div className="App">
      <form>
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={onChange}
        ></input>
      </form>
      <button onClick={sorted}>Click3</button>
      {isFileLoaded && (
        <div>
          <ul>
            {Object.entries(allInfo.dayTotal).map(([date, amount]) => {
              return <p key={date}>{`${date}: ${amount}`}</p>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
