import React from 'react';
import ArrowLeftBoxIcon from '@/components/ui/Icons/ArrowLeftBox';
import AirplaneInFlightIcon from '@/components/ui/Icons/AirplaneInFlight';
import XIcon from '@/components/ui/Icons/XIcon';
const FlightsSection = () => {
  return (
    <>
      <div className=" pt-20 ">
        <div className="flex flex-col ">
          <h3 className="text-[#1D2433] text-[20px] leading-[28px] font-semibold">
            Trip itineraries{' '}
          </h3>
          <p className="text-[#647995] leading-[22px] text-[14px]">
            Your trip itineraries are placed here{' '}
          </p>
        </div>{' '}
        <div className="flex flex-col gap-[10px] justify-between bg-[#F0F2F5] rounded-[4px] p-6 mt-6">
          {' '}
          <div className="flex lg:flex-row flex-col w-full justify-between">
            <h3 className="text-[#1D2433] text-[18px] flex gap-[10px] items-center leading-[28px] font-semibold">
              <AirplaneInFlightIcon /> Flights{' '}
            </h3>
            <button className="border-none bg-[#FFFFFF] rounded-[4px] text-[14px] text-center w-fit text-[#0D6EFD] px-4 py-2 font-normal flex items-center justify-center gap-3">
              Add Flights{' '}
            </button>
          </div>{' '}
          <div className="flex flex-col gap-[24px]">
            <div className=" flex rounded-[4px] overflow-hidden bg-[#FFFFFF]">
              <div className="w-full ">
                <div className="border-b flex justify-between border-b-[#E4E7EC] p-4">
                  <div></div>
                  <div>
                    <p className="text-[#647995] leading-[26px] text-[14px]">
                      Facilities:
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="border-b border-b-[#E4E7EC] p-4">f</div>
                <div className=" p-4">f</div>
              </div>
              <div className="bg-[#FBEAE9] flex justify-center items-center px-5">
                <XIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightsSection;
