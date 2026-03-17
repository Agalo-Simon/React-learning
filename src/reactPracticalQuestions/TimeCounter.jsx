import { useState } from "react";

const TimeCounter =()=>{
  const [count, setCount] = useState(0);

  const handleClick=()=>{
    setCount(count+1)
  }
  const handleDecrease =()=>{
    setCount(count-1)
  }
  return(
    <div>
      <p style={{color: "white"}}>Count: {count}</p>
      <button onClick={handleClick}>Increase!.</button>
      <button onClick={handleDecrease}>Decrease!.</button>

    </div>
  )

}


export default TimeCounter;