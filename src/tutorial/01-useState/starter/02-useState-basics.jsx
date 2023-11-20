import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(10);

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleScore = () => {
    setScore((prevScore) => prevScore + 4);
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
      <p></p>
      <br />

      <hr />
      <h4>Score is {score}</h4>
      <button
        className="btn"
        onClick={handleScore}
      >
        increase score by 4
      </button>
    </div>
  );
};

export default UseStateBasics;
