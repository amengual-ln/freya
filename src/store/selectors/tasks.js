export const getTasksState = (store) => store.tasks;

export const getTasks = (store) =>
  getTasksState(store) ? getTasksState(store) : [];
