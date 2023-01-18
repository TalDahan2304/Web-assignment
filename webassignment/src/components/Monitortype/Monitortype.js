import './MonitortypeStyle.css'
import React  from "react";
import data from '../../details.json';


function MonitorType() {
    const buttons = data.MonitorType.map((monitorType) => {
      return (
        <button key={monitorType.Id}>
          {monitorType.Name}
        </button>
      );
    });
  
    return <div>{buttons}</div>;
  }

  export default MonitorType;

// const Monitortypebtns = () =>{
 
// };

// const MonitortypeItem = (props)=>{
//     const {name, id}=props;

//     return(
//         <div className="btndiv">
//             <button className="btns" onClick={Monitortypebtns} > {name} </button>
//         </div>
//     )
// }