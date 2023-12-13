import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  /** In this challenge, I want to get the github user from an API */
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);

  const fetchUser = async () => {
    const response = await fetch(url);
    const user = await response.json();
    console.log(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return <article>I am a Component returning some JSX</article>;
};
export default MultipleReturnsFetchData;
