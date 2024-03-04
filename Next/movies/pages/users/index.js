import Link from "next/link";
import React from "react";

const index = ({ users }) => {
  console.log(users);
  return (
    <div className="container w-50">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>
              <Link href={`users/${u.id}`}>More</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default index;
export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  return { props: { users: data } };
}
