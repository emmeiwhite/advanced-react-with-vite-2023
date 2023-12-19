import React, { useReducer, useState } from "react";
import { data } from "../../../data";

function ReducerBasics() {
  const [users, setUsers] = useState(data);
  // Delete individual | D of CRUD
  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Remove All
  const handleClearAll = () => {
    setUsers([]);
  };

  // Reset
  const handleReset = () => {
    setUsers(data);
  };

  const renderUsers = users.map((user) => {
    const { id, name } = user;
    return (
      <div>
        <p>{name}</p>
        <button
          className="btn"
          onClick={() => handleRemove(id)}
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <div>
      {users.length === 0 ? (
        <button
          className="btn"
          onClick={handleReset}
        >
          Reset
        </button>
      ) : (
        renderUsers
      )}

      <br />
      {users.length > 0 && (
        <button
          className="btn"
          onClick={() => handleClearAll()}
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default ReducerBasics;
