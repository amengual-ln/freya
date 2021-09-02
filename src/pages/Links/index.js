import { useSelector } from 'react-redux'
import { getLinks } from '../../store/selectors/links'

import { Grid } from '../../components/Grid'
import Card from '../../components/Card'
import NewResourceButton from '../../components/NewResourceButton'

export default function Links() {
	const links = useSelector((state) => getLinks(state))

	return (
		<section>
			<h2>Links</h2>
			<Grid title="Links" itemWidth="270px">
        <NewResourceButton collection={links}></NewResourceButton>
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
		</section>
	)
}
