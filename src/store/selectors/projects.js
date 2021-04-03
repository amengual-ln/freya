export const getProjectsState = (store) => store.projects;

export const getProjects = (store) =>
  getProjectsState(store) ? getProjectsState(store) : [];

export const getBriefcaseProjects = (store, briefcaseId) =>
  getProjectsState(store)?.filter((project) => project.briefcaseId === briefcaseId);