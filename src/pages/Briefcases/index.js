import { useSelector } from 'react-redux'
import { getBriefcases } from '../../store/selectors/briefcases'

import { Grid } from '../../components/Grid'
import GridItem from '../../components/GridItem'

export default function Briefcases() {
	const briefcases = useSelector((state) => getBriefcases(state))

	return (
		<section>
			<h2>Portafolios</h2>
			<Grid>
				{briefcases.map((briefcase) => (
					<GridItem
						item={briefcase}
						url="briefcase"
						filled
						key={briefcase.id}
					/>
				))}
			</Grid>
		</section>
	)
}
