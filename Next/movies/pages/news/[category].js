import React from "react";

const Category = ({ news }) => {
  return (
    <div>
      {news.map((n) => (
        <div key={n.id}>
          <h1>{n.title}</h1>
          <h1>{n.category}</h1>
        </div>
      ))}
    </div>
  );
};

export default Category;
export async function getServerSideProps(context) {
  const { category } = context.params;
  const res = await fetch(`http://localhost:8000/news?category=${category}`);
  const data = await res.json();
  return { props: { news: data } };
}
