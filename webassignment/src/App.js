import './App.css'; 
import data from './details.json'
import React, {useState, useEffect} from "react";
import Legend from './components/Legend/Legend'
import Monitor from './components/Monitor/Monitor'
import MonitorType from './components/Monitortype/Monitortype'

function App() {
  const  [legendId, setLegendId] = useState(null);
  const  [legendTags, setLegendTags] = useState([]);
  const  [monitorTypeId, setMonitorTypeId] = useState();

  useEffect(() => {
     data.Legends.find(legend=>{
      if(legend.Id === legendId){
      setLegendTags(legend.tags)
      }
    })
}, [legendId]);

  const onFilterClick = (e) => {
    setMonitorTypeId(parseInt(e.target.value));
  }
 
  return (
    <div className="App">   
        <MonitorType onFilterClick = {onFilterClick}/>
        <div className="container">
          <div className="monitorborder">  
            <Monitor monitorTypeId={monitorTypeId} monitorList={data.Monitor} setLegendId={setLegendId} setMonitorTypeId= {setMonitorTypeId}/>
          </div>  
            
          <div className="legendborder">  
            <Legend tags={ legendTags}/>
          </div>
        </div>
    </div>
  );
}

export default App;
