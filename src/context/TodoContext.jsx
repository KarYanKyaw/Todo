import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import { getTodoData } from "../service/todo.service";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const prop = { todo, setTodo };
  return <TodoContext.Provider value={prop}>{children}</TodoContext.Provider>;
};
