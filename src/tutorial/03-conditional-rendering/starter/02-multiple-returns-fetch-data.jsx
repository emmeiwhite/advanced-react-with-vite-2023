import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const res = await response.json();

        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          throw new Error("404 Error!");
        }
        setIsLoading(false);
        setPerson(res);
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>Error ...</h1>;
  }

  return (
    <article>
      <img
        src={person.avatar_url}
        alt={person.name}
      />
      <h2>{person.name}</h2>
    </article>
  );
};
export default MultipleReturnsFetchData;
