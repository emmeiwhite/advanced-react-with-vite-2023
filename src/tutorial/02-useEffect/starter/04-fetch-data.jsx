import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  // For side-effects we use useEffect() hook e.g, making an API call

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });

    return () => {
      // called when component unmounts and also on each state update when the state is provided as the dependency array!
    };
  }, []);

  const renderUsers = users.map((user) => (
    <div
      className="user"
      key={user.id}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
      />
      <p>{user.login}</p>
    </div>
  ));

  return (
    <section>
      <div className="users">{users.length > 0 && renderUsers}</div>
    </section>
  );
};
export default FetchData;
