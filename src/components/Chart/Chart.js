import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props)=>{
    const valuesArray = props.dataSet.map(data=>data.value);
    const maxValue = Math.max(...valuesArray);
    return (
        <div className='chart'>
            {props.dataSet.map((data)=>{
                return (
                    <ChartBar
                        key={data.label}
                        value={data.value}
                        maxValue={maxValue}
                        label={data.label}/>
                );
            })}
        </div>
    );
}

export default Chart;