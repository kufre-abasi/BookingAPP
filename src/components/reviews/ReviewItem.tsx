import React from "react";
import ReviewImgIcon from "../ui/Icons/ReviewimgIcon";
import ReviewStar from "./ReviewStar";
import DeleteIcon from "../ui/Icons/DeleteIcon";

interface ReviewItemsProps {
  review: {
    user: string;
    date: string;
    rating: number;
    comment: string;
  };
}

const ReviewItems: React.FC<ReviewItemsProps> = ({ review }) => {
  const { user, date, rating, comment } = review; 

  return (
    <div className="flex flex-col gap-3 items-start justify-between p-4 border-b mx-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center">
          <ReviewImgIcon />
          <div>
            <p className="font-semibold text-[12px]">{user}</p>
            <ReviewStar rating={rating} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <p className="text-[14px]">{date}</p>
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[14px]">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewItems;
