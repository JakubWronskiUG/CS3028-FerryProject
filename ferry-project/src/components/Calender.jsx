import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <DatePicker 
    selected={selectedDate}
    onChange={(date:Date) => setSelectedDate(date)}
    minDate = {new Date()}
    showTimeSelect
    />
  );
};

export default Calender;