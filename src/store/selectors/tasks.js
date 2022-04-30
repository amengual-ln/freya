import { getProject } from './projects'

export const getTasksState = (store) => store.tasks

export const getTasks = (store) =>
	getTasksState(store) ? getTasksState(store) : []

export const getTasksAndProject = (store) => {
	const tasks = getTasks(store).sort((taskA, taskB) => taskB.updatedAt - taskA.updatedAt)
	const tasksAndProject = tasks.map((task) => {
		const projectInfo = getProject(store, task.projectId)
		return {
			...task,
			project: projectInfo,
		}
	})
	const wip = tasksAndProject.filter((task) => task.status === 'WIP')
	const todo = tasksAndProject.filter((task) => task.status === 'TODO')
	const done = tasksAndProject.filter((task) => task.status === 'DONE')
	return { wip, todo, done }
}

export const getHomeTasksAndProject = (store) => {
	let tasks = getTasksAndProject(store)
	tasks = [...tasks.wip, ...tasks.todo]
	return tasks.slice(0, 5)
}

export const getTask = (store, id) =>
	getTasksState(store)?.find((task) => task.id === id)

export const getProjectTasks = (store, projectId) =>
	getTasksState(store)?.filter((task) => task.projectId === projectId)
