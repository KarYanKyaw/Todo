import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const useFetch = (fetchFn, arg) => {
  const { todo, setTodo } = useContext(TodoContext);
  const [data, setData] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setData((pre) => ({ ...pre, loading: true }));
      try {
        const data = await fetchFn(arg);
        setData((pre) => {
          return { loading: false, error: null };
        });
        setTodo(data);
      } catch (error) {
        setData((pre) => {
          return { loading: false, error: error.meesage };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
