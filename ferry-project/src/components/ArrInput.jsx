import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";

const ArrInput = () => {
    const [arrPort, setArrPort] = useState("Please select end port");

    return (
    <div className="arrinput">
    <DropdownList
    style = {{ width: 600 }}
    arrPort={arrPort}
    onChange={(arrPort) => setArrPort(arrPort) & console.log(arrPort)}
    data={["Gills Bay", "St. Margaret's Hope Ferry Terminal"]}
        
    />
    </div>
    )
}

export default ArrInput;