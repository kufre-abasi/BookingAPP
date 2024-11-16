import { useEffect, useState } from 'react';
import NavbarSidebarItem from './NavbarSidebarItem';
import { Page } from '../../types'; 
import Link from 'next/link';
import HomeIcon from '../ui/Icons/HomeIcon';
import Profilecircle from '../ui/Icons/Profilecircle';
import { useNavBarStore } from '../../Store/navbarState';
import AirplaneTiltIcon from '../ui/Icons/AirplaneTilt';
import BuildingsIcon from '../ui/Icons/Buildings';
import RoadHorizonIcon from '../ui/Icons/RoadHorizon';
import StudentIcon from '../ui/Icons/Student';
import NewspaperClippingIcon from '../ui/Icons/NewspaperClipping';
import SuitcaseRollingIcon from '../ui/Icons/SuitcaseRolling';
import FirstAidKitIcon from '../ui/Icons/FirstAidKit';
import PackageIcon from '../ui/Icons/Package';
import CaretUpDownIcon from '../ui/Icons/CaretUpDown';
const Sidebar = () => {
  
  const { showNavBar, toggleNavBar } = useNavBarStore();

  
  const services: Page[] = [
    {
      name: 'Activities',
      linkName: '',
      icon: RoadHorizonIcon,
      subLinks: []
    },
    {
      name: 'Hotels',
      linkName: '',
      icon: BuildingsIcon,
      subLinks: []
    },
    {
      name: 'Flights',
      linkName: '',
      icon: AirplaneTiltIcon,
      subLinks: []
    },
    {
      name: 'Study',
      linkName: '',
      icon: StudentIcon,
      subLinks: []
    },
    {
      name: 'Visa',
      linkName: '',
      icon: NewspaperClippingIcon,
      subLinks: []
    },
    {
      name: 'Immigration',
      linkName: '',
      icon: SuitcaseRollingIcon,
      subLinks: []
    },
    {
      name: 'Medical',
      linkName: '',
      icon: FirstAidKitIcon,
      subLinks: []
    },
    {
      name: 'Vacation Packages',
      linkName: '',
      icon: PackageIcon,
      subLinks: []
    }
  ];

  
  useEffect(() => {
    if (showNavBar) {
      toggleNavBar();
    }
  }, []);

  

  return (
    <>
      <div
        className={`w-[300px] h-[80vh] fixed overflow-y-auto hide-scrollbar  border-r-[#3A343414] border-r z-50 transition-transform ease-in-out duration-500 lg:translate-x-0 lg:relative shrink-0 bg-white rounded-[4px]  ${
          showNavBar ? 'translate-x-0 ' : '-translate-x-[100%]'
        }`}
      >
        <div className="flex flex-col justify-between h-full ">
          <div>
            <div className="flex flex-col px-5 gap-4 mt-4">
              <NavbarSidebarItem title="" routes={services} />
            </div>
          </div>
          <div className="!px-5  ">
            <div className="!px-[0.5rem] my-20 ">
              <div className=" flex flex-row items-center justify-between rounded-[4px] p-4 bg-[#F0F2F5] ">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-[#0D6EFD] flex rounded-[4px] h-[50px] w-[50px] items-center text-[#FFFFFF] text-[16px] font-medium text-center justify-center">
                    Go
                  </div>
                  <p className="text-[#201950] text-[14px] font-normal leading-[20.3px]">
                    Personal Account
                  </p>
                </div>
                <button className="flex gap-2 text-xs px-3 py-2 rounded-full bg-[#F0F2F5] text-white">
                  <CaretUpDownIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay and close button for mobile */}
      {showNavBar && (
        <div className="bg-black/55  z-10 lg:hidden fixed h-screen w-full p-4">
          <div className="flex text-gray-50 justify-end">
            <button onClick={toggleNavBar} className="bg-brand rounded-[7px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10  w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
