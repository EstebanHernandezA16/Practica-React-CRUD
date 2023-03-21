import { useState } from 'react';

// Importar iconos
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Ingresar Tarea"
        />
        <label
          htmlFor="task"
          className="label"
        >Ingresar Tarea</label>
      </div>
      <button
        className="btn"
        aria-label="Añadir tarea"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm