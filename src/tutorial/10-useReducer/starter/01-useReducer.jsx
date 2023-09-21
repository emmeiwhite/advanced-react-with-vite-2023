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

  return state;
};

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    let newPeople = state.people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleReset = () => {
    dispatch({ type: "CLEAR_LIST" });
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

      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={handleReset}
      >
        clear items
      </button>
    </div>
  );
};

export default ReducerBasics;
