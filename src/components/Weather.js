import React from 'react'
import './input.css';

const Weather = ({input,setInput, findweather}) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  }
  console.log(input);

  const handleClick = (event) =>
   {
    event.preventDefault();
    findweather();   
  }

  return (
    <div className='inputBox'>
      <div className='inputBox_field'>
        <h1> WEATHER APP</h1>
        {/* <p>Created by</p><br/> */}
        <img src="https://ik.imagekit.io/sathish2267/3d-casual-life-sunny-postcard.png?updatedAt=1678684935725" alt="logo" /><br/>
        <form>
        <input placeholder='Enter the city name' onChange={handleChange} value={input} />
        <br/>
        <button type='submit' onClick={handleClick} >Search</button>
        </form>
        </div>
  </div>
  )
}

export default Weather
