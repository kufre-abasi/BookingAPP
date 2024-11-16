import React from "react";
import StarIcon from "../ui/Icons/StarIcon";
import OutlinedStarIcon from "../ui/Icons/OutlinedStarIcon";
import StarRating from "./StarRating";
import LavendarBox from "./LavendarBox";

const ReviewStats: React.FC<{
  rating: number;
  percentage: number;
  reviewsCount: number;
}> = ({ rating, percentage, reviewsCount }) => {
  return (
    <div className="flex gap-2">
      <span className="w-20 text-[10px] text-[#64748B] font-bold ">
        {rating} star
      </span>
      <div className="relative w-full  rounded-lg">
        <div
          className=" h-1 bg-[#201950] rounded-lg transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-20 text-[8px] font-bold  text-{#64748B}">
        {reviewsCount} %
      </span>
    </div>
  );
};


const ReviewSection: React.FC = () => {
  const totalReviews = 400;
  const ratings = [
    { rating: 5, percentage: 100, reviewsCount: 100 },
    { rating: 4, percentage: 60, reviewsCount: 60 },
    { rating: 3, percentage: 50, reviewsCount: 50 },
    { rating: 2, percentage: 40, reviewsCount: 40 },
    { rating: 1, percentage: 30, reviewsCount: 30 },
  ];

  return (
    <div className="">
      <LavendarBox>
        <StarRating />
      </LavendarBox>
      <p className="font-bold text-center text-[#64748B] text-[12px] pt-3 pb-5">
        Total 500 Reviews
      </p>

      <div className="flex flex-col gap-2">
        {ratings.map(({ rating, percentage, reviewsCount }) => (
          <ReviewStats
            key={rating}
            rating={rating}
            percentage={percentage}
            reviewsCount={reviewsCount}
          />
        ))}
      </div>

      
      <div className="mt-6 text-center">
        <a
          href="#"
          className="inline-block text-[#64748B] text-[12px] hover:underline transition-all duration-200 ease-in-out"
        >
          See comments
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;
