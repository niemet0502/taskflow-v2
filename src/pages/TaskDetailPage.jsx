import { Link, useParams } from "react-router-dom";
import { useUI } from "../context/UIContext";

export function TaskDetailPage({ getTaskById }) {
    const { id } = useParams();

    const task = getTaskById(id);

    const { theme } = useUI();
    if (!task) {
        return <div>Tache non trouvée</div>
    }
    return (
        <div className="task-detail">

            <div>Theme: {theme}</div>
            <p>
                <Link to="/">Retour</Link>
            </p>
            <h1>Task Detail Page</h1>
            <h2>Titre: {task.title}</h2>
            <p>Statut: {task.completed ? "Terminée" : "En cours"}</p>
        </div>
    )
}