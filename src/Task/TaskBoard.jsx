import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Web", "React", "JS", "NextJs"],
    priority: "High",
    isFavourite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);

const handleAddTask = () => {
  console.log("Hello");
}

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Actions: Add/Delete buttons */}
          <TaskActions onAddClick={handleAddTask}/>

          {/* Task List */}
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
