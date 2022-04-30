export const getProjectsState = (store) => store.projects

export const getProjects = (store) =>
	getProjectsState(store) ? getProjectsState(store) : []

export const getActiveProjects = (store) =>
	getProjectsState(store).filter((project) => project.active)

export const getInactiveProjects = (store) =>
	getProjectsState(store).filter((project) => !project.active)

export const getHomeProjects = (store) =>
	getActiveProjects(store).slice(0, 6)

export const getProject = (store, id) =>
	getProjectsState(store)?.find((project) => project.id === id)

export const getBriefcaseProjects = (store, briefcaseId) =>
	getProjectsState(store)?.filter((project) => project.briefcaseId === briefcaseId)
