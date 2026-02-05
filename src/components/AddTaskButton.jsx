import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTaskButton = ({ column }) => {
  const { addTask } = useContext(TaskContext);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({
      id: uuidv4(),
      title,
      description,
      status: column
    });
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="mt-2">
      {showForm ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-white p-2 rounded shadow">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-1 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-1 rounded"
          />
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
              Add
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full text-center py-1 rounded bg-green-500 text-white hover:bg-green-600"
        >
          + Add Task
        </button>
      )}
    </div>
  );
};

export default AddTaskButton;
