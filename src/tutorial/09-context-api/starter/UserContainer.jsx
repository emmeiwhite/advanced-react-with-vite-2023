import React, { useContext } from "react";
import { useAppContext } from "./Navbar";

export default function UserContainer() {
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button
            className="btn"
            onClick={logout}
          >
            logout
          </button>
        </>
      ) : (
        <p> please login </p>
      )}
    </div>
  );
}
