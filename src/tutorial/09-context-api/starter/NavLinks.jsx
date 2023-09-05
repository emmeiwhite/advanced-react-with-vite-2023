import React from "react";
import UserContainer from "./UserContainer";

export default function NavLink() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">about</a>
        </li>
      </ul>

      <UserContainer />
    </div>
  );
}
