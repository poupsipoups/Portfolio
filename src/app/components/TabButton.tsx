import React from "react";

interface TabButtonProps{
    active : boolean, 
    selectTab: ()=>{},
    children : string
}

const TabButton:React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-[#aaf540] border-[#aaf540] border-b"
    : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#AFE54B] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;