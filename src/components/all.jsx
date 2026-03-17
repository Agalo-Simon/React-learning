import { useState } from "react";
import StarRating from "./StarRating";

const MyButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <button
        style={{ background: "red", padding: "12px", border: "none" }}
        onClick={() => setIsOn(!isOn)}
      >
        Toggle: {isOn ? "On" : "Off"}
      </button>


{/*========= Rating  Star======= */}
      <StarRating />
      
    </>
  );
};
export default MyButton;
