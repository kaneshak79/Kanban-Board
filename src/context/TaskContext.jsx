
// // // // src/context/TaskContext.jsx
import React, { createContext, useState, useEffect } from "react";

// ✅ Named export for context
export const TaskContext = createContext();

// ✅ Named export for provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? { ...t, ...updatedTask } : t))
    );

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

