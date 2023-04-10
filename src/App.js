import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useContext } from 'react';
import TasksContext from './Context/task';

function App() {
  const { fetchTasks } = useContext(TasksContext)
  useEffect(() => {
    fetchTasks()
  }, [])



  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
