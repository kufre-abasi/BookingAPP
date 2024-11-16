import React from "react";

interface LavendarBoxProps {
  children: React.ReactNode;
  padding?: string;
  width?: string;
  bgColor?: string;
  customClasses?: string;
}

const LavendarBox: React.FC<LavendarBoxProps> = ({ 
  children, 
  padding = "p-3", 
  width = "w-full", 
  bgColor = "bg-[#F2F2FF]", 
  customClasses = "" 
}) => {
  return (
    <div className={`${bgColor}  ${padding} ${width} ${customClasses}`}>
      {children}
    </div>
  );
};

export default LavendarBox;
