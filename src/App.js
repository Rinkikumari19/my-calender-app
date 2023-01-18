import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

function App() {
  // const [date, setDate] = useState((new Date()).slice(0,15))
  // console.log('date', date)
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [currentDate, setCurrentDate] = useState(date)

  function previous() {
    // const current = (datePickerRef.current.control).selectionDay;
    // const updated = current.addDays(-1);
    // (datePickerRef.current.control).select(updated);
    var today = new Date();
    // var nextWeek = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7));
    var previousWeek = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7));
  }
  function next() {
    // const current = (datePickerRef.current.control).selectionDay;
    // const updated = current.addDays(-1);
    // (datePickerRef.current.control).select(updated);
    var today = new Date();
    var nextWeek = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7));
    console.log("next week data", nextWeek)
    // var previousWeek = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7));
  }

  return (
    <div className="App">
      <div className='top-nav'>
        <button className='btn' onClick={ev => previous()}>Previous week</button>
        <div>{currentDate}</div>
        <button className='btn' onClick={next}>Next week</button>
      </div>
     
      <div>
        <DayPilotCalendar
          // viewType="Week"
          viewType="Week"
        />
      </div>
    </div>
  );
}

export default App;
