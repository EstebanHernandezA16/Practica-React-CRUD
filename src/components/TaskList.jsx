import React from 'react'
import TaskItem from './TaskItem';

//estilos
import styles from './TaskList.module.css'

const TaskList = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
        {tasks.sort((a, b) => b.id - a.id).map(task=>(
            <TaskItem 
            key={tasks.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
            />        ))

        }
    </ul>
  )
}

export default TaskList;
