import { useEffect, useState, useRef } from "react";

const UseRefBasics = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const refContainer = useRef(null);

  // useEffect(() => {
  //   count.current = count.current + 1;
  //   console.log(refContainer);
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = refContainer.current.value;
    setInputValue("test");
    console.log(inputValue);
  };

  const styles = {
    padding: "2rem",
    backgroundColor: "whitesmoke",
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      {/* useRef for uncontrolled input */}

      <form
        onSubmit={handleSubmit}
        style={styles}
      >
        <div>
          <input
            type="text"
            ref={refContainer}
          />
        </div>

        <button
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </form>

      <h2>{refContainer.current?.value}</h2>
    </>
  );
};

export default UseRefBasics;
