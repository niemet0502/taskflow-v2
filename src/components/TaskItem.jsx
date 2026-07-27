import { Link } from 'react-router-dom';

export function TaskItem({ task, handleDeleteTask }) {
    const isCompleted = task.completed;
    return (
        <li className={task.completed ? 'done' : ''}>
            <Link to={`/tasks/${task.id}`}>
                {task.title}
            </Link>

            {isCompleted && <span className='badge'>Terminé</span>}
            {!isCompleted && <span className='inprogress'>En cours</span>}

            <button onClick={() => handleDeleteTask(task.id)}>Supprimer</button> {/* TODO: Ajouter la fonction de suppression */}
        </li>
    )
}