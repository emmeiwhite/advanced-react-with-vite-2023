import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const deleteItem = (id) => {
    setPeople((prevPeople) => {
      const updatedPeople = prevPeople.filter((person) => person.id !== id);
      return updatedPeople;
    });
  };

  const deleteAll = () => {
    setPeople([]);
  };
  return (
    <>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <h4>{person.name}</h4>
              <button
                onClick={() => deleteItem(person.id)}
                className="btn"
              >
                Delete
              </button>
            </li>
          );
        })}

        <p>--------------------------------------------</p>
        <button
          onClick={deleteAll}
          className="btn"
        >
          Delete All
        </button>
      </ul>
    </>
  );
};

export default UseStateArray;
