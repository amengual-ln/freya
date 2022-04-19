import { Dropdown } from '../../components/Dropdown'
import { Modal } from '../../components/Modal'
import { useModal } from '../../hooks/useModal'
import { ModifyTaskForm } from '../../components/ModifyTaskForm'

export const Task = ({ task, children, dropdownOptions }) => {
    const { isOpen, toggle } = useModal()

    const handleToggle = () => toggle()

    let finalOptions = dropdownOptions?.map(option => ({
        ...option,
        handler: option.handler === 'toggle' ? handleToggle : option.handler
    }))

    return (
        <>
            {children}
            <div className='flex items-center'>
                <span className="px-4">{task.status}</span>
                <Dropdown options={finalOptions} taskId={task?.id} />
            </div>
            <Modal isOpen={isOpen} hide={toggle}>
                <ModifyTaskForm task={task} handleClose={toggle} />
            </Modal>
        </>
    )
}
