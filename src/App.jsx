import React, { useState } from "react";
import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [date, setDate] = useState(new Date());

  // Add Task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput(""); // Clear input field
    }
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Toggle Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="header">
        <h1>TO-DO</h1>
        <button onClick={toggleTheme}>
          {darkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        </button>
      </header>

      {/* Calendar */}
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>

      {/* Task Input */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="footer">Developed by Kajal Dhumal</footer>
    </div>
  );
}

export default App;
