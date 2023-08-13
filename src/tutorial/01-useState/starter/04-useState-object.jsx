import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: 1,
    name: "Immu",
    age: 31,
    hobby: "Reading Books",
  });

  const handleClick = () => {
    setPerson({
      id: 2,
      name: "Tim David",
      age: 32,
      hobby: "Cricket",
    });
  };
  return (
    <div>
      <h4>Name: {person.name}</h4>
      <h4>Age: {person.age}</h4>
      <h4>Hobby: {person.hobby}</h4>

      <button
        onClick={handleClick}
        className="btn"
      >
        Update Person
      </button>
    </div>
  );
};

export default UseStateObject;
