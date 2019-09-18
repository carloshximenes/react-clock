import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import CalendarButton from '../components/CalendarButton/CalendarButton';
import Calendar from '../components/Calendar/Calendar';

export default function App() {
  const [showCalendar, setShowCalendar] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const style = {
    padding: '16px',
    fontWeight: 'bold',
    fontSize: '60px'
  }

  return (
    <div className="App">
      <Header title='React Clock' />
      <CalendarButton show={showCalendar} clicked={() => setShowCalendar(!showCalendar)} />
      <div style={style}>{date.toLocaleTimeString()}</div>
      <Calendar show={showCalendar} value={date.toDateString()}/>
    </div>
  );
}

