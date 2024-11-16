import React from "react";

interface OrdersBoxProps {
  title: string;
  icon: React.ReactNode;
  amount: string;
}

const OrdersBox: React.FC<OrdersBoxProps> = ({ title, icon, amount }) => {
  return (
    <div className="bg-white rounded-[8px] p-5 w-full shadow-md flex flex-col gap-3">
      <p className="text-[14px] font-extrabold text-[#64748B]">{title}</p>
      <div className="bg-[#F2F2FF] w-[40px] h-[35px] rounded-[8px] flex items-center justify-center">{icon}</div>
      <p className="text-[24px] text-[#201950]">{amount}</p>
    </div>
  );
};

export default OrdersBox;
