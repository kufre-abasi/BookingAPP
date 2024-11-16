import React from 'react';
import ArrowLeftBoxIcon from '@/components/ui/Icons/ArrowLeftBox';
import AirplaneInFlightIcon from '@/components/ui/Icons/AirplaneInFlight';
import XIcon from '@/components/ui/Icons/XIcon';
import UsbIcon from '@/components/ui/Icons/UsbIcon';
import ForkKnifeIcon from '@/components/ui/Icons/ForkKnife';
import FilmSlateIcon from '@/components/ui/Icons/FilmSlate';
import SuitcaseRollingsIcon from '@/components/ui/Icons/SuitcaseRollings';
import AirplaneLandingIcon from '@/components/ui/Icons/AirplaneLanding';
import AirplaneTakeoffIcon from '@/components/ui/Icons/AirplaneTakeoff';
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
          <div className="flex flex-row w-full justify-between">
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
                <div className="border-b flex lg:flex-row flex-col px-4 justify-between items-center border-b-[#E4E7EC] p-4">
                  <div className="flex lg:flex-row flex-col gap-[16px] items-center">
                    <img
                      src="/asset/american_airlines_symbol.svg"
                      className="h-[24px] w-[24px]"
                      alt=""
                    />
                    <div>
                      <h4 className="text-[#1D2433] text-[16px] font-semibold">
                        American Airlines
                      </h4>
                      <p className="text-[#676E7E] leading-[26px] text-[14px]">
                        AA-829{' '}
                        <span className="text-[#fff] bg-[#0A369D] text-[12px] py-[4px] px-[8px] rounded-[4px]">
                          First Class{' '}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row px-5 flex-col items-center gap-[16px]">
                    <div className="flex flex-col items-center">
                      <p className="text-[14px] text-[#1D2433] font-medium">
                        08:35
                      </p>{' '}
                      <p className="text-[14px] text-[#676E7E]">Sun, 20 Aug</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center justify-between">
                        <AirplaneLandingIcon />
                        <span className="text-[14px] text-[#676E7E]">
                          Duration: 1h 45m
                        </span>
                        <AirplaneTakeoffIcon />
                      </div>
                      <div className="w-full">
                        {' '}
                        <div className="lg:w-[25vh] w-[90vh] h-[8px] bg-[#E7F0FF] flex items-center justify-center rounded-[8px]">
                          {' '}
                          <div className="lg:w-[5vh] w-[10vh] h-[8px] bg-[#0D6EFD] rounded-[8px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <span className="text-[14px] text-[#1D2433] font-semibold">
                          LOS
                        </span>
                        <span className="text-[14px] text-[#676E7E]">
                          Direct{' '}
                        </span>
                        <span className="text-[14px] text-[#1D2433] font-semibold">
                          SIN{' '}
                        </span>
                      </div>{' '}
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[14px] text-[#1D2433] font-medium">
                        08:35
                      </p>{' '}
                      <p className="text-[14px] text-[#676E7E]">Sun, 20 Aug</p>
                    </div>
                  </div>
                  <div className="text-[#1D2433] text-[28px] font-semibold">
                    N 123,450.00
                  </div>
                </div>
                <div className="border-b border-b-[#E4E7EC] p-4">
                  <div className="flex lg:flex-row flex-col gap-[16px]">
                    <p className="text-[#647995] leading-[26px] text-[14px]">
                      Facilities:
                    </p>
                    <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                      <SuitcaseRollingsIcon /> Baggage: 20kg,Cabin Baggage: 8kg{' '}
                    </p>
                    <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                      <FilmSlateIcon /> In flight entertainment{' '}
                    </p>
                    <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                      <ForkKnifeIcon /> In flight meal{' '}
                    </p>
                    <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                      <UsbIcon /> USB Port{' '}
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className=" p-4 flex lg:flex-row flex-col justify-between">
                  <div className="flex lg:flex-row flex-col lg:gap-[16px]">
                    <button className="text-[#0D6EFD] flex gap-[6px] items-center leading-[26px] text-[15px]">
                      Flight details{' '}
                    </button>
                    <button className="text-[#0D6EFD] flex gap-[6px] items-center leading-[26px] text-[15px]">
                      Price details{' '}
                    </button>
                  </div>
                  <div>
                    {' '}
                    <button className="text-[#0D6EFD] flex gap-[6px] items-center leading-[26px] text-[15px]">
                      Edit details{' '}
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#FBEAE9] flex justify-center items-center px-2 lg:px-5">
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
