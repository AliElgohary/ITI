import { useRouter } from 'next/router';
import React from 'react';

const ReviewId = () => {
    const  router = useRouter();
   const {review , movieId }=router.query  
    return (
        <div>
            Review of {movieId} is {review}
        </div>
    );
}

export default ReviewId;
