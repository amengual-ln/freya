import { useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Link } from 'react-router-dom'
import { Button } from '../atoms/Button'

export const SideBar = () => {
	const [open, setOpen] = useState(false)
	const { width } = useWindowSize()

	return (
		<>
			{width < 768 && (
				<div className={`${open ? 'ml-44' : ''} fixed px-4 py-2`}>
					<Button handleClick={() => setOpen(!open)}>{
						open ? '<' : '>'
					}</Button>
				</div>
			)}
			<aside
				onClick={() => setOpen(!open)}
				className={`fixed h-screen bg-gray-100 overflow-hidden z-30 ${width < 768 ? (open ? 'w-auto' : 'w-0') : 'w-auto'}`}>
				<Link to="/">
					<h1 className="m-8 font-medium">Freya</h1>
				</Link>
				<ul className="px-6">
					<li className="my-8">
						<Link className="text-gray-600 p-4 mr-4 hover:text-black" to="/tasks">
							Tareas
						</Link>
					</li>
					<li className="my-8">
						<Link className="text-gray-600 p-4 mr-4 hover:text-black" to="/briefcases">
							Portafolios
						</Link>
					</li>
					<li className="my-8">
						<Link className="text-gray-600 p-4 mr-4 hover:text-black" to="/projects">
							Proyectos
						</Link>
					</li>
					<li className="my-8">
						<Link className="text-gray-600 p-4 mr-4 hover:text-black" to="/docs">
							Docs
						</Link>
					</li>
					<li className="my-8">
						<Link className="text-gray-600 p-4 mr-4 hover:text-black" to="/links">
							Links
						</Link>
					</li>
				</ul>
			</aside>
		</>
	)
}
