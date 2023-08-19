import { useState } from "react";

const TestComponent = () => {
  return (
    <section>
      <h1>I am a test component!</h1>
    </section>
  );
};

const ToggleChallenge = () => {
  const [isMounted, setIsMounted] = useState(true);

  const handleToggle = () => {
    setIsMounted((prevMount) => !prevMount);
  };

  return (
    <section>
      <button
        onClick={handleToggle}
        className="btn"
      >
        Toggle Component
      </button>

      {isMounted && <TestComponent />}
    </section>
  );
};

export default ToggleChallenge;
