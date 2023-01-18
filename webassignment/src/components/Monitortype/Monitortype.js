import './MonitortypeStyle.css'
import React  from "react";
import data from '../../details.json';

function MonitorType(props) {
    const buttons = data.MonitorType.map((monitorType) => {
      return (
        <button className="btns" key={monitorType.Id} value={monitorType.Id} onClick = {props.onFilterClick}>
          {monitorType.Name}
        </button>
      );
    });
    return <div className="btnContainer">{buttons}</div>;
  }

  export default MonitorType;

