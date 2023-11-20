import { useState } from "react";

const UseStateObject = () => {
  /* --- 
  const [userName, setUserName] = useState("emmeiwhite");
  const [age, setAge] = useState(20);
  const [hobby, setHobby] = useState("reverse sawal");

  const handleStateValues = () => {
    setAge(32);
    setUserName("Roufi");
    setHobby("Time pass");
  };

  --- */

  const [person, setPerson] = useState({
    userName: "Immu",
    age: 31,
    hobby: "Coding",
  });

  const handlePerson = () => {
    setPerson({
      ...person,
      userName: "Rawdha",
      age: 25,
      hobby: "Designing Clothing",
    });
  };
  return (
    <div>
      <p>{person.userName}</p>
      <p>{person.age}</p>
      <p>{person.hobby}</p>

      <button
        className="btn"
        // onClick={handleStateValues}
        onClick={handlePerson}
      >
        Update Values
      </button>
    </div>
  );
};

export default UseStateObject;
