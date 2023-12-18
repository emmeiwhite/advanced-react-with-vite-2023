import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      setError(true);
      setLoading(false);
      return;
    }

    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, user };
};
export default useFetch;
