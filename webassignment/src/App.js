import './App.css'; 
import data from './details.json'
import React, {useState} from "react";
import Legend from './components/Legend/Legend'
import Monitor from './components/Monitor/Monitor'
import MonitorType from './components/Monitortype/Monitortype'

function App() {
  const [typeIdFilter, setTypeIdFilter] = useState(" ");
  const onFilterClick = (e) => {
    setTypeIdFilter(parseInt(e.target.value));
  }
 

  return (

    <div className="App">
        
        <MonitorType onFilterClick = {onFilterClick}/>
        <div className="container">
          <div className="monitorborder">  
            <Monitor id={typeIdFilter} monitorList={data.Monitor}/>
          </div>  
            
          <div className="legendborder">  
            <Legend tags={data.Legends[1].tags}/>
          </div>
        </div>
    </div>
  );
}

export default App;
