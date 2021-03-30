export const getProjectsState = (store) => store.projects;

export const getProjects = (store) =>
  getProjectsState(store) ? getProjectsState(store) : [];
