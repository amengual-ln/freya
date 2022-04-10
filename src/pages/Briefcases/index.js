import { useSelector } from 'react-redux'
import { getBriefcases } from '../../store/selectors/briefcases'

import { Grid } from '../../components/Grid'
import GridItem from '../../components/GridItem'
import { Button } from '../../components/atoms/Button'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components/Modal'
import { AddBriefcaseForm } from '../../components/AddBriefcaseForm'

export default function Briefcases() {
	const briefcases = useSelector((state) => getBriefcases(state))
	const { isOpen, toggle } = useModal()

	const handleNewBriefcase = () => toggle()

	return (
		<>
			<section>
				<h2>Portafolios</h2>
				<Grid>
					<Button card handleClick={() => handleNewBriefcase()}>
						Nuevo +
					</Button>
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
			<Modal isOpen={isOpen} hide={toggle}>
				<AddBriefcaseForm handleClose={toggle} />
			</Modal>
		</>
	)
}
