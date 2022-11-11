import { useSelector } from 'react-redux'
import { getTasksAndProject, getHomeTasksAndProject } from '../../store/selectors/tasks'
import { AddTaskForm } from '../../components/AddTaskForm'
import { TaskGroup } from '../../components/TaskGroup'
import { Collapsible } from '../../components/atoms/Collapsible'

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
					<Collapsible title="WIP" isOpen={tasks.wip.length > 0}>
						<TaskGroup tasks={tasks.wip} />
					</Collapsible>
					<hr className="mt-4" />
					<Collapsible title="TO DO" isOpen={tasks.wip.length > 0}>
						<TaskGroup tasks={tasks.todo} />
					</Collapsible>
					<hr className="mt-4" />
					<Collapsible title="DONE" isOpen={tasks.wip.length > 0}>
						<TaskGroup tasks={tasks.done} />
					</Collapsible>
				</>
			)}
		</section>
	)
}
