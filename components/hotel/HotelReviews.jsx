
import { getReviewsForAHotel } from '@/database/queries';
import React from 'react';

const HotelReviews = async ({id}) => {
    const reviews = await getReviewsForAHotel(id);
    // console.log("Reviews hotel", reviews);
    
    return (
        <>
         {
            reviews?.length === 0 ? (
                <span className=''>Be the first one review</span>
            )
            : (
                <span>{reviews?.length} reviews</span>
            )
         }   
        </>
    );
};

export default HotelReviews;