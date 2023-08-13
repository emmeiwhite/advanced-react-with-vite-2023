import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  return (
    <div className="container">
      <h4> You clicked {count} times</h4>
      <button
        className="btn"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
