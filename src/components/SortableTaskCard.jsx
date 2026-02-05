



import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import TaskModal from "./TaskModal";

const SortableTaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    userSelect: "none",
    touchAction: "none",
    cursor: "grab",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div ref={setNodeRef} style={style} className="mb-2">
        {/* Drag handle */}
        <div
          className="bg-gray-200 p-1 rounded mb-1 cursor-grab text-xs text-gray-600"
          {...listeners}
          {...attributes}
        >
          Drag
        </div>

        {/* Clickable area */}
        <div
          className="bg-white p-3 rounded shadow cursor-pointer hover:bg-gray-50"
          onClick={() => setOpen(true)}
        >
          <h3 className="font-bold">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>

          {/* Priority */}
          {task.priority && (
            <p className="text-sm mt-1">
              <span className="font-semibold">Priority:</span> {task.priority}
            </p>
          )}

          {/* Tags */}
          {task.tags && task.tags.length > 0 && (
            <div className="flex flex-wrap mt-1 gap-1">
              {task.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {open && <TaskModal task={task} onClose={() => setOpen(false)} />}
    </>
  );
};

export default SortableTaskCard;
