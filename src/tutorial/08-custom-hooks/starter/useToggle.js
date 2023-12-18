import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow((prev) => !prev);
  };

  return { show, toggle };
};
export default useToggle;
