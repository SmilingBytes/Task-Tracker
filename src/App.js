import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [title, setTitle] = useState("Task Tracker");

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };


  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Odoo Installation',
      day: 'Jan 5th at 2:30 PM',
      reminder: true,
    }, 
    {
      id: 2,
      text: 'Odoo Customization',
      day: 'Jan 9th at 3:30 PM',
      reminder: false,
    },  
    {
      id: 3,
      text: 'Odoo Support',
      day: 'Feb 7th at 2:30 PM',
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log("Delete", id)
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      { tasks.length > 0 ? 
        <Tasks tasks={ tasks } onDelete={deleteTask} onToggle={toggleReminder} /> : 
        'No Task To Show'}
    </div>
  );
}

export default App;
