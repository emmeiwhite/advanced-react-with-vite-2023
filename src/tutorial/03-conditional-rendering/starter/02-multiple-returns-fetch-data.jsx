import { useEffect, useState } from "react";
const url = "https://api.github.com/users/emmeiwhite";

const MultipleReturnsFetchData = () => {
  /** In this challenge, I want to get the github user from an API */
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);

      // fetch gocha!
      if (!response.ok) {
        setError(true);
        setIsLoading(false);
        return;
        // we simply return in this case and our error state is true which will output the if(error) condition in the browser!
      }
      const user = await response.json();
      console.log(user);
      setPerson(user);
      setIsLoading(false);
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

  const styles = {
    width: "150px",
    borderRadius: "100%",
  };

  return (
    <article>
      <img
        src={person.avatar_url}
        alt={person.login}
        style={styles}
      />
      <h1>{person.name}</h1>
      <h3>Works at {person.company}</h3>
      <p>{person.bio}</p>
    </article>
  );
};
export default MultipleReturnsFetchData;
