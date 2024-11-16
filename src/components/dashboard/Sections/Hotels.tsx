import React, { useState } from 'react';
import ArrowLeftBoxIcon from '@/components/ui/Icons/ArrowLeftBox';
import WarehouseIcon from '@/components/ui/Icons/Warehouse';
import XIcon from '@/components/ui/Icons/XIcon';
import UsbIcon from '@/components/ui/Icons/UsbIcon';
import ForkKnifeIcon from '@/components/ui/Icons/ForkKnife';
import FilmSlateIcon from '@/components/ui/Icons/FilmSlate';
import SuitcaseRollingsIcon from '@/components/ui/Icons/SuitcaseRollings';
import AirplaneLandingIcon from '@/components/ui/Icons/AirplaneLanding';
import AirplaneTakeoffIcon from '@/components/ui/Icons/AirplaneTakeoff';
import CurrencyNgnIcon from '@/components/ui/Icons/CurrencyNgn';
import CalenderIcon from '@/components/ui/Icons/Calender';
import SwimmingPoolIcon from '@/components/ui/Icons/SwimmingPool';
import WineIcon from '@/components/ui/Icons/Wine';
import HotelsModal from '@/components/ui/modal/HotelsModal';

const HotelsSection = () => {
  const [showModal, setModal] = useState(false);

  const handleToggleModal = () => {
    setModal((showModal) => !showModal);
  };

  return (
    <>
      <div className=" ">
        <div className="flex flex-col gap-[10px] justify-between bg-[#344054] rounded-[4px] p-6 mt-6">
          {' '}
          <div className="flex flex-row w-full justify-between">
            <h3 className="text-[#fff] text-[18px] flex gap-[10px] items-center leading-[28px] font-semibold">
              <WarehouseIcon /> Hotels{' '}
            </h3>
            <button
              onClick={handleToggleModal}
              className="border-none bg-[#FFFFFF] rounded-[4px] text-[14px] text-center w-fit text-[#1D2433] px-4 py-2 font-normal flex items-center justify-center gap-3"
            >
              Add Hotels{' '}
            </button>
          </div>{' '}
          <div className="flex flex-col gap-[24px]">
            <div className=" flex lg:flex-row flex-col rounded-[4px] overflow-hidden bg-[#FFFFFF]">
              <div className=" flex lg:flex-row flex-col rounded-[4px]  overflow-hidden w-full p-4 lg:pr-0 bg-[#FFFFFF]">
                <img
                  src="/asset/hotel.png"
                  className="h-[224px] object-cover w-auto lg:w-[232px]"
                  alt=""
                />
                <div className="w-full ">
                  <div className="border-b flex lg:flex-row flex-col  justify-between  border-b-[#E4E7EC] lg:px-4 px-0 p-4">
                    <div className="flex lg:flex-row flex-col gap-[16px] items-center">
                      <div>
                        <h4 className="text-[#1D2433] text-[16px] font-semibold">
                          American Airlines
                        </h4>
                        <p className="text-[#1D2433] leading-[24px] w-[60%] text-[14px]">
                          18, Kenneth Agbakuru Street, Off Access Bank Admiralty
                          Way, Lekki Phase1{' '}
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex lg:flex-row px-5 flex-col items-center gap-[16px]">
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
                  </div> */}
                    <div className="flex flex-col lg:justify-end lg:items-end lg:text-end">
                      <div className="text-[#1D2433] flex gap-[6px] items-center text-[28px] font-semibold">
                        <CurrencyNgnIcon /> 123,450.00
                      </div>

                      <p className="text-[#1D2433] text-[14px]">
                        Total Price: NGN 560,000
                      </p>
                      <p className="text-[#1D2433] text-[14px]">
                        Total Price: NGN 560,000
                      </p>
                    </div>
                  </div>
                  <div className="border-b flex lg:flex-row flex-col lg:px-4 px-0 justify-between lg:items-center border-b-[#E4E7EC] p-4">
                    <div className="flex flex-row  gap-[8px]">
                      <p className="text-[#647995] leading-[26px] text-[14px]">
                        Facilities:
                      </p>
                      <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                        <SwimmingPoolIcon /> Pool
                      </p>
                      <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                        <WineIcon /> Bar
                      </p>
                    </div>

                    <div className="flex lg:flex-row flex-col gap-[8px]">
                      <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                        <CalenderIcon /> Check In: 20-04-2024
                      </p>
                      <p className="text-[#647995] flex gap-[6px] items-center leading-[26px] text-[14px]">
                        <CalenderIcon /> Check Out: 29-04-2024
                      </p>
                    </div>
                  </div>
                  <div className=" lg:p-4 flex lg:flex-row flex-col justify-between">
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
              </div>
              <div className="bg-[#FBEAE9] flex  justify-center items-center px-2 lg:px-5">
                <XIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <HotelsModal handleToggle={handleToggleModal} />}
    </>
  );
};

export default HotelsSection;
