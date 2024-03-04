import React from 'react';

const Index = ({news}) => {
    return (
        <div>
            {news.map(n=><div key={n.id}> {n.title}</div>)}
        </div>
    );
}

export default Index;
export async function getServerSideProps(){
    const res= await fetch("http://localhost:8000/news")
    const data= await res.json()
    return {props:{news:data}}
}