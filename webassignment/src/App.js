import './App.css'; 
import data from './details.json'
import React from "react";
import Legend from './components/Legend/Legend'
import Monitor from './components/Monitor/Monitor'

function App() {
 

  return (

    <div className="App">
        {/* {data.MonitorType.map((item,i) => (
          <button className="monitortypebtns" key={i} id={item.Id}  onClick = {()=>setActive(console.log(item.Name, item.Id))} >{item.Name} </button> 
        ))} */}
          
        <div style={{
          height:"100vh",
          width:"100vw",
        }}>
          <Monitor id={1} monitorList={data.Monitor}/>
        {/* <Legend tags={data.Legends[1].tags}/> */}


        </div>
    </div>
  );
}

export default App;
