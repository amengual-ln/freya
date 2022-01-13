import { useSelector } from 'react-redux'
import { getProjects } from '../../store/selectors/projects'

import { Button } from '../../components/atoms/Button'
import { Grid } from '../../components/Grid'
import GridItem from '../../components/GridItem'
import { Modal } from '../../components/Modal'
import { useModal } from '../../hooks/useModal'
import { AddProjectForm } from '../../components/AddProjectForm'

export default function Projects() {
	const projects = useSelector((state) => getProjects(state))
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
			</section>
			<Modal isOpen={isOpen} hide={toggle}>
				<AddProjectForm handleClose={toggle} />
			</Modal>
		</>
	)
}
