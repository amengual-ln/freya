import { useSelector, useDispatch } from 'react-redux'

import { getTasksAndProject } from '../../store/selectors/tasks'
import { deleteResource } from '../../store/reducers/resources'
import AddTaskForm from '../../components/AddTaskForm'
import { List } from '../../components/List'
import { ListItem } from '../../components/ListItem'
import { Dropdown } from '../../components/Dropdown'
import { Modal } from '../../components/Modal'
import { useModal } from '../../hooks/useModal'

export default function Tasks() {
  const dispatch = useDispatch()
	const tasks = useSelector((state) => getTasksAndProject(state))
	const { isOpen, toggle } = useModal()

	const handleEdit = () => toggle()
	const handleDelete = (id) => dispatch(deleteResource('tasks', id))

	const dropdownOptions = [
		{ label: 'Editar', handler: handleEdit },
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
						<div>
							<span
								className={`px-4 py-1.5 bg-${
									task.project ? task.project.color : 'white'
								} text-white rounded`}
							>
								{task.project?.name}
							</span>
							<span className="px-4">{task.description}</span>
						</div>
						<div>
							<span className="px-4">{task.status}</span>
							<Dropdown options={dropdownOptions} taskId={task.id} />
						</div>
					</ListItem>
				))}
			</List>
			<Modal isOpen={isOpen} hide={toggle}>
				Hola!
			</Modal>
		</section>
	)
}
