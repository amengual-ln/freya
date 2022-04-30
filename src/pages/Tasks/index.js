import { useSelector } from 'react-redux'
import { getTasksAndProject, getHomeTasksAndProject } from '../../store/selectors/tasks'
import { AddTaskForm } from '../../components/AddTaskForm'
import { TaskGroup } from './components/TaskGroup'

export default function Tasks({ home = false }) {
	let tasks = useSelector((state) => {
		if (home) {
			return getHomeTasksAndProject(state)
		} else {
			return getTasksAndProject(state)
		}
	})

	return (
		<section>
			<h2>Tareas</h2>
			<AddTaskForm />
			<hr />
			{home ? (
				<TaskGroup tasks={tasks} />
			) : (
				<>
					<h4 className="font-medium text-gray-500 mt-3 -mb-2">WIP</h4>
					<TaskGroup tasks={tasks.wip} />
					<h4 className="font-medium text-gray-500 -mb-2">TO DO</h4>
					<TaskGroup tasks={tasks.todo} />
					<h4 className="font-medium text-gray-500 -mb-2">DONE</h4>
					<TaskGroup tasks={tasks.done} />
				</>
			)}
		</section>
	)
}
