import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [trains, setTrains] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setTrains(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url]);

  return trains;
}

export default useFetch;
