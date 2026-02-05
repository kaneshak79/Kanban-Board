Kanban Board Application
Overview

The Kanban Board Application is a modern, responsive task management system developed using React JS. It enables users to efficiently manage tasks across different workflow stages using a visual board interface. The application emphasizes clean architecture, intuitive user experience, and reliable state management with persistent storage.

Objectives

Implement a Kanban-style workflow using React

Provide intuitive task creation, editing, and deletion

Enable smooth drag-and-drop task movement between columns

Maintain global application state using Context API

Persist task data locally to prevent data loss

Deliver a responsive, production-quality user interface

Key Features
1. Kanban Workflow Board

Predefined workflow stages:

To Do

In Progress

Done

Tasks are visually grouped by status

Responsive multi-column layout using TailwindCSS

2. Task Management

Create tasks with:

Title

Description

Priority (High / Medium / Low)

Tags

Edit task details via a modal interface

Delete tasks when no longer required

3. Drag and Drop Functionality

Implemented using dnd-kit

Move tasks between columns effortlessly

Reordering updates application state in real time

Visual drag overlay for enhanced user feedback

4. State Management

Centralized global state using React Context API

Clean separation of logic and UI components

Scalable architecture suitable for future feature expansion

5. Local Data Persistence

Task data stored in localStorage

Tasks persist across browser refreshes and sessions

No external APIs or databases required

6. Task Detail Modal

Click on any task to open a detailed view

Inline editing of:

Title

Description

Status

Priority

Tags

Professional modal UI with background blur and focus overlay

Technology Stack
Category	Technology
Frontend	React JS
Styling	TailwindCSS
State Management	Context API
Drag & Drop	dnd-kit
Persistence	localStorage
Build Tool	Vite


Installation & Setup
Prerequisites

Node.js (v16 or higher)

npm or yarn

Steps

Clone the repository:

git clone <repository-url>


Navigate to the project directory:

cd kanban-board


Install dependencies:

npm install


Start the development server:

npm run dev

Deployment

The application can be deployed using Netlify or Vercel

Production build command:

npm run build


Future Enhancements

Task deadlines and reminders

User authentication

Search and filter functionality

Column customization

Dark mode support

Author

Kanesha


This project demonstrates strong proficiency in React JS, modern UI development, state management, and interactive UX design. It follows best practices in component architecture and is suitable for real-world task management use cases.
