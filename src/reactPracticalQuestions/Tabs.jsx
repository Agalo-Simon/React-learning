import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

// const Tabs = () => {
//   const tabs = [
//     { label: "Tab 1", content: <div>Content of Tab 1</div> },
//     { label: "Tab 2", content: <div>Content of Tab 2</div> },
//     { label: "Tab 3", content: <div>Content of Tab 3</div> },
//   ];
//   return <TabMenu tabs={tabs} />;
// };



//const TabMenu = ({tabs})=>{}
const Tabs = () => {
  const [isActive, setIsActive] = useState(0);

   const tabs = [
    { label: "Tab 1", content: <div>Content of Tab 1</div> },
    { label: "Tab 2", content: <div>Content of Tab 2</div> },
    { label: "Tab 3", content: <div>Content of Tab 3</div> },
  ];

  return (
    <div>
      <div className="tab-button">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index == isActive ? "Active" : ""}
            onClick={() => setIsActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[isActive].content}
        </div>

        <CountdownTimer  initialSeconds={60}/>
    </div>
  );
};
export default Tabs;
