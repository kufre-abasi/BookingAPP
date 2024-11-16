import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  id: string | number;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, id, onDelete }) => {
  return (
    <div className="w-full rounded-[15px] shadow-md p-4 bg-white">
      <img
        src={image}
        alt={name}
        className="w-full  object-cover "
      />
      <div className="">
        <div className='flex justify-between'>
        <h3 className="text-[16px] font-bold">{name}</h3>
        <p className="text-[14px] text-gray-500">ID: {id}</p>
        </div>
        <div>
        <button
          className="mt-4 px-4 py-2 bg-[#201950] w-full text-white rounded-full"
          onClick={onDelete}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
