import { AddTaskForm } from '../components/AddTaskForm';
import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList';
import { useUI } from '../context/UIContext';

export function TaskListPage({
    filteredTasks, handleDeleteTask, handleAddTask, filter, setFilter, isLoading, error
}) {

    const { theme } = useUI()
    return (<div>
        <Header title="TaskFlow" description="Gérez vos tâches avec TaskFlow" />
        <AddTaskForm onAddTask={handleAddTask} />

        <div>Theme: {theme}</div>

        <br />
        <div className="filters">
            <button type="button" onClick={() => setFilter("all")}>Toutes</button>
            <button type="button" onClick={() => setFilter("inprogress")}>Actives</button>
            <button type="button" onClick={() => setFilter("completed")}>Terminées</button>
        </div>
        <br />
        {isLoading && <p>Chargement des tâches...</p>}
        {error && <p>{error}</p>}
        <br />
        {!isLoading && !error && <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask} filter={filter} />}
    </div>
    );
}