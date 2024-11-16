import React from "react";

interface StatsProps {
  title: string;
  icon: React.ReactNode;
  amount: string;
  percent:string;
}

const Stats: React.FC<StatsProps> = ({ title, icon, amount, percent }) => {
  return (
    <div className="p-5 w-full flex flex-col justify-center">
      <p className="text-[14px] font-extrabold text-[#64748B] pb-3">{title}</p>
      <p className="text-[24px] text-[#201950]">{amount}</p>
      <div className="flex gap-2 items-center">
        {icon}
        <p className="text-[12px] text-[#00C72C]">{percent}</p>
      </div>
      
    </div>
  );
};

export default Stats;
