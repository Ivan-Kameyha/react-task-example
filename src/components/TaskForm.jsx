import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h1>Planificador semanal</h1>
      <input maxLength="16"
        type="text"
        placeholder="Tarea a realizar"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      /> <br />
      <textarea maxLength="50"
        placeholder="Descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea> <br />
      <button className="guardar-button">Guardar</button>
    </form>
  );
}

export default TaskForm;
