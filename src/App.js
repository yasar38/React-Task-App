import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDec) => {
    const response = await axios.post('http://localhost:3001/tasks', {
      title, taskDec
    });
    const createdTask = [
      ...tasks, response.data
      // {
      //    id: Math.round(Math.random() * 999999),
      //    title, //title: title => bununla aynı anlama geliyor isimler aynıtsa
      //    taskDec
      // }
    ];
    setTasks(createdTask);
  }
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data)
  }
  useEffect(() => {
    fetchTasks()
  }, [])

  const deleteTaskById = async (id) => {
    const response = await axios.delete('http://localhost:3001/tasks/${id}');
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = (id, updatedTitle, updatedTaskDec) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDec: updatedTaskDec }
      }
      return task
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
