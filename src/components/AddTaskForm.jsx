//!nos da un form para añadir nuevas tareas a la lista
import { useState } from "react";
const AddTaskForm= ({addTask}) => {
    const [taskText, setTaskText] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        addTask(taskText);
        setTaskText('')
    }
    return(
        <>
            <form onSubmit={handlesubmit}>
                <input type='text' value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="agregar nueva tarea"></input>
                <button className="addTask" type="submit">Agregar</button>
            </form>
        </>
    )
}

export default AddTaskForm;