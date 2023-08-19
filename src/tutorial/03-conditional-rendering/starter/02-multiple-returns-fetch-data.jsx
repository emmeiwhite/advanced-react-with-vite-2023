import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(url);
      const res = await response.json();
      setIsLoading(false);
      setPerson(res);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
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
