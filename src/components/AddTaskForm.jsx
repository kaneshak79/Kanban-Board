


import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = ({ column }) => {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("Medium"); // default priority

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: uuidv4(),
      title,
      description,
      status: column, // Status auto-assigned from column
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      priority, // Add priority field
    });

    setTitle("");
    setDescription("");
    setTags("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Task title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task description"
        className="w-full border p-2 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        className="w-full border p-2 rounded"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <label className="block text-sm font-medium">Priority</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        type="submit"
        style={{backgroundColor:"#FCCEE8"}}
        className=" text-red-500 px-4 py-2 rounded outline-none"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
