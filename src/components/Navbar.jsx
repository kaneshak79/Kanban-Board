



import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Project Title */}
        <div className="text-3xl font-bold tracking-wide">
          Kanban Board
        </div>

        {/* Optional: modern Add Task button */}
        <button className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:bg-purple-50 transition duration-300">
          Home
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
