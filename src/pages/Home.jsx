


import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

const columnsData = ["To Do", "In Progress", "Done"];

export default function Home() {
  const { tasks, setTasks } = useTasks();
  const [openAddModal, setOpenAddModal] = useState(false);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // same position → do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setTasks((prev) =>
      prev.map((task) =>
        task.id === draggableId
          ? { ...task, status: destination.droppableId }
          : task
      )
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-end px-6 py-4">
        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:opacity-90"
          onClick={() => setOpenAddModal(true)}
        >
          Add Task
        </button>
      </div>

      {openAddModal && (
        <TaskModal task={null} onClose={() => setOpenAddModal(false)} />
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-10">
          {columnsData.map((columnId) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 rounded-xl p-4 min-h-[520px] shadow-sm"
                >
                  <h2 className="text-lg font-bold mb-4">{columnId}</h2>

                  {tasks
                    .filter((t) => t.status === columnId)
                    .map((task, index) => (
                      <Draggable
                        draggableId={task.id}
                        index={index}
                        key={task.id}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-3"
                          >
                            <TaskCard task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
}
