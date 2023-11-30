import { useState, useEffect } from "react";
import axios from "axios";

const fetchRisto = (endpoint, query) => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "0e4e42ccc2mshff19ce5d62fe399p1121d8jsn3c14f2babf43",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data.data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      alert("Error: " + error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default fetchRisto;
