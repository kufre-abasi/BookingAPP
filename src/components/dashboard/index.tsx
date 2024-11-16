import React, { useState } from 'react';
import BannerSection from '@/components/dashboard/Sections/BannerSection';
import ArrowRightIcon from '@/components/ui/Icons/ArrowRight';
import CalenderIcon from '@/components/ui/Icons/Calender';
import FlightsSection from '@/components/dashboard/Sections/Flights';
import HotelsSection from '@/components/dashboard/Sections/Hotels'; 
import ActivitiesSection from '@/components/dashboard/Sections/Activities';
import HotelsModal from '@/components/ui/modal/HotelsModal';
const Home = () => {
    const [showModal, setModal] = useState(false);

    const handleToggleModal = () => {
      setModal((showModal) => !showModal);
    };

  return (
    <>
      <div className="overflow-x-auto bg-[#FFFFFF] lg:p-[20px] flex flex-col gap-4 p-2 pb-20 rounded-[4px]">
        <BannerSection />
        <div className="">
          <div className="orange-tag w-fit px-[8px] py-[4px] gap-[4px] flex items-center rounded-[4px] text-[12px] ">
            <CalenderIcon /> <span>21 March 2024</span>
            <ArrowRightIcon />
            <span>21 March 2024</span>
          </div>
          <h4 className=" text-[#000000] text-[24px] font-semibold leading-[32px]">
            Bahamas Family Trip
          </h4>
          <div className="flex text-[#676E7E] text-[14px] gap-[4px] ">
            <span>New York,  United States of America </span>
            <hr className="border border-[#D0D5DD]" />
            <span>Solo Trip</span>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-2">
          <div className="bg-[#000031] p-[20px] flex flex-col w-full justify-between rounded-[4px] lg:max-w-[270px] min-h-[209px] max-h-[209px] lg:min-w-[270px]">
            <div className="flex flex-col gap-3">
              {' '}
              <h3 className="text-[#FFFFFF] text-[16px] leading-[24px] font-semibold">
                Activities
              </h3>
              <p className="text-[#FFFFFF] leading-[22px] text-[14px]">
                Build, personalize, and optimize your itineraries with our trip
                planner.
              </p>
            </div>
            <button
              onClick={handleToggleModal}
              className="border-none justify-center text-[14px] bg-brand rounded-[4px] text-center text-white px-4 py-2 font-normal flex items-center gap-3"
            >
              Add Activities{' '}
            </button>
          </div>
          <div className="bg-[#E7F0FF] p-[20px] flex flex-col w-full justify-between rounded-[4px] lg:max-w-[270px] min-h-[209px] max-h-[209px] lg:min-w-[270px]">
            <div className="flex flex-col gap-3">
              {' '}
              <h3 className="text-black text-[16px] leading-[24px] font-semibold">
                Hotels{' '}
              </h3>
              <p className="text-[#1D2433] leading-[22px] text-[14px]">
                Build, personalize, and optimize your itineraries with our trip
                planner.
              </p>
            </div>
            <button
              onClick={handleToggleModal}
               className="border-none justify-center text-[14px] bg-brand rounded-[4px] text-center text-white px-4 py-2 font-normal flex items-center gap-3"
            >
              Add Hotels{' '}
            </button>
          </div>{' '}
          <div className="bg-[#0D6EFD] p-[20px] flex flex-col w-full justify-between rounded-[4px] lg:max-w-[270px] min-h-[209px] max-h-[209px] lg:min-w-[270px]">
            <div className="flex flex-col gap-3">
              {' '}
              <h3 className="text-[#FFFFFF] text-[16px] leading-[24px] font-semibold">
                Flights{' '}
              </h3>
              <p className="text-[#FFFFFF] leading-[22px] text-[14px]">
                Build, personalize, and optimize your itineraries with our trip
                planner.
              </p>
            </div>
            <button
              onClick={handleToggleModal}
              className="border-none bg-[#FFFFFF] rounded-[4px] text-[14px] text-center w-full text-[#0D6EFD] px-4 py-2 font-normal flex items-center justify-center gap-3"
            >
              Add Flights{' '}
            </button>
          </div>{' '}
        </div>
        <div className="flex flex-col gap-4">
          <FlightsSection />
          <HotelsSection />
          <ActivitiesSection />
        </div>
      </div>
      {showModal && <HotelsModal handleToggle={handleToggleModal} />}
    </>
  );
};

export default Home;
