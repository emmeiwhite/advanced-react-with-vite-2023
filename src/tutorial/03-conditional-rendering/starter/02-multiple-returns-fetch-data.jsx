import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  /** In this challenge, I want to get the github user from an API */
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      const user = await response.json();
      console.log(user);

      setIsLoading(false);
      setPerson(user);
    } catch (e) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  /** Order matters here:
   * First comes loading, then error and only then the normal JSX return from the component
   */

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>There was an error ...</h1>;
  }

  return <article>I am a Component returning some JSX</article>;
};
export default MultipleReturnsFetchData;
