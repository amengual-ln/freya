import { useSelector } from 'react-redux'
import { getLinks } from '../../store/selectors/links'

import Grid from '../../components/Grid'
import Card from '../../components/Card'

export default function Links() {
	const links = useSelector((state) => getLinks(state))

	return (
		<>
			<Grid title="Links" itemWidth="270px">
				{links.map((link) => (
					<Card
						href={link.url}
						deletable
						collection="links"
						id={link.id}
						key={link.id}
					>
						<h4>{link.title}</h4>
					</Card>
				))}
			</Grid>
		</>
	)
}
