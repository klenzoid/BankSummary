import React, { useState, useEffect } from "react";
import "./App.css";

// Functions
import { loadFile } from "./services/loadFile";
import { sumTransactions } from "./services/sumTransactions";
// Components
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
function App() {
  // States to load file into app

  //Check if user uploaded file
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  // user uploaded file, not processed yet
  // raw file, should be csv
  const [file, setFile] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

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
      <form className="inputFile">
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={onChange}
        ></input>
      </form>
      <button className="inputFileSubmit" onClick={sorted}>
        Load File
      </button>

      <div className="sideBar">
        {isFileLoaded && (
          <SideBar
            viewDate={selectedDate}
            selectDate={setSelectedDate}
            totalData={allInfo.dayTotal}
          />
        )}
      </div>

      <div className="mainContent">
        {selectedDate && (
          <MainContent
            selectDate={selectedDate}
            datedTransactions={allInfo.datedTransactions.data}
          />
        )}
      </div>
    </div>
  );
}

export default App;
