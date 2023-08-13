import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    /*
    setCount(count + 1);
    console.log(count); // setCount is Asynchronous in nature
    */

    setCount((prevCount) => {
      const newState = prevCount + 1;
      console.log(newState);
      return newState;
    });
  };
  return (
    <div>
      <h2>{count}</h2>
      <button
        className="btn"
        onClick={handleCount}
      >
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
