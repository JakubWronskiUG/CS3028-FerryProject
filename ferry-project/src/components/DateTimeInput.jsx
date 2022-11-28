import DatePicker from "react-widgets/DatePicker";
import React, { useState } from "react";

const DateTimeInput = () => {
    const [date, setDate] = useState(new(Date));
    
    return (
    
    <DatePicker 
      style = {{ width: 600 }}
      defaultValue={new Date()} 
      includeTime 
      min={new Date()}
      date={date}
      onChange={date => setDate(date) & console.log(date)}/>
  
    
    )
}

export default DateTimeInput;

