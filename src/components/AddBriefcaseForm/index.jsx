import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/atoms/Button'
import { ColorPicker } from '../../components/atoms/ColorPicker'
import { createResource } from '../../store/reducers/resources'

export const AddBriefcaseForm = ({ handleClose }) => {
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()
	const [selectedColor, setSelectedColor] = useState('')

	const handleColorChange = (newColor) => {
		setSelectedColor(newColor)
	}

	const onSubmit = async (data) => {
		dispatch(
			createResource('briefcases', {
				color: selectedColor.name,
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
			<h2 className="font-medium mb-3.5">Nuevo portafolios</h2>
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
					readOnly
					value={selectedColor.name || ''}
					className={`peer w-full bg-gray-100 rounded mb-3.5 p-1.5`}
				/>
				<div className="hidden peer-focus:block hover:block">
					<ColorPicker handleChange={handleColorChange}></ColorPicker>
				</div>
				<label htmlFor="title" className="text-sm">
					Descripción
				</label>
				<input
					{...register('description')}
					id="description"
					autoComplete="off"
					className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
				/>
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
