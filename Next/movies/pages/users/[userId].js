import { useRouter } from 'next/router';
import React from 'react';

const UserId = ({user}) => {
    const router=useRouter()
//     if(router.isFallback)
//      return <div>Loading.....</div>
// else    
const handleClick=()=>{
router.push("/users")
}
 return (
        <div>
            {user.name},
            {user.body}
            <button onClick={handleClick} className='btn btn-success'> go to users</button>
        </div>
    );
}

export default UserId;
export async function getStaticProps(context){
    const {userId}=context.params 
    console.log(context.params)
   const res=await fetch (`http://localhost:8000/users/${userId}`)
    const data = await res.json();
    return {
        props:{user:data},
        revalidate:10
    }
}
export async function getStaticPaths(){
    return {
        paths:[
            {params:{userId:"1"}},
            {params:{userId:"2"}},
            {params:{userId:"3"}}

        ],
        fallback:"blocking"
    }
}