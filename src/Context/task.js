import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react';

const TasksContext = createContext();

function Provider({ children }) {
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
    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3001/tasks/${id}`);
        const afterDeletingTasks = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(afterDeletingTasks);
    }

    const editTaskById = async (id, updatedTitle, updatedTaskDec) => {
        await axios.put(`http://localhost:3001/tasks/${id}`, {
            title: updatedTitle,
            taskDec: updatedTaskDec
        });
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { id, title: updatedTitle, taskDec: updatedTaskDec }
            }
            return task
        })
        setTasks(updatedTasks);
    }
    const sharedValuesAndMethods = {
        tasks, createTask, fetchTasks, editTaskById, deleteTaskById
    }
    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider }
export default TasksContext;