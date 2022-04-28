import { getProject } from './projects'

export const getTasksState = (store) => store.tasks

export const getTasks = (store) =>
	getTasksState(store) ? getTasksState(store) : []

export const getTasksAndProject = (store) => {
	const tasks = getTasks(store)
	const tasksAndProject = tasks.map((task) => {
		const projectInfo = getProject(store, task.projectId)
		return {
			...task,
			project: projectInfo,
		}
	})
	return tasksAndProject
}

export const getHomeTasksAndProject = (store) => {
	const tasks = getTasksAndProject(store)
	const uncompletedTasks = tasks.filter((task) => task.status !== 'DONE')

	return uncompletedTasks.slice(0, 5)
}

export const getTask = (store, id) =>
	getTasksState(store)?.find((task) => task.id === id)

export const getProjectTasks = (store, projectId) =>
	getTasksState(store)?.filter((task) => task.projectId === projectId)
