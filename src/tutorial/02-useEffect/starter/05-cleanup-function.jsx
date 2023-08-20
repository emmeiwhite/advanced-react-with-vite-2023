import { useState } from "react";
import { useEffect } from "react";
function TestComponent() {
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
