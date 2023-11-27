import React from 'react';

const Task = ({ task, toggleTask, editTask }) => {
  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={() => toggleTask(task.id)}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => editTask(task.id)}>
        Edit
      </button>
    </div>
  );
};

export default Task;
