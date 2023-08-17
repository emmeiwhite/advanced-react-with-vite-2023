import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // 1. When we use an empty dependency array, useEffect is invoked
  //    only in the initial render
  useEffect(function () {
    console.log("useEffect invoked!!");
  }, []);

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
export default UseEffectBasics;
