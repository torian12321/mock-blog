import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData]: [any, any] = useState(null);
  const [errors, setErrors]: [any, any] = useState(null);
  const [isFetching, setIsFetching]: [boolean, any] = useState(false);

  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUrl = async () => {
    setIsFetching(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setErrors(null);
    } catch (err) {
      setData(null);
      setErrors(err);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    data,
    isFetching,
    errors,
    reload: fetchUrl,
  };
};

export { useFetch };