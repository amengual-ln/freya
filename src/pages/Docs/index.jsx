import { useSelector, useDispatch } from 'react-redux'
import { getDocs } from '../../store/selectors/docs'
import dayjs from 'dayjs'

import { Grid } from '../../components/Grid'
import { Button } from '../../components/atoms/Button'
import Card from '../../components/Card'
import { createResource } from '../../store/reducers/resources'

import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import 'dayjs/locale/es'

export default function Docs() {
	const dispatch = useDispatch()
	const docs = useSelector((state) => getDocs(state))
	let sortedDocs = docs.sort((doc1, doc2) => doc2.updatedAt - doc1.updatedAt)

	const getFormattedDate = (date) => {
		date = date.toDate ? date.toDate() : dayjs(date).toDate()
		return dayjs().locale('es').to(dayjs(date))
	}

	return (
		<section>
			<h2>Docs</h2>
			<Grid>
				<Button
					circle
					handleClick={() => dispatch(createResource('docs'))}
				>
					Nuevo +
				</Button>
				{sortedDocs.map((doc) => (
					<Card
						to={`/doc/${doc.id}`}
						deletable
						collection="docs"
						id={doc.id}
						key={doc.id}
					>
						<div className="my-auto">
							<h4>{doc.title.replace(/(<([^>]+)>)/gi, '')}</h4>
							<br />
							<pre>{getFormattedDate(doc.updatedAt)}</pre>
						</div>
					</Card>
				))}
			</Grid>
		</section>
	)
}
