import { useState } from 'react';

function validateTitle(title) {
    const trimmed = title.trim();
    if (!trimmed) return "Le titre de la tache est requis";
    if (trimmed.length < 3) return "Le titre doit avoir au moins 3 caracteres"
    if (trimmed.length > 80) return "Le titre ne doit pas dépasser 80 caracteres"
    return null
}

export function AddTaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null)

    function handleSubmit(event) {
        event.preventDefault();
        const message = validateTitle(title);
        if (message) {
            setError(message)
            return;
        }
        onAddTask(title);
        setTitle(''); // Réinitialiser le champ de texte
        setError(null);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <label htmlFor="new-task">Titre de la tâche</label>
            <br />
            <input type="text" id="new-task"
                placeholder="Ajouter une tâche"
                value={title}
                required={true}
                onChange={(event) => {
                    setTitle(event.target.value);
                    if (error) setError(null);
                }}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "new-task-error" : undefined}
            />
            {error && (
                <p id='new-task-error' role='alert' className='field-error'>{error}</p>
            )}
            <button type="submit">Ajouter</button>
        </form>
    )
}