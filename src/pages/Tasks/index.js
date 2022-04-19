import { useSelector, useDispatch } from 'react-redux'

import { getTasksAndProject } from '../../store/selectors/tasks'
import { deleteResource } from '../../store/reducers/resources'
import { AddTaskForm } from '../../components/AddTaskForm'
import { List } from '../../components/List'
import { ListItem } from '../../components/ListItem'
import { Task } from '../../components/Task'

export default function Tasks() {
	const dispatch = useDispatch()
	const tasks = useSelector((state) => getTasksAndProject(state))

	const handleDelete = (id) => dispatch(deleteResource('tasks', id))

	const dropdownOptions = [
		{ label: 'Editar', handler: 'toggle' },
		{ label: 'Eliminar', handler: handleDelete },
	]

	return (
		<section>
			<h2>Tareas</h2>
			<AddTaskForm />
			<hr />
			<List>
				{tasks.map((task) => (
					<ListItem key={task.id}>
						<Task task={task} dropdownOptions={dropdownOptions}>
							<div>
								<span
									className={`px-4 py-1.5 bg-${task.project ? task.project.color : 'white'
										} text-white rounded`}
								>
									{task.project?.name}
								</span>
								<span className="px-4">{task.description}</span>
							</div>
						</Task>
					</ListItem>
				))}
			</List>
		</section>
	)
}
