import { useState } from "react";

const UseStateObject = () => {
  const [userName, setUserName] = useState("emmeiwhite");
  const [age, setAge] = useState(20);
  const [hobby, setHobby] = useState("reverse sawal");

  const handleStateValues = () => {
    setAge(32);
    setUserName("Roufi");
    setHobby("Time pass");
  };
  return (
    <div>
      <p>{userName}</p>
      <p>{age}</p>
      <p>{hobby}</p>

      <button
        className="btn"
        onClick={handleStateValues}
      >
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
