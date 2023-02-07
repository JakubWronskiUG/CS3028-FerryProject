import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";


const DepInput = (props) => {

    const [depPort, setDepPort] = useState("Please select start port");
    
    const updateDepPort = (depPort) => {
        setDepPort(depPort)
        console.log(depPort)
        props.setDepPort(depPort)
    }

    return (
    <div className="depinput">
    <DropdownList
    style = {{ width: 600, fontSize: 15 }}
    depPort={depPort}
    onChange={updateDepPort}
    data={["Gills Bay", "St. Margaret's Hope Ferry Terminal"]}
    
    />
    <br/>
    
    </div>
    )
}

export default DepInput;