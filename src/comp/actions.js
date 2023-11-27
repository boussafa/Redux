// actions.js

export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(),
      description,
      isDone: false,
    },
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: {
      id: taskId,
    },
  });
  
  export const editTask = (taskId, newDescription) => ({
    type: 'EDIT_TASK',
    payload: {
      id: taskId,
      newDescription,
    },
  });
  