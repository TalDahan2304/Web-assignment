import './MonitortypeStyle.css'
import React  from "react";
import data from '../../details.json';


function MonitorType(props) {
    const buttons = data.MonitorType.map((monitorType) => {
      return (
        <button key={monitorType.Id} value={monitorType.Id} onClick = {props.onFilterClick}>
          {monitorType.Name}
        </button>
      );
    });
  
    return <div>{buttons}</div>;
  }

  export default MonitorType;

