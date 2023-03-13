import React from 'react';
import Weather from './components/Weather';
import { useState } from 'react';
import axios from "axios";
import Result from './components/Result';
// import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
const [input,setInput] = useState("");
const [temp,setTemp] = useState("");
const [description,setDescription] = useState("");
const [icon,setIcon] = useState("");


const findweather = async() => {
  const unit = "metric";
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=661e47901981b76a15bf2c3a5a917792" + "&units=" + unit;
  const response = await axios.get(url);
  const temp =   response.data.main.temp;
  const weatherDescription  = response.data.weather[0].description;
  const icon = response.data.weather[0].icon;
  const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  console.log(temp,weatherDescription,imageURL);
  setTemp(temp);
  setDescription(weatherDescription);
  setIcon(imageURL);
  setInput("");
}

  return (
    <div className="App">
      {temp === "" ?  (
      <Weather input={input} setInput={setInput} findweather= {findweather}/>
      ) : (
      <Result temp={temp} desc={description} icon = {icon} setTemp={setTemp}  />
    )}
    </div>
  );
}
   

export default App;
