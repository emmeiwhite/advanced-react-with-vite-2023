import React from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <div className="users">
        {users &&
          users.map((user) => {
            return (
              <div
                className="user"
                key={user.id}
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                />
                <span>{user.login}</span>
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default FetchData;
