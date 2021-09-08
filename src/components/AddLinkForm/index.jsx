import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { createResource } from '../../store/reducers/resources'
import { faviconGrabber } from '../../utils/faviconGrabber'

export const AddLinkForm = ({ handleClose }) => {
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()

	const onSubmit = async (data) => {
		const siteIcon = await faviconGrabber(data.url)
		dispatch(
			createResource('links', {
				...data,
				siteIcon: siteIcon,
			})
		)
		handleClose()
		reset()
	}

	return (
		<>
			<h2 className="font-medium mb-3.5">Nuevo link</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="title" className="text-sm">
					Título
				</label>
				<input
					{...register('title')}
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
					Url
				</label>
				<input
					{...register('url')}
					id=""
					autoComplete="off"
					className="w-full bg-gray-100 rounded mb-3.5 p-1.5"
				/>
				<div className="flex justify-end">
					<button className="cursor-pointer rounded mt-2.5 py-1.5 px-3 hover:bg-gray-200">
						Cancelar
					</button>
					<button className="cursor-pointer rounded mt-2.5 ml-2 py-1.5 px-3 text-blue-900 bg-blue-100 hover:bg-blue-200">
						Crear
					</button>
				</div>
			</form>
		</>
	)
}
