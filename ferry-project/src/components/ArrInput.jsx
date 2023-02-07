import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";


const ArrInput = (props) => {
    const [arrPort, setArrPort] = useState("Please select end port");

    const updateArrPort = (arrPort) => {
        setArrPort(arrPort)
        console.log(arrPort)
        props.setArrPort(arrPort)
    }

    return (
        <div className="arrinput">
            <DropdownList
                style={{ width: 600, fontSize: 15 }}
                arrPort={arrPort}
                onChange={updateArrPort}
                data={["Gills Bay", "St. Margaret's Hope Ferry Terminal"]}

            />
            <br />
            
        </div>
    )
}

export default ArrInput;