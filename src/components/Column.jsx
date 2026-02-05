


import React from "react";
import { useDroppable } from "@dnd-kit/core";
import SortableTaskCard from "./SortableTaskCard";
import AddTaskForm from "./AddTaskForm";

const Column = ({ columnId, title, tasks }) => {
  const { setNodeRef, isOver } = useDroppable({ id: columnId });
//   const bgColor = isOver ? "bg-blue-100" : "bg-gray-100";
const bgColor="bg-white";

  return (
    <div
      ref={setNodeRef}
      className={`w-1/3 p-4 rounded flex flex-col ${bgColor}`}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <AddTaskForm column={title} />
      <div className="space-y-2 min-h-[100px]">
        {tasks.map((task) => (
          <SortableTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;

