import './LegendStyle.css'
import React  from "react";

const LegendItem = (props) =>{
    const {label, color} = props;
    return(
        <div className="legend-wrapper">
            <div style={{
                height: 15,
                width: 15,
                backgroundColor: `${color}`
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
            height:"50vh",
            width:"50vw",
          }}>
       
        {tags?.map(item => {
            return <LegendItem color={item.Color} label={item.Label}/>
        })}
        </div>
    )
}

export default Legend;