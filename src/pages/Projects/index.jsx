import { useSelector } from 'react-redux'
import { getHomeProjects } from '../../store/selectors/projects'
import { getInactiveProjects } from '../../store/selectors/projects'

import { Button } from '../../components/atoms/Button'
import { Grid } from '../../components/Grid'
import GridItem from '../../components/GridItem'
import { Modal } from '../../components/Modal'
import { useModal } from '../../hooks/useModal'
import { AddProjectForm } from '../../components/AddProjectForm'

export default function Projects({ home = false }) {
	const projects = useSelector((state) => getHomeProjects(state))
	const inactiveProjects = useSelector((state) => getInactiveProjects(state))
	const { isOpen, toggle } = useModal()

	const handleNewProject = () => toggle()

	return (
		<>
			<section>
				<h2>Proyectos</h2>
				<Grid>
					<Button card handleClick={() => handleNewProject()}>
						Nuevo +
					</Button>
					{projects.map((project) => (
						<GridItem item={project} url="project" filled key={project.id} />
					))}
				</Grid>
				{!home &&
					<>
						<h4 className="font-medium text-gray-500 mt-6 -mb-1">INACTIVOS</h4>
						<Grid>
							{inactiveProjects.map((project) => (
								<GridItem item={project} url="project" filled key={project.id} />
							))}
						</Grid>
					</>
				}
			</section>
			<Modal isOpen={isOpen} hide={toggle}>
				<AddProjectForm handleClose={toggle} />
			</Modal>
		</>
	)
}
