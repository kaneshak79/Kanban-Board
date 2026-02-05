Kanban Board – Task Management Application

A Kanban-style task management application built using React JS that allows users to create, organize, and move tasks across different workflow stages using drag-and-drop. The application uses Context API for global state management and localStorage for data persistence.

Live Demo

Deployed URL: https://kanban-board-dun-five.vercel.app/

Source Code

GitHub Repository: (Add GitHub repo link here)

Features
Task Board Layout

Three task columns:

To Do

In Progress

Done

Each column displays task cards with:

Title

Description

Priority

Tags

Fully responsive layout using TailwindCSS

Task Management

Add new tasks using an input form

Edit existing tasks through a modal interface

Delete tasks when no longer needed

Update task status manually or via drag-and-drop

Drag and Drop

Smooth drag-and-drop functionality implemented using dnd-kit

Move tasks between columns

Reorder tasks within a column

Visual feedback during dragging

State Management & Persistence

Global state managed using React Context API

Tasks automatically saved to localStorage

Data persists after page refresh or browser reload

Task Modal

Click on a task card to view detailed information

Edit task title, description, priority, and tags

Modern modal UI with full-screen background overlay

Tech Stack

React JS

TailwindCSS

Context API

dnd-kit (Drag & Drop)

localStorage

Vite (Build Tool)

Project Structure
src/
│
├── components/
│   ├── AddTaskForm.jsx
│   ├── Column.jsx
│   ├── TaskCard.jsx
│   ├── SortableTaskCard.jsx
│   ├── TaskModal.jsx
│   └── Navbar.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
├── main.jsx
├── index.css

Installation & Setup

Clone the repository:

git clone <your-repo-url>


Navigate to the project folder:

cd kanban-board


Install dependencies:

npm install


Run the development server:

npm run dev

Future Enhancements

Task deadlines and reminders

Search and filter functionality

Dark mode

Column reordering

Author

Kanesha

