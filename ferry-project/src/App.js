import React from "react";
import './styles/App.css';
import "react-widgets/styles.css";
import Icons from './components/Icons';
import Ideas from './components/Ideas';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import GetAllButton from './components/GetAllButton';
import DepInput from "./components/DepInput";
import ArrInput from "./components/ArrInput";
import DateTimeInput from "./components/DateTimeInput";
import data from "./assets/data.json";
import VerticalCarousel from "./VerticalCarousel";


function App() {
  
  return (
    
    <div className="App">
      <Header/>
      
      <div className="search">

      <h1>Single Journey</h1>

      <img className = "ferryImage" alt = "ferryimage" src = "ferryimage.jpg" align = "right"/>
      
      <br />

      <h2>Departure Port:</h2>

      <DepInput/>
      <br />

      <h2>Arrival Port:</h2>
      
      <ArrInput/>
      <br />

      <h2>Date and Time of Departure:</h2>
      
      <DateTimeInput/>
      <br />

      <GetAllButton/>
      <br />
      
      </div>
      
      <Ideas/>
      
      <Icons/>

      <React.StrictMode>
      <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
      </React.StrictMode>

      <AboutUs/>
      
      <Footer/>

    </div>
    
  );
}


export default App;
