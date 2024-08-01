import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
