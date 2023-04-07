import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDec) => {
    const createdTask = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title, //title: title => bununla aynı anlama geliyor isimler aynıtsa
        taskDec
      }
    ];
    setTasks(createdTask);
  }
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
