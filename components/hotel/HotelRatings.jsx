
import { getAllRatingsAHotel } from '@/database/queries';
import React from 'react';

const HotelRatings = async ({ id }) => {
  const ratings = await getAllRatingsAHotel(id);
  // console.log("my hotel rating here: ", ratings);

  const getRatingDescription = (avgRating) => {
    // console.log("avgRating", avgRating);

    if (avgRating === 0) {
      return "No Ratings Available";
    }
    if (avgRating > 0 && avgRating <= 2) {
      return "Poor";
    } if (avgRating > 2 && avgRating <= 3) {
      return "Average";
    } if (avgRating > 3 && avgRating <= 4) {
      return "Good";
    } if (avgRating > 4) {
      return "Very Good";
    }
  }

  let avgRating = 0;

  if (ratings.length === 1) {
    avgRating = ratings[0].rating;
  }
  if (ratings.length > 1) {
    avgRating = ratings.reduce((item, currentValue) => {
      return item.rating + currentValue.rating
    }) / ratings.length;
  }


  return (
    <>
      <div className="bg-sky-900 w-[35px] h-[35px] rounded-sm text-white grid   place-items-center font-bold">
        {avgRating}
      </div>
      <span className="font-medium">{getRatingDescription(avgRating)}</span>
    </>
  )
}

export default HotelRatings;