import './MonitorStyle.css'
import React, {useState, useEffect} from "react";
import data from '../../details.json';

const MonitorItem = (props) =>{
    const {name, mtTd,setMonitorTypeId, setLegendId} = props;

    const handleOnMonitorClick = (name)=>{
        setMonitorTypeId(mtTd);
        
         data.MonitorType.find((monitorType)=>{
          if  (monitorType.Id === mtTd){
             setLegendId(monitorType.LegendId);
          } 
        })
    }

    return(
        <div className="monitor-item" onClick={() => handleOnMonitorClick(name)}>
             {name}
        </div>
    )
}

const Monitor = (props) =>{
    
    const {monitorTypeId, monitorList, setLegendId, setMonitorTypeId}=props;
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
        const temp = monitorList.filter(monitor=>monitor.MonitorTypeId===monitorTypeId);
        setMonitors(temp);
    }, [monitorTypeId, monitorList]);
    
    return(
        <div>
            {monitors.map((monitor,index)=>(
                <MonitorItem setLegendId = {setLegendId} key={index} setMonitorTypeId={setMonitorTypeId} mtTd={monitorTypeId} name={monitor.Name}></MonitorItem>
            ))}
        </div>
    )
}

export default Monitor;