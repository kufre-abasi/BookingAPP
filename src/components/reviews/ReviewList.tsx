import React from "react";
import ReviewItems from "./ReviewItem";

const reviews = [
  {
    id: 1,
    user: "Tha man",
    rating: 5,
    date: "08/2022",
    comment: "I loved the product. It just got to me late.",
  },
  {
    id: 2,
    user: "Another User",
    rating: 4,
    date: "08/2022",
    comment: "Great quality but delivery took longer than expected.",
  },
  {
    id: 3,
    user: "Another User",
    rating: 4,
    date: "08/2022",
    comment: "Great quality but delivery took longer than expected.",
  },
  {
    id: 4,
    user: "Another User",
    rating: 4,
    date: "08/2022",
    comment: "Great quality but delivery took longer than expected.",
  },
  {
    id: 5,
    user: "Tha Man",
    rating: 4,
    date: "08/2022",
    comment: "Great quality but delivery took longer than expected.",
  },
];

const ReviewList: React.FC = () => {
  return (
    <div className="bg-white rounded-[20px]">
      {reviews.map((review) => (
        <ReviewItems key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
