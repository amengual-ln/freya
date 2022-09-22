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
    const [selectedStatus, setSelectedStatus] = useState(task.status)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            description: task.description,
            projectId: task.projectId,
            status: task.status,
            id: task.id,
        }
    })

    const handleStatusChange = () => {
        setSelectedStatus(task.status)
    }

    const onSubmit = async (data) => {
        dispatch(
            modifyResource('tasks', task.id, {
                ...data,
                status: selectedStatus
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
                {/* <input
                    {...register('projectId')}
                    id="projectId"
                    autoComplete="off"
                    className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
                /> */}
                <Select options={projects} initial={task.project} />
                <label htmlFor="status" className="text-sm">
                    Estado
                </label>
                <Select options={status} initial={task.status} />
                {/* <Listbox value={selectedStatus} onChange={setSelectedStatus}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full rounded bg-gray-100 p-1.5 text-left focus:outline-none">
                            <span className="block truncate">{selectedStatus}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                ˅
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-in duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                                {status.map((status) => (
                                    <Listbox.Option
                                        key={status}
                                        className={`relative select-none cursor-pointer py-2 pl-4 pr-4 hover:text-blue-500`}
                                        value={status}
                                    >

                                        <span
                                            className={`block truncate ${selectedStatus === status ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {status}
                                        </span>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox> */}
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