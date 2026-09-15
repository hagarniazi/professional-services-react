import { useEffect, useState } from "react";

function useFetchMock(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          return response.json();
        })
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch((fetchError) => {
          setError(fetchError.message);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [url]);

  return { data, loading, error };
}

export default useFetchMock;