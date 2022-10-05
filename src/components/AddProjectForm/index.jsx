import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import { getBriefcases } from '../../store/selectors/briefcases'

import { Button } from '../../components/atoms/Button'
import { Select } from '../../components/atoms/Select'
import { createResource } from '../../store/reducers/resources'

export const AddProjectForm = ({ handleClose }) => {
	const dispatch = useDispatch()
	const briefcases = useSelector(state => getBriefcases(state))
	const [selectedBriefcase, setSelectedBriefcase] = useState()
	const { register, handleSubmit, reset } = useForm()

	const handleBriefcaseChange = (newBriefcase) => {
		setSelectedBriefcase(newBriefcase)
	}

	const onSubmit = async (data) => {
		dispatch(
			createResource('projects', {
				active: true,
				...data,
				briefcaseId: selectedBriefcase.id
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
			<h2 className="font-medium mb-3.5">Nuevo proyecto</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="title" className="text-sm">
					Nombre
				</label>
				<input
					{...register('name')}
					id="title"
					autoComplete="off"
					className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
				/>
				<label htmlFor="title" className="text-sm">
					Color
				</label>
				<input
					{...register('color')}
					id="title"
					autoComplete="off"
					className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
				/>
				<label htmlFor="title" className="text-sm">
					Descripción
				</label>
				<input
					{...register('description')}
					id="description"
					autoComplete="off"
					className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
				/>
				<label htmlFor="title" className="text-sm">
					Portafolio
				</label>
				<Select options={briefcases} handleChange={handleBriefcaseChange} />
				{/* <input
					{...register('briefcaseId')}
					id="briefcaseId"
					autoComplete="off"
					className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
				/> */}
				<div className="flex justify-end">
					<Button handleClick={(event) => onCancel(event)}>
						Cancelar
					</Button>
					<Button primary>
						Crear
					</Button>
				</div>
			</form>
		</>
	)
}
