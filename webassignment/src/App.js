import './App.css'; 

import data from './details.json'
import React, { Component } from "react";

function App() {
  return (
    <div className="App">

        {data.MonitorType.map((item) => (
          <button id="monitortypebtns">{item.Name}</button>                
        ))}
    </div>
  );
}

export default App;
