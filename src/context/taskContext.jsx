import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext({
  tasks: null,
  setTask: () => {},
});

export default function TaskProvider({ children }) {
    const [task, setTask] = useState(null)

    useEffect(()=>{
        async function fetchTasks() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8080/api/v1/categories/");
        if (!res.ok) {
          return;
        }

        const data = await res.json();

        setCategories(data);
        console.log(data)
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories()
    }, [])
  return (
    <TaskContext.Provider value={{ tasks, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}
