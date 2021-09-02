export const getProjectsState = (store) => store.projects

export const getProjects = (store) =>
	getProjectsState(store) ? getProjectsState(store) : []

export const getProject = (store, id) =>
	getProjectsState(store)?.find((project) => project.id === id)

export const getBriefcaseProjects = (store, briefcaseId) =>
	getProjectsState(store)?.filter(
		(project) => project.briefcaseId === briefcaseId
	)
