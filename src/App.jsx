import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TaskDetailPage } from './pages/TaskDetailPage';
import { TaskListPage } from './pages/TaskListPage';

import { useTasks } from './hooks/useTasks';

const INITIAL_TASKS = [
  { id: 1, title: "Créer le projet Vite React", completed: true },
  { id: 2, title: "Découper en composants", completed: false },
  { id: 3, title: "Ajouter le state (séance 3)", completed: false },
];

function App() {
  const taskApi = useTasks();

  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskListPage {...taskApi} />} />
        <Route path="/tasks/:id" element={<TaskDetailPage {...taskApi} />} />
      </Routes>
    </div>
  )
}

export default App
