import Login from '@/components/auth/Login';
import React from 'react';
import Layout from '@/components/layouts';
import OrdersBox from '@/components/dashboard/OrdersBox';
import RevenueIcon from '@/components/ui/Icons/RevenueIcon';
import TotalOrdersIcon from '@/components/ui/Icons/TotalOrdersIcon';
import CustomersIcon from '@/components/ui/Icons/CustomersIcon';
import OrdersIcon from '@/components/ui/Icons/OrdersIcon';
import WhiteBox from '@/components/dashboard/WhiteBox';
import Sneakers from '@/components/dashboard/Sneakers';
import SellerChart from '@/components/dashboard/sellerChart';
import TopProduct from '@/components/ui/Icons/TopProduct';
import TopProducts from '@/components/dashboard/Sneakers';
import Gender from '@/components/dashboard/Gender';
import MaleIcon from '@/components/ui/Icons/MaleIcon';
import FemaleIcon from '@/components/ui/Icons/FemaleIcon';
import Unknown from '@/components/ui/Icons/UnknownIcon';
import LavendarBox from '@/components/dashboard/LavendarBox';
import StarIcon from '@/components/ui/Icons/StarIcon';
import StarRating from '@/components/dashboard/StarRating';
import ReviewSection from '@/components/dashboard/ReviewSection';

const Home = () => {
  const salesData = [0, 100, 200, 300, 400];

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex flex-col lg:flex-row gap-5 pr-4 lg:pr-10">
          <OrdersBox
            title="Total Revenue"
            icon={<RevenueIcon />}
            amount="$9193"
          />
          <OrdersBox
            title="Total Orders"
            icon={<TotalOrdersIcon />}
            amount="$9193"
          />
          <OrdersBox
            title="Total Customers"
            icon={<CustomersIcon />}
            amount="200001"
          />
          <OrdersBox
            title="Active Orders"
            icon={<OrdersIcon />}
            amount="$9193"
          />
          <OrdersBox
            title="Return Orders"
            icon={<OrdersIcon />}
            amount="$9193"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row py-6 lg:py-10 gap-5 font-Poppins">
          <div className="w-full lg:w-[70%] flex flex-col gap-5">
            <SellerChart data={salesData} />

            <div className="w-full lg:w-fit">
              <WhiteBox>
                <h2 className="text-[18px] font-bold pb-3">Customer Gender</h2>
                <div className="flex flex-wrap gap-10">
                  <div className="flex flex-col gap-5">
                    <Gender icon={<MaleIcon />} gender="Male" percent="40%" />
                    <Gender
                      icon={<FemaleIcon />}
                      gender="Female"
                      percent="25%"
                    />
                  </div>
                  <div>
                    <Gender icon={<Unknown />} gender="Unknown" percent="35%" />
                  </div>
                </div>
              </WhiteBox>
            </div>
          </div>

          <div className="w-full lg:w-[30%] flex flex-col gap-5">
            <WhiteBox>
              <h2 className="text-[18px] font-bold pb-3">Top Product</h2>
              <div className="flex flex-col gap-3">
                <TopProducts
                  icon={<TopProduct />}
                  price="$499"
                  sales="100 sales"
                  product="Sneakers"
                />
                <TopProducts
                  icon={<TopProduct />}
                  price="$499"
                  sales="100 sales"
                  product="NFT"
                />
                <TopProducts
                  icon={<TopProduct />}
                  price="$499"
                  sales="100 sales"
                  product="Sneakers"
                />
              </div>
            </WhiteBox>

            <WhiteBox>
              <h2 className="text-[18px] font-bold pb-3">Customer Reviews</h2>
              <ReviewSection />
            </WhiteBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
