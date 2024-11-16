import React from "react";
import StarIcon from "../ui/Icons/StarIcon";
import OutlinedStarIcon from "../ui/Icons/OutlinedStarIcon";

interface ReviewStarProps {
  rating: number;
}

const ReviewStar: React.FC<ReviewStarProps> = ({ rating }) => {
  const totalStars = 5;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} />); 
      } else {
        stars.push(<OutlinedStarIcon key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        {renderStars()}
      </div>
    </div>
  );
};

export default ReviewStar;
