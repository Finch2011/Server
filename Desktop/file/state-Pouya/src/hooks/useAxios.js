import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (Axios, setData) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Axios);
        return setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });
};
export { useAxios };
