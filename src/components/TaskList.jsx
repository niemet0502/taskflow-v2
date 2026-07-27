import { TaskItem } from './TaskItem';

export function TaskList({ tasks, handleDeleteTask }) {
    return (
        <div>
            {tasks.length === 0 && (
                <div>
                    <h2>Aucune tâche trouvée</h2>
                    <p>Ajoutez votre première tâche pour démarrer TaskFlow.</p>
                </div>
            )
            }
            <ul className='task-list'>
                {tasks.map((task) => <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}
            </ul>

        </div >
    )
}