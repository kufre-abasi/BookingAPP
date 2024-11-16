import React from "react";

interface WhiteBoxProps {
  children: React.ReactNode;
  padding?: string;
  width?: string;
  bgColor?: string;
  customClasses?: string;
}

const WhiteBox: React.FC<WhiteBoxProps> = ({ 
  children, 
  padding = "p-5", 
  width = "w-full", 
  bgColor = "bg-white", 
  customClasses = "" 
}) => {
  return (
    <div className={`${bgColor} rounded-[8px] ${padding} ${width} ${customClasses}`}>
      {children}
    </div>
  );
};

export default WhiteBox;
