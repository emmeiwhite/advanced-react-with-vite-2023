import { people } from "./../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [persons, setPersons] = useState(people);

  // handlers is where we update state for re-renders not in the return
  function clearAll() {
    setPersons([]);
  }

  function reset() {
    setPersons(people);
  }

  // delete currentItem
  function handleDelete(id) {
    setPersons((person) => {
      return persons.filter((person) => person.id !== id);
    });
  }

  return (
    <>
      <Persons
        persons={persons}
        deleteCurrent={handleDelete}
      />

      <p></p>

      <button
        className="btn"
        onClick={persons.length > 0 ? clearAll : reset}
      >
        {persons.length > 0 ? "Clear All" : "Reset"}
      </button>
    </>
  );
};

function Persons({ persons, deleteCurrent }) {
  return (
    <div className="people-wrapper">
      {persons.map((person) => (
        <Person
          person={person}
          key={person.id}
          deleteCurrent={deleteCurrent}
        />
      ))}
    </div>
  );
}
// Person Component
function Person({ person, deleteCurrent }) {
  return (
    <div className="person">
      <h2>Name: {person.name}</h2>
      <p>{person?.nickName && `Nick name: ${person.nickName}`}</p>
      <button
        className="btn"
        onClick={() => deleteCurrent(person.id)}
      >
        Delete
      </button>
    </div>
  );
}
export default UseStateArray;
