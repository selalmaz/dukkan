import {useEffect, useState} from 'react';
import axios from 'axios';

const API_KEY = 'https://fakestoreapi.com/products';

function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {loading, data};
}

export default useFetch;
