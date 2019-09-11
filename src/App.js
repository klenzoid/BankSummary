import React, { useState } from "react";
import "./App.css";

// Functions
import { loadFile } from "./services/loadFile";
import { uniqueDates } from "./services/uniqueDates";
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

  // converted file via Papaparse package
  const [JSONFile, setJSONFile] = useState({});

  // object with unique dates as keys
  const [dates, setDates] = useState(null);

  const [allInfo, setAllInfo] = useState({
    dayTotal: null,
    datedTransactions: null
  });
  function onChange(e) {
    e.preventDefault();
    let loadedFile = e.target.files[0];
    setFile(loadedFile);
  }
  function onSubmit(e) {
    e.preventDefault();
    let convert = loadFile(file);
    setJSONFile(convert);
  }

  function convert(e) {
    e.preventDefault();
    let unique = uniqueDates(JSONFile.data);
    setDates(unique);
  }

  function sorted(e) {
    e.preventDefault();
    let sorted = sortTransactions(dates, JSONFile);
    let count = sumTransactions(sorted);
    setAllInfo({ ...allInfo, dayTotal: count, datedTransactions: sorted });
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
      <button onClick={onSubmit}>Click</button>
      <button onClick={convert}>Click2</button>
      <button onClick={sorted}>Click3</button>
      {isFileLoaded && <SideBar data={allInfo.dayTotal} />}
    </div>
  );
}

export default App;
