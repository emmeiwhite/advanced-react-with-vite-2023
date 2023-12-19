import React, { useReducer, useState } from "react";
import { data } from "../../../data";

const defaultState = {
  users: data,
  isLoading: false,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "REST_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return {
      ...state,
      users: [],
    };
  }

  if (action.type === RESET_LIST) {
    return {
      ...state,
      users: data,
    };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - ACTION TYPE`);
};

function ReducerBasics() {
  // const [users, setUsers] = useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);
  /* --- reducer function: We pass a reducer function & the default state --- */
  // Delete individual | D of CRUD
  const handleRemove = (id) => {
    // setUsers(users.filter((user) => user.id !== id));
  };

  // Remove All
  const handleClearAll = () => {
    // setUsers([]);
    dispatch({ type: CLEAR_LIST });
  };

  // Reset
  const handleReset = () => {
    dispatch({ type: RESET_LIST });
    // setUsers(data);
  };

  const renderUsers = state.users.map((user) => {
    const { id, name } = user;
    return (
      <div key={id}>
        <h2>{name}</h2>
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
      {renderUsers}
      <br />
      {state.users.length > 0 ? (
        <button
          className="btn"
          onClick={() => handleClearAll()}
        >
          Clear All
        </button>
      ) : (
        <button
          className="btn"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default ReducerBasics;
