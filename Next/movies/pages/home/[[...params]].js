import { useRouter } from 'next/router';
import React from 'react';

const Params = () => {
    const router=useRouter();
    const {params=[]} = router.query
    if (params.length==1) return <div>hi {params[0]}</div>
    else if (params.length==2) return <div>hi {params[0]} , {params[1]}</div>
    else if (params.length==3) return <div>hi {params[0]} , {params[1]}, {params[2]}</div>
    else return (
        <div>
            enough
        </div>
    )
}

export default Params;
