import { useSelector } from 'react-redux'

import { getLinks } from '../../store/selectors/links'
import { Grid } from '../../components/Grid'
import Card from '../../components/Card'
import { Button } from '../../components/atoms/Button'
import { Modal } from '../../components/Modal'
import { AddLinkForm } from '../../components/AddLinkForm'
import { useModal } from '../../hooks/useModal'

export default function Links() {
	const links = useSelector((state) => getLinks(state))
	const { isOpen, toggle } = useModal()

	return (
		<section>
			<h2>Links</h2>
			<Grid title="Links" itemWidth="270px">
				<Button circle handleClick={toggle}>
					Nuevo +
				</Button>
				{links.map((link) => (
					<Card
						href={link.url}
						deletable
						collection="links"
						id={link.id}
						key={link.id}
					>
						<div className="my-auto">
							{ link.siteIcon &&
								<figure className="flex justify-center mb-3">
									<img src={ link.siteIcon.src } alt="Site Icon" className="w-8" />
								</figure>
							}
							<h4>{link.title}</h4>
						</div>
					</Card>
				))}
			</Grid>
			<Modal isOpen={isOpen} hide={toggle}>
				<AddLinkForm handleClose={toggle} />
			</Modal>
		</section>
	)
}
