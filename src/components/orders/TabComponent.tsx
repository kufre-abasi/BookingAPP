import { useState } from 'react';
import GraySearchIcon from '../ui/Icons/GraySearhIcon';
import SellersList from '../sellers/SellersList';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('All'); // Default tab

  const tabs = ['All', 'Completed', 'Pending', 'Canceled', 'Return/Refund'];

  return (
    <div className="w-full py-4">
      <div className='flex '>
      <div className="flex justify-start space-x-4 text-[16px] font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-[#1A1A4B] text-black'
                : ' text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex gap-3 items-center bg-[#F2F2FF] w-full lg:w-[400px] py-2 px-5 rounded-[20px]">
            <GraySearchIcon/>
            <p className="text-[12px] ">Search list</p>
          </div>
      </div>

      <div className="mt-4">
        
        {activeTab === 'All' && <div><SellersList/></div>}
        {activeTab === 'Completed' && <div>Completed items will be displayed here.</div>}
        {activeTab === 'Pending' && <div>Pending items will be displayed here.</div>}
        {activeTab === 'Canceled' && <div>Canceled items will be displayed here.</div>}
      </div>
      
        
    </div>
  );
};

export default Tabs;
