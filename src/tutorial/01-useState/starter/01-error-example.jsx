import { useState } from "react";
import { data } from "../../../data";

const ErrorExample = () => {
  // Question is: Why useState() the first place

  /*
  let count = 0;
  const updateDateCount = () => {
    count += 1;
    console.log(count);
  };
  */

  // We need a useState hook to trigger a re-render and to preserve the state during these re-renders

  const [count, setCount] = useState(0);
  const [persons, setPersons] = useState(data);

  const updateDateCount = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  // ClearAll
  const clearAll = () => {
    setPersons([]);
  };

  const handleDelete = (id) => {
    setPersons((prevPersons) => {
      const updatedPersons = prevPersons.filter((person) => person.id !== id);
      return updatedPersons;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={updateDateCount}
      >
        Update Count
      </button>

      {persons.map((person) => {
        return (
          <div
            className="person"
            key={person.id}
          >
            <p>{person.name}</p>
            <button
              className="btn"
              onClick={() => handleDelete(person.id)}
            >
              Delete
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default ErrorExample;
