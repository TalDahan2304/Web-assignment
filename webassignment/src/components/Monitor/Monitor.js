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

        const temp = monitorList.filter(monitor=>monitor.MonitorTypeId===id);
        setMonitors(temp);
    
        
        
    }, [id]);
    
    
    return(
        <div>
            
            {monitors.map((monitor)=>(
                <p key={monitor.Id}>{monitor.Name}</p>
            ))}
        </div>
    )
}

export default Monitor;