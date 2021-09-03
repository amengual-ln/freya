import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ListItem } from '../ListItem'
import { DropdownOptions } from '../DropdownOptions'
import { getProjects } from '../../store/selectors/projects'
import { createResource } from '../../store/reducers/resources'

export default function AddTaskForm() {
	const dispatch = useDispatch()
	const [taskDescription, setTaskDescription] = useState('')
	const projects = useSelector((store) => getProjects(store))
	const [selectedProject, setSelectedProject] = useState(0)

	const handleInputChange = (e) => {
		setTaskDescription(e.target.value)
	}

	const handleDropdownChange = (projectId) => {
		setSelectedProject(projectId)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(
			createResource('tasks', {
				projectId: selectedProject,
				status: 'TODO',
				description: taskDescription,
			})
		)
		setTaskDescription('')
		setSelectedProject(0)
	}

	return (
		<form onSubmit={handleSubmit}>
			<ListItem>
				<DropdownOptions
					options={projects}
					selected={selectedProject}
					onChange={handleDropdownChange}
				/>
				<input
					onChange={handleInputChange}
					value={taskDescription}
					placeholder="Escribí una nueva tarea"
					className="w-full ml-4"
				/>
			</ListItem>
		</form>
	)
}
