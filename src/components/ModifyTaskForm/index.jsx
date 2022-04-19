import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Button } from '../../components/atoms/Button'
import { modifyResource } from '../../store/reducers/resources'

export const ModifyTaskForm = ({ task, handleClose }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            description: task.description,
            projectId: task.projectId,
            status: task.status,
            id: task.id,
        }
    })

    const onSubmit = async (data) => {
        dispatch(
            modifyResource('tasks', task.id, {
                ...data,
            })
        )
        handleClose()
        reset()
    }

    const onCancel = (event) => {
        event.preventDefault()
        handleClose()
        reset()
    }

    return (
        <>
            <h2 className="font-medium mb-3.5">Modificar tarea</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="description" className="text-sm">
                    Descripción
                </label>
                <input
                    {...register('description')}
                    id="description"
                    autoComplete="off"
                    className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
                />
                <label htmlFor="projectId" className="text-sm">
                    Proyecto
                </label>
                <input
                    {...register('projectId')}
                    id="projectId"
                    autoComplete="off"
                    className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
                />
                <label htmlFor="status" className="text-sm">
                    Estado
                </label>
                <input
                    {...register('status')}
                    id="status"
                    autoComplete="off"
                    className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
                />
                <div className="flex justify-end">
                    <Button handleClick={(event) => onCancel(event)}>
                        Cancelar
                    </Button>
                    <Button primary>
                        Modificar
                    </Button>
                </div>
            </form>
        </>
    )
}