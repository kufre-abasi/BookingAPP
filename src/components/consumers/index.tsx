import React from 'react';
import GraySearchIcon from '../ui/Icons/GraySearhIcon';
import FilterIcon from '../ui/Icons/FilterIcon';
import Dropdown from '../ui/Icons/Dropdown';
import ConsumerTable from './ConsumerTable';
import ConsumerList from './ConsumerList';

const ConsumerSection = () => {
  return (
    <div className="w-full lg:w-[50%] font-Poppins">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[20px] text-[#64748B] ">List of consumers</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3 items-center bg-[#F2F2FF] w-full  py-2 px-5 rounded-[20px]">
            <GraySearchIcon />
            <p className="text-[12px] ">Search list</p>
          </div>
        </div>
      </div>
      <ConsumerList />
    </div>
  );
};

export default ConsumerSection;
