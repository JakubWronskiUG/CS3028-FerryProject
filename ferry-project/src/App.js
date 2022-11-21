import React, { useState } from "react";
import './styles/App.css';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import Icons from './components/Icons';
import Ideas from './components/Ideas';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import GetAllButton from './components/GetAllButton';

import DatePicker from "react-widgets/DatePicker";



function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [date, setDate] = useState(new(Date))
  return (
    
    <div className="App">
      <Header/>
      
      <div className="search">
      
      <h1>Single Journey</h1>
      <img align="right" src="ferryimage.jpg" alt="ferryimage" width="375.5" height="281.7"></img>
      
      <br />
      <h2>Enter departure port:</h2>
      <DropdownList
      style = {{ width: 600 }}
      value={value}
      onChange={(nextValue) => setValue(nextValue) & console.log(nextValue)}
      data={["Gills Bay", "St. Margaret's Hope Ferry Terminal"]}
      />
      <br />
      <h2>Enter arrival port:</h2>
      <DropdownList
      style = {{ width: 600 }}
      value2={value2}
      onChange={(nextValue2) => setValue2(nextValue2) & console.log(nextValue2)}
      data={["Gills Bay", "St. Margaret's Hope Ferry Terminal"]}
      />
      <br />
      <h2>Enter date and time of travel:</h2>
      <DatePicker 
      style = {{ width: 600 }}
      defaultValue={new Date()} 
      includeTime 
      min={new Date()}
      date={date}
      onChange={date => setDate(date) & console.log(date)}/>
      
      <br />
      <GetAllButton/>
      </div>
      
      <Ideas/>
      <Icons/>
      <AboutUs/>
      <Footer/>
    </div>
    
  );
}


export default App;
