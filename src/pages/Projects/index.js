import { useSelector } from 'react-redux'
import { getProjects } from '../../store/selectors/projects'

import { Grid } from '../../components/Grid'
import GridItem from '../../components/GridItem'

export default function Projects() {
	const projects = useSelector((state) => getProjects(state))

	return (
		<section>
			<h2>Proyectos</h2>
			<Grid>
				{projects.map((project) => (
					<GridItem item={project} url="project" filled key={project.id} />
				))}
			</Grid>
		</section>
	)
}
