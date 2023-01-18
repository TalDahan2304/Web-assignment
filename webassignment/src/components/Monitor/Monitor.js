import './MonitorStyle.css'
import React, {useState, useEffect} from "react";
import data from '../../details.json';


const MonitorItem = (props) =>{
    const {name, id} = props;


    return(
        <div className="monitor-wrapper">
             {name}
        </div>
    )
}

const Monitor = (props) =>{

    const {id, monitorList}=props;
    const [monitors, setMonitors] = useState([]);
    console.log(monitors);


    useEffect(() => {
        monitorList.map(monitor=>{
            if(monitor.MonitorTypeId===id){
                setMonitors([...monitors, {monitor}]);
            }
        })
        
        // setMonitors(monitorList?.find(monitor=>monitor.MonitorTypeId===id));
    }, [id]);
    
    return(
        <div>
            {monitors.map((index ,monitor)=>{
                    return <MonitorItem key={index} id={monitor.MonitorTypeId} name={monitor.Name}/>
            })}

        </div>
    )
}

export default Monitor;