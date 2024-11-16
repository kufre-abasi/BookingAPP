import React from "react";

interface TopProductProps {
  icon: React.ReactNode;
  product:string ;
  price:string;
  sales: string;
}
const TopProducts: React.FC<TopProductProps> = ({ icon, product,price,sales }) => {
  return (
    <div className="flex  justify-between items-center w-full">
     <div className="flex gap-3">
     <div>
        {icon}
      </div>
      <div>
        <p className="text-[14px] font-bold">{product}</p>
        <p className="text-[10px] text-[#64748B]">{price}</p>
      </div>
     </div>
        <div className="bg-[#F2F2FF] rounded-[5px] ">
           <p className="text-[10px] text-[#64748B]">{sales}</p>
        </div>
    </div>
  );
};

export default TopProducts;
