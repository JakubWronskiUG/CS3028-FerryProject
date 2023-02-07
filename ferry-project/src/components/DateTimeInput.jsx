import DatePicker from "react-widgets/DatePicker";
import React, { useState } from "react";


const DateTimeInput = () => {
    const [date, setDate] = useState();
    
    return (
    
    <DatePicker 
      style = {{ width: 600 , fontSize: 15}}
      
      defaultValue={new Date()} 
      min={new Date()}
      date={date}
      onChange={date => setDate(date) & console.log(date)}/>
  
    
    )
}

export default DateTimeInput;

