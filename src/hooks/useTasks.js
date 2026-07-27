import { useEffect, useState } from 'react';
const STORAGE_KEY = 'taskflow.tasks';

function readStoredTasks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const tasks = data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
}

const API_URL =
  import.meta.env.VITE_API_URL ?? "https://jsonplaceholder.typicode.com";

export function useTasks() {
    const storedTasks = readStoredTasks();

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'inprogress'
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  function handleDeleteTask(id) {
    setTasks(
      tasks.filter((task) => task.id !== id) // ... 
    )
  }

  function handleAddTask(title) {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }])
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'inprogress') return !task.completed;
    return false;
  });

  useEffect(() => {
    async function fetchTasks() {

      if (storedTasks) {
        setTasks(storedTasks);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/todos?_limit=10`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        // console.error('Error fetching tasks:', error);
        setError("Erreur lors de la récupération des tâches");
      } finally {
        setIsLoading(false);
      }

    }

    fetchTasks();
  }, [])


  useEffect(() => {
    if (isLoading || error) return; // arrêter l'exécution de la fonction 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks, isLoading, error])

  function getTaskById(id){
    const task = tasks.find((task) => task.id === +id) // "7" != 7 Number(id) = parseInt(id)
    return task;
  }

  return {
    filteredTasks,
    handleDeleteTask,
    handleAddTask,
    filter,
    setFilter,
    isLoading,
    error,
    getTaskById,
  }
}