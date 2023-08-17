import { useState, useEffect } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  // 1. By Default runs on each render
  useEffect(function () {
    console.log("useEffect invoked!!");
  });

  return (
    <div>
      <h1>value : {value}</h1>
      <button
        className="btn"
        onClick={() => setValue(value + 1)}
      >
        click me
      </button>
    </div>
  );
};
export default CodeExample;
