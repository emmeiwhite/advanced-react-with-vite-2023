import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  // Controlled Inputs with useRef, though we can use any html element
  const refContainer = useRef(null);

  console.log(refContainer);

  // Avoid initial render of useEffect

  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(refContainer.current.value);
  }

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
        >
          submit
        </button>
      </form>

      <h1>value : {value}</h1>
      <button
        onClick={() => setValue(value + 1)}
        className="btn"
      >
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
