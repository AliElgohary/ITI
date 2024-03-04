import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
    const router=useRouter()
    const handleClick=()=>{
router.push("/movies")
    }
    return (
        <div>
            
            <button className='btn btn-info' onClick={handleClick}> go to products</button>
        </div>
    );
}

export default Index;
