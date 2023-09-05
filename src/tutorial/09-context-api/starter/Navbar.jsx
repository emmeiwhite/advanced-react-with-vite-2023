import React, { createContext } from "react";
import NavLinks from "./NavLinks";
import { useState } from "react";

export const NavbarContext = createContext();

export default function Navbar() {
  const [user, setUser] = useState({
    name: "bob",
  });

  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>

        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}
