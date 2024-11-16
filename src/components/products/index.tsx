import React from 'react';
import ProductCard from './ProductCard';
import SearchIcon from '../ui/Icons/SearchIcon';
import FilterIcon from '../ui/Icons/FilterIcon';
import Dropdown from '../ui/Icons/Dropdown';
import GraySearchIcon from '../ui/Icons/GraySearhIcon';

const productData = [
  {
    id: 678,
    name: 'NFT',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  },
  {
    id: 679,
    name: 'Sneakers',
    image: '/asset/profilePicture.png'
  }
];

const Products = () => {
  const handleDelete = (id: number) => {
    console.log(`Deleted product with ID: ${id}`);
  };

  return (
    <div className="font-Poppins">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[20px] text-[#64748B] ">All Products</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3 items-center bg-[#F2F2FF] w-full lg:w-[400px] py-2 px-5 rounded-[20px]">
            <GraySearchIcon />
            <p className="text-[12px] ">Search list</p>
          </div>
          <div>
            <FilterIcon />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            id={product.id}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
