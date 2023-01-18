import './LegendStyle.css'
import React  from "react";
import data from '../../details.json';

const LegendItem = (props) =>{
    const {label, color} = props;
    return(
        <div className="legend-wrapper">
            <div style={{
                height: 15,
                width: 15,
                backgroundColor: `${color}`,
                
            }}></div>
            <div>
                {label}
            </div>
        </div>
        
    )
}

const Legend = (props) =>{
    const {tags}= props;
    return(
        <div style={{
            height:"100vh",
            width:"60vw",
          }}>
       
        {tags?.map((item,index) => {
            return <LegendItem key={index} color={item.Color} label={item.Label}/>
        })}
        </div>
    )
}

export default Legend;