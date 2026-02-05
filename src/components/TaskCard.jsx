


import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ task, onClick, isOverlay = false }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={isOverlay ? null : setNodeRef}
      style={style}
      {...(!isOverlay ? attributes : {})}
      {...(!isOverlay ? listeners : {})}
      onClick={onClick}
      className={`
        rounded-xl border bg-white p-4 cursor-pointer
        text-sm shadow-sm
        ${isDragging ? "opacity-50" : "hover:shadow-md"}
        ${isOverlay ? "shadow-2xl scale-[1.02]" : ""}
      `}
    >
      <h3 className="font-semibold text-gray-800">
        {task.title}
      </h3>

      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {task.description}
      </p>

      {task.priority && (
        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
          {task.priority}
        </span>
      )}
    </div>
  );
};

export default TaskCard;
