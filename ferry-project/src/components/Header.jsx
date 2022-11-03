import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div class="up-container">   
            <div class="row">
                <div class="col-lg-9">
                    <h1>FerryWave</h1>   
                </div>
                <div class="col-lg-1">
                    <button type="button">Timetables</button> 
                </div>
                <div class="col-lg-1">
                    <button type="button">Register</button> 
                </div>
                <div class="col-lg-1">
                    <button type="button">Log in</button> 
                </div>
            </div>
        </div>
 
    )
}

export default Header;