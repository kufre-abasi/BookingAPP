import React from 'react';
import ArrowLeftBoxIcon from '@/components/ui/Icons/ArrowLeftBox';
const BannerSection = () => {

  return (
    <>
      <div
        className="!object-cover bg-cover lg:p-4 p-2 h-[200px]"
        style={{ backgroundImage: 'url(/asset/Banner.png)' }}
      >
        {/* <img
          src="/asset/Banner.png"
          className="w-full object-cover"
          alt="Banner"
        /> */}
        <ArrowLeftBoxIcon />
      </div>
    </>
  );
};

export default BannerSection;
