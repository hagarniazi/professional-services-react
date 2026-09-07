import { useState, useEffect } from 'react';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function useFetchMock(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        await wait(300);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const jsonData = await response.json();

        if (isMounted) {
          setData(jsonData);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An unknown error occurred');
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
