import { useState } from "react";
import { useEffect } from "react";

function TestComponent() {
  /**  --- This is example one 
  useEffect(() => {
    // DOM event running in the background once it is set and as soon as it is triggered
    const myInterval = setInterval(() => {
      console.log("This is the test Component");
    }, 1000);

    // This is where we need a cleanup function because this is a memory leak

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  --*/

  useEffect(() => {
    const someFunc = () => {
      // Some Logic
    };

    window.addEventListener("scroll", someFunc);

    // this is a cleanup function. Everytime the Component is unMounted, we want to remove the event-handler
    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  });

  return <h1>Cleanup test</h1>;
}

const CleanupFunction = () => {
  const [isMounted, setIsMounted] = useState(true);

  const handleToggle = () => {
    setIsMounted((prevMountState) => !prevMountState);
  };

  return (
    <section>
      {isMounted && <TestComponent />}
      <button
        className="btn"
        onClick={handleToggle}
      >
        Toggle
      </button>
    </section>
  );
};

export default CleanupFunction;
