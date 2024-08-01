import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
}

export default useFetch;
