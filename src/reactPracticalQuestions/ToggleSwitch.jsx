import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div>
      <p style={{background: isOn? "Green": "Red", color: isOn?"white":"black"}}>Switch: {isOn? "Yes": 'No'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
