import React, { useReducer } from "react";
import { data } from "../../../data";

// Default State
const defaultState = {
  people: data,
};

// Reducer
const reducer = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return {
      ...state,
      people: [],
    };
  }

  if (action.type === "RESET_LIST") {
    return {
      ...state,
      people: data,
    };
  }

  if (action.type === "DELETE_ITEM") {
    let newPeople = state.people.filter((person) => person.id !== action.id);
    return {
      ...state,
      people: newPeople,
    };
  }

  return state;
};

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: "DELETE_ITEM", id });
    // let newPeople = state.people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_LIST" });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className="item"
          >
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length > 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={handleReset}
        >
          Reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
