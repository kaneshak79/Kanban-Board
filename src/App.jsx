

import React, { useContext, useState } from "react";
import { TaskProvider, TaskContext } from "./context/TaskContext";
import Column from "./components/Column";
import TaskCard from "./components/TaskCard";
import Navbar from "./components/Navbar";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";

const columns = ["To Do", "In Progress", "Done"];

function AppContent() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragStart = (event) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    if (columns.includes(over.id)) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === active.id ? { ...t, status: over.id } : t
        )
      );
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4 p-4 min-h-screen bg-slate-100">
        {columns.map((col) => (
          <Column
            key={col}
            columnId={col}
            title={col}
            tasks={tasks.filter((t) => t.status === col)}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <Navbar/>
      <AppContent />
    </TaskProvider>
  );
}

