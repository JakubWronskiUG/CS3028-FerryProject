import React, { useState } from "react";
import './Header.css';
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";


const [isShowLogin, setIsShowLogin] = useState(true);

const handleLoginClick = () => {
  setIsShowLogin((isShowLogin) => !isShowLogin);
};

const Header = () => {
    return (
        <div className="up-container">   
            <div className="row">
                <div className="col-lg-10"> 
                    <h1><img src="FerrywaveLogo.png" alt="logo" width="420" height="110"></img></h1>
                </div>
                <div className="col-lg-1">
                    <br></br> <br></br><br></br><br></br><br></br>
                    <button class="button">Register</button> 
                </div>
                <div className="col-lg-1">
                    <br></br> <br></br><br></br><br></br><br></br>
                    <button class="button">Log in</button> 
                    <NavBar handleLoginClick={handleLoginClick} />
                    <LoginForm isShowLogin={isShowLogin} />
                </div>
            </div>
        </div>
 
    )
}

export default Header;