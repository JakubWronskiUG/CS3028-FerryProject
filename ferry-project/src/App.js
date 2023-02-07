import React, { useState } from "react";
import './styles/App.css';
import "react-widgets/styles.css";
import Icons from './components/Icons';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import GetAllButton from './components/GetAllButton';
import DepInput from "./components/DepInput";
import ArrInput from "./components/ArrInput";
import DateTimeInput from "./components/DateTimeInput";
import data from "./components/assets/data.json";
import VerticalCarousel from "./components/VerticalCarousel";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import './components/Header.css';


function App() {

  const [arrPort, setArrPort] = useState("");	
  const [depPort, setDepPort] = useState("");

  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isRegister, setRegister] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleRegisterClick = () => {
    setRegister((isRegister) => !isRegister);
  };

  return (
    
    <div className="App">
      <div className="up-container">   
            <div className="row">
                <div className="col-lg-9"> 
                    <h1><img src="FerrywaveLogo.png" alt="logo" width="420" height="110"></img></h1>
                </div>
                <div className="col-lg-1">
                    <br></br> <br></br><br></br><br></br>
                    <NavBar2 handleRegisterClick={handleRegisterClick} />
                </div>
                <div className="col-lg-2">
                <br></br> <br></br><br></br><br></br>
                    <NavBar handleLoginClick={handleLoginClick} />
                </div>
            </div>
        </div>
        <LoginForm isShowLogin={isShowLogin} />
        <RegisterForm isRegister={isRegister} />

      
      <div className="search">

      <h1>Single Journey</h1>

      <img className = "ferryImage" alt = "ferryimage" src = "ferryimage.jpg" align = "right"/>
      
      <br />

      	
      <h2>Departure Port:</h2>	
        <DepInput setDepPort={setDepPort} />	
        <br />	
        <h2>Arrival Port:</h2>	
        <ArrInput setArrPort={setArrPort} />	
        <br />	
        <h2>Date and Time of Departure:</h2>	
        <DateTimeInput />	
        <br />	
        <GetAllButton arrivalPort={arrPort} departurePort={depPort}/>	
        <br />
      
      </div>
      
      <Icons/>
      <div className="search">
      <React.StrictMode>
      <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
      </React.StrictMode>
      </div>

      <AboutUs/>
      
      <Footer/>

    </div>
    
  );
}


export default App;