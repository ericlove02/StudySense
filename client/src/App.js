import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [time, setTime] = useState([{}])

  useEffect(() => {
    fetch("/time").then(
      res => res.json()
        .then(
          time => {
            setTime(time)
            console.log(time)
          }
        )
    )
  }, [])

  return (
    <div className="App">
      {time.time}
    </div>
  );
}

export default App;
