import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from './AddTask';
import ListTask from './ListTask';
import { addTask, toggleTask, editTask } from './actions';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (description) => {
    dispatch(addTask(description));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEditTask = (taskId) => {
    const newDescription = prompt('Enter the new description:');
    if (newDescription) {
      dispatch(editTask(taskId, newDescription));
    }
  };

  return (
    <div>
      <AddTask addTask={handleAddTask} />
      <ListTask tasks={tasks} toggleTask={handleToggleTask} editTask={handleEditTask} />
    </div>
  );
};

export default App;
