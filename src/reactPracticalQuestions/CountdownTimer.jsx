import React, { useEffect, useState } from 'react'

const CountdownTimer = ({initialSeconds}) => {

  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(()=>{
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return ()=>clearInterval(timer);
  },[]);
  return (
    <div>
      <h4>Count Down Timer</h4>
      <p>{seconds} The remaining seconds</p>
    </div>
  )
}

export default CountdownTimer;
