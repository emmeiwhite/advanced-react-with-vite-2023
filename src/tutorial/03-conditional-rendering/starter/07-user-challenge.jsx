import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  function login() {
    // normally connect to db or api
    console.log("Login invoked!");
    setUser({
      name: "Correct User",
    });
  }

  function logout() {
    console.log("logout invoked!");
    setUser(null);
  }

  return (
    <section>
      {user ? (
        <div>
          <h2>Hello dear User</h2>
          <button
            className="btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>You need to login to proceed</h2>
          <button
            className="btn"
            onClick={login}
          >
            Login
          </button>
        </div>
      )}
    </section>
  );
};

export default UserChallenge;
