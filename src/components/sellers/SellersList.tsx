import React, { useState } from 'react';
import DeleteIcon from '../ui/Icons/DeleteIcon';
import Dropdown from '../ui/Icons/Dropdown';
import FilterIcon from '../ui/Icons/FilterIcon';
import SellersTable from './SellersTable';

const consumers = [
  {
    id: 235,
    name: 'Mior Zaki',
    product: 'NFT',
    quantity: '8',
    total: '$599',
    date: '08/20/22'
  },
  {
    id: 234,
    name: 'Jess Archer',
    product: 'Digital Art',
    quantity: '5',
    total: '$320',
    date: '08/20/22'
  },
  {
    id: 233,
    name: 'Taylor Otwell',
    product: 'Software',
    quantity: '10',
    total: '$1200',
    date: '08/19/22'
  },
  {
    id: 232,
    name: 'Mior Zaki',
    product: 'Ebook',
    quantity: '4',
    total: '$80',
    date: '08/18/22'
  },
  {
    id: 231,
    name: 'Jess Archer',
    product: 'Online Course',
    quantity: '2',
    total: '$500',
    date: '08/17/22'
  },
  {
    id: 230,
    name: 'David Zaki',
    product: 'Music',
    quantity: '12',
    total: '$360',
    date: '08/16/22'
  },
  {
    id: 229,
    name: 'Mior Zaki',
    product: 'Photography',
    quantity: '6',
    total: '$540',
    date: '08/15/22'
  },
  {
    id: 228,
    name: 'Jess Archer',
    product: 'Web Design',
    quantity: '3',
    total: '$900',
    date: '08/14/22'
  },
  {
    id: 227,
    name: 'David Zaki',
    product: 'App Design',
    quantity: '1',
    total: '$150',
    date: '08/13/22'
  }
];

const SellersList = () => {
  const headers = [
    'ID',
    'SELLER',
    'PRODUCT',
    'QUANTITY',
    'TOTAL',
    'DATE (Registration)'
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < consumers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentData = consumers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const renderActions = (consumer: any) => (
    <button className="text-red-500">
      <DeleteIcon />
    </button>
  );

  return (
    <div className="bg-white rounded-[8px] shadow-md max-w-full lg:w-full mt-10 font-Poppins">
      <div className="flex justify-between items-center">
        <div className="flex px-4 items-center py-6 gap-4">
          <input type="checkbox" className="form-checkbox" />
          <div onClick={handleNextPage}>
            <Dropdown />
          </div>
        </div>
        <div className="flex px-4 items-center py-4 gap-4">
          <FilterIcon />
          <Dropdown />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <SellersTable
          headers={headers}
          data={currentData}
          renderActions={renderActions}
        />
      </div>

      <div className="flex justify-between p-5 text-[12px] font-bold text-[#CBD5E1]">
        <p
          className={`cursor-pointer ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePreviousPage}
        >
          Previous
        </p>

        <p>
          {currentPage * itemsPerPage + 1}-
          {Math.min((currentPage + 1) * itemsPerPage, consumers.length)} of{' '}
          {consumers.length}
        </p>

        <p
          className={`cursor-pointer ${
            (currentPage + 1) * itemsPerPage >= consumers.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          onClick={handleNextPage}
        >
          Next
        </p>
      </div>
    </div>
  );
};

export default SellersList;
