import React from "react";
import StarIcon from "../ui/Icons/StarIcon";
import OutlinedStarIcon from "../ui/Icons/OutlinedStarIcon";

const StarRating: React.FC = () => {
  const totalStars = 5;
  const currentRating = 4;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= currentRating) {
        stars.push(<StarIcon key={i} />);
      } else {
        stars.push(<OutlinedStarIcon key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-1"> {renderStars()}</div>
      <div>
        <p className="text-[#64748B] text-[8px] font-bold">4.0 out of 5</p>
      </div>
    </div>
  );
};

export default StarRating;
