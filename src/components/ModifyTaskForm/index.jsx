import { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { Select } from '../atoms/Select'
import { Button } from '../atoms/Button'
import { modifyResource } from '../../store/reducers/resources'
import { getActiveProjects } from '../../store/selectors/projects'

const status = [
    'TODO',
    'WIP',
    'DONE'
]

export const ModifyTaskForm = ({ task, handleClose }) => {
    const dispatch = useDispatch()
    const projects = useSelector(state => getActiveProjects(state))
    const [selectedProject, setSelectedProject] = useState(task.project)
    const [selectedStatus, setSelectedStatus] = useState(task.status)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            description: task.description,
            projectId: task.projectId,
            status: task.status,
            id: task.id,
        }
    })

    const handleProjectChange = (newProject) => {
        setSelectedProject(newProject)
    }

    const handleStatusChange = (newStatus) => {
        setSelectedStatus(newStatus)
    }

    const onSubmit = async (data) => {
        dispatch(
            modifyResource('tasks', task.id, {
                ...data,
                status: selectedStatus,
                projectId: selectedProject.id
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
                    <Select options={projects} initial={task.project} handleChange={handleProjectChange} />
                </label>
                <label htmlFor="status" className="text-sm">
                    Estado
                    <Select options={status} initial={task.status} handleChange={handleStatusChange} />
                </label>
                <div className="flex justify-end mt-2.5">
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