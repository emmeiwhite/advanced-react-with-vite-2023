import { useState } from "react";

export default function useToggle(defaultValue) {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return { show, toggle };
}
