import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router= useRouter();
    const {movieId}=router.query
    console.log(movieId)
    return (
        <div>
            movie ID :  {movieId}
        </div>
    );
}

export default ProductId;
