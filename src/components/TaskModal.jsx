

import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskModal = ({ task, onClose }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority || "Medium");
  const [tags, setTags] = useState(task.tags?.join(", ") || "");

  const handleSave = () => {
    updateTask({
      ...task,
      title,
      description,
      status,
      priority,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
    });
    onClose();
  };

  return (
    
     <div className="fixed inset-0 z-50 flex items-center justify-center">

       {/* 🌌 PREMIUM FULL SCREEN BACKGROUND */}
       <div
         onClick={onClose}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.35),transparent_40%),linear-gradient(to_bottom,rgba(15,23,42,0.6),rgba(2,6,23,0.85))] backdrop-blur-2xl"
       />

      {/* Compact modal */}
      <div className="relative w-[90%] max-w-xl rounded-2xl bg-white shadow-2xl border border-gray-200">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-purple-900">
            Task Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">

          {/* Title */}
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full rounded-lg border px-4 py-2.5 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Status + Priority */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 w-full rounded-lg border px-3 py-2.5"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-1 w-full rounded-lg border px-3 py-2.5"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm text-gray-600">Tags</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="ui, bug, urgent"
              className="mt-1 w-full rounded-lg border px-4 py-2.5"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50 rounded-b-2xl">
          <button
            onClick={() => {
              deleteTask(task.id);
              onClose();
            }}
            style={{ backgroundColor: "#F4A8FF"}}
            className="text-sm text-red-500 hover:text-red-600 font-medium"
          >
            Delete
          </button>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              style={{ backgroundColor: "#E5E7EB" }}
              className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{ backgroundColor: "#B9F8CF" }}
             className="px-5 py-2 text-sm rounded-lg bg-gray-600 text-green-800 hover:bg-gray-700 transition"

            >
              Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TaskModal;
