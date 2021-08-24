

export default function state(state = [], action) {
  if (action.type === "@tasks/SET_TASKS") {
    action.payload.forEach((task) => {
      if (!state.find((previousTask) => previousTask.id === task.id)) {
        state.push({
          id: task.id,
          ...task.data(),
        });
      }
    });
  }
  return state;
}

export const setTasks = (tasks) => async (dispatch, getState) => {
  dispatch({ type: "@tasks/SET_TASKS", payload: tasks })
}
