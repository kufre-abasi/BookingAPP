import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NotificationIcon from '../ui/Icons/NotificationIcon';
import Dropdown from '../ui/Icons/Dropdown';
import { useNavBarStore } from '../../Store/navbarState';
import Link from 'next/link';
import Input from '../ui/Input';
import SearchIcon from '../ui/Icons/SearchIcon';
import WalletLink from './WalletLink';
import HouseIcon from '/public/House.svg';
import Wallet from '/public/navIcons/Wallet.svg';
import Bell from '/public/navIcons/Bell.svg';
import Basket from '/public/navIcons/Basket.svg';
import PlusSquare from '/public/navIcons/PlusSquare.svg';
import ListChecks from '/public/navIcons/ListChecks.svg';
import HandCoins from '/public/navIcons/HandCoins.svg';
import ChartPieSlice from '/public/navIcons/ChartPieSlice.svg';
import Image from 'next/image';
import CaretDownIcon from '../ui/Icons/CaretDown';
const Header = () => {
  const router = useRouter();
  const { showNavBar, toggleNavBar } = useNavBarStore();

  // State management
  const [loading, setLoading] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [now, setNow] = useState(new Date());
  const wallet = { formatted_balance: '0.00' }; // Replace with actual wallet state
  const getUser = {
    profile: {
      first_name: 'John',
      last_name: 'Doe',
      image: '' // Replace with the actual user profile image
    }
  };

  // Simulate a store for wallet and auth (replace with actual logic)
  const useAuthStore = {
    logoutUser: async () => {
      // Simulate an API call for logging out
      console.log('User logged out');
    }
  };

  // On component mount
  useEffect(() => {
    // Simulate getting wallet info on mount
    console.log('Getting wallet information...');
  }, []);

  // Handle logout
  //   const logout = async () => {
  //     setLoading(true);
  //     try {
  //       await useAuthStore.logoutUser();
  //       router.push('/auth-login');
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // Toggle logout modal
  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <header className="bg-white  border-b border-b-[#23232133] font-Poppins">
      <div className="flex justify-between container items-center py-5 px-6">
        <div className="lg:hidden w-full flex gap-2">
          <button onClick={toggleNavBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="size-6 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex items-center w-full justify-between ">
            <Link href={'/'}>
              <div className="flex flex-row justify-left  items-center">
                <img className="w-[70%]" src="/GOlogo.svg" alt="logo" />
              </div>
            </Link>
            <button className=" flex items-center gap-[10px]">
              <Image
                src={'/navIcons/avater.png'}
                className="w-[40px] rounded-full h-[40px] object-cover"
                width="40"
                height="40"
                alt="avater"
              />
              <CaretDownIcon />
            </button>{' '}
          </div>{' '}
        </div>

        <div className="hidden lg:flex gap-2">
          <div className=" flex gap-[28px] items-center">
            <Link href={'/'}>
              <div className="flex flex-row justify-left  items-center">
                <img className="w-[100%]" src="/GOlogo.svg" alt="logo" />
              </div>
            </Link>
            <div className="relative">
              <SearchIcon className="absolute top-3 left-3" />
              <Input
                placeholder="Search"
                className=" !w-[345px] !bg-[#F0F2F5] rounded-[4px] !pl-10 !border-0"
              ></Input>
            </div>
          </div>{' '}
        </div>

        <div className="hidden lg:flex items-center gap-[20px]">
          <div className=" flex  gap-[20px]">
            {links.slice(0, 5).map((link, index) => (
              <div className=" flex  ">
                <WalletLink
                  name={link.name}
                  icon={link.icon}
                  routeName={link.routeName}
                  key={index}
                />
              </div>
            ))}
          </div>{' '}
          <hr className="border-[1px] border-[#98A2B3]  h-[8vh]" />
          <button className="border-none bg-brand rounded-[4px] text-white px-4 py-2 font-medium flex items-center gap-3">
            Subscribe{' '}
          </button>
          <div className=" flex  gap-[20px]">
            {links.slice(5, 8).map((link, index) => (
              <div className=" flex ">
                <WalletLink
                  name={link.name}
                  icon={link.icon}
                  routeName={link.routeName}
                  key={index}
                />
              </div>
            ))}
          </div>
          <button className=" flex items-center gap-[10px]">
            <Image
              src={'/navIcons/avater.png'}
              className="lg:w-[52px] rounded-full w-auto lg:h-[52px] object-cover"
              width="52"
              height="52"
              alt="avater"
            />
            <CaretDownIcon />
          </button>{' '}
        </div>
      </div>
    </header>
  );
};

export default Header;
const links = [
  {
    name: 'Home',
    icon: HouseIcon,
    routeName: '/'
  },
  {
    name: 'Dashboard',
    icon: ChartPieSlice,
    routeName: '/'
  },
  {
    name: 'Wallet',
    icon: Wallet,
    routeName: '/'
  },
  {
    name: 'Plan a trip',
    icon: ListChecks,
    routeName: '/'
  },
  {
    name: 'Commission for life',
    icon: HandCoins,
    routeName: '/'
  },
  {
    name: 'Notification',
    icon: Bell,
    routeName: '/'
  },
  {
    name: 'Carts',
    icon: Basket,
    routeName: '/'
  },
  {
    name: 'Create',
    icon: PlusSquare,
    routeName: '/'
  }
];