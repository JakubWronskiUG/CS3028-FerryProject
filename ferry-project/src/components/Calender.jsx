import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <DatePicker 
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    minDate = {new Date()}
    showTimeSelect
    dateFormat = 'dd/MM/yyyy HH:mm'
    />
  );
};

export default Calender;