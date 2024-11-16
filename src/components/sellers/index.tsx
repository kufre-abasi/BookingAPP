import GraySearchIcon from '../ui/Icons/GraySearhIcon';
import SellersList from './SellersList';
import { useRouter } from 'next/router';

const SellersSection = () => {
  const router = useRouter();

  const goToAddSellerPage = () => {
    router.push('/addsellers');
  };
  return (
    <div className="w-full lg:w-[80%] font-Poppins">
      <div className="bg-white p-5 flex gap-5 items-center">
        <button
          className="bg-[#F2F2FF] w-[64px] h-[64px] rounded-[8px] flex items-center justify-center font-bold text-[16px] "
          onClick={goToAddSellerPage}
        >
          +
        </button>
        <p>Add Seller</p>
      </div>

      <div className="flex w-full justify-between items-center mt-6">
        <div className="w-1/2">
          <p className="text-[20px] text-[#64748B] ">List of Sellers</p>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="flex gap-3 items-center bg-[#F2F2FF] w-full py-2 px-5 rounded-[20px]">
            <GraySearchIcon />
            <p className="text-[12px] ">Search list</p>
          </div>
        </div>
      </div>

      <div>
        <SellersList />
      </div>
    </div>
  );
};

export default SellersSection;
