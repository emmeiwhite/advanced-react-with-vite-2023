import { useState } from "react";

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

  const updateDateCount = () => {
    setCount((prevState) => {
      return prevState + 1;
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
    </div>
  );
};

export default ErrorExample;
