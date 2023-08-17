import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    /*
    setCount(count + 1);
    console.log(count); // setCount is Asynchronous in nature
    */
    /*
    setCount((prevCount) => {
      const newState = prevCount + 1;
      console.log(newState);
      return newState;
    });
    */
    // Let suppose we want to update the state in some time

    setTimeout(() => {
      // setCount(count + 1);
      setCount((currentCount) => {
        return currentCount + 1;
        // Now the number of times, we click on the button, the count value will be added accordingly
      });
    }, 3000);
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
