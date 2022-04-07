import { Link } from 'react-router-dom'

export const SideBar = () => {
	return (
		<aside className="fixed h-screen">
			<Link to="/">
				<h1 className="m-6 font-medium">Freya</h1>
			</Link>
			<ul className="px-8">
				<li className="my-8">
					<Link className="text-gray-600 py-4 hover:text-black" to="/tasks">
						Tareas
					</Link>
				</li>
				<li className="my-8">
					<Link className="text-gray-600 py-4 hover:text-black" to="/briefcases">
						Portafolios
					</Link>
				</li>
				<li className="my-8">
					<Link className="text-gray-600 py-4 hover:text-black" to="/projects">
						Proyectos
					</Link>
				</li>
				<li className="my-8">
					<Link className="text-gray-600 py-4 hover:text-black" to="/docs">
						Docs
					</Link>
				</li>
				<li className="my-8">
					<Link className="text-gray-600 py-4 hover:text-black" to="/links">
						Links
					</Link>
				</li>
			</ul>
		</aside>
	)
}
