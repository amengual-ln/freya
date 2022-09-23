import { useDispatch } from 'react-redux'
import { deleteResource } from '../../store/reducers/resources'
import { Dropdown } from '../../components/Dropdown'
import { Modal } from '../../components/Modal'
import { useModal } from '../../hooks/useModal'
import { ModifyTaskForm } from '../../components/ModifyTaskForm'

export const Task = ({ task, children }) => {
    const dispatch = useDispatch()
    const { isOpen, toggle } = useModal()

	const handleDelete = (id) => dispatch(deleteResource('tasks', id))

	const dropdownOptions = [
		{ label: 'Editar', handler: toggle },
		{ label: 'Eliminar', handler: handleDelete },
	]

    return (
        <>
            {children}
            <div className='flex items-center'>
                <span className="px-4">{task.status}</span>
                <Dropdown options={dropdownOptions} taskId={task?.id} />
            </div>
            <div className='absolute'>
                <Modal isOpen={isOpen} hide={toggle}>
                    <ModifyTaskForm task={task} handleClose={toggle} />
                </Modal>
            </div>
        </>
    )
}
