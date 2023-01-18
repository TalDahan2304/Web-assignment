import './App.css'; 
import data from './details.json'
import React, {useState} from "react";
import Legend from './components/Legend/Legend'
import Monitor from './components/Monitor/Monitor'
import MonitorType from './components/Monitortype/Monitortype'

function App() {
  const [typeIdFilter, setTypeIdFilter] = useState(" ");
  var newNum=1;
  const onFilterClick = (e) => {
    setTypeIdFilter(parseInt(e.target.value));
    console.log(parseInt(e.target.value),"Tal");
    if(parseInt(e.target.value)>newNum){
      newNum =0;
    }
    else{
      newNum =1;
    }
  }
 

  return (

    <div className="App">
        
        <MonitorType onFilterClick = {onFilterClick}/>
        <div className="container">
          <div className="monitorborder">  
            <Monitor id={typeIdFilter} monitorList={data.Monitor}/>
          </div>  
            
          <div className="legendborder">  
            <Legend tags={data.Legends[newNum].tags }/>
          </div>
        </div>
    </div>
  );
}

export default App;
