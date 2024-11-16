import React from 'react';

import FilterIcon from '../ui/Icons/FilterIcon';
import Dropdown from '../ui/Icons/Dropdown';
import GraySearchIcon from '../ui/Icons/GraySearhIcon';
import Reviews from './ReviewList';

const ReviewSection = () => {
  return (
    <div className="font-Poppins">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[20px] text-[#64748B] ">
            All reviews <span className="text-[14px]">(500 reviews)</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3 items-center bg-[#F2F2FF] w-full lg:w-[400px] py-2 px-5 rounded-[20px]">
            <GraySearchIcon />
            <p className="text-[12px] text-[#64748B] font-semibold ">
              Search list
            </p>
          </div>
          <div>
            <FilterIcon />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <Reviews />
        <Reviews />
        <Reviews />
      </div>
    </div>
  );
};

export default ReviewSection;
