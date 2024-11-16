import React from 'react';
import GraySearchIcon from '../ui/Icons/GraySearhIcon';
import FilterIcon from '../ui/Icons/FilterIcon';
import Dropdown from '../ui/Icons/Dropdown';
import Tabs from './TabComponent';

const Ordersection = () => {
  return (
    <div className="font-Poppins lg:p-5 lg:w-[90%]">
      <div>
        <p className="text-[20px] text-[#64748B] ">All Orders</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <Tabs />
      </div>
    </div>
  );
};

export default Ordersection;
