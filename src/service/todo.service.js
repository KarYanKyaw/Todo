import { api } from "./baseURL";

export const getTodoData = async (arg) => {
  try {
    const res = await api.get(arg);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addTodo = async (arg, newTodo) => {
  const data = await api.post(arg, JSON.stringify(newTodo));
  return data;
};
