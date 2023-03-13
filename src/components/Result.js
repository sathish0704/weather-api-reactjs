import React from 'react';
import './Result.css';

const Result = ({temp,desc,icon,setTemp}) => {
  return (
    <div className='result'>
      <div className='result_box'>
        <h1>Temp: {temp}°C</h1>
        <p>{desc}</p>
        <img src={icon} alt='logo' /><br/>
        <button onClick={()=> { setTemp(""); }}>Back</button> 

      </div>
    </div>
  )
};

export default Result
