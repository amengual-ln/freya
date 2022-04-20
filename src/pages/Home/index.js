import Tasks from '../Tasks'
import Briefcases from '../Briefcases'
import Projects from '../Projects'

export default function Home() {

	return (
		<>
			<Tasks home />
			<br />
			<Briefcases />
			<br />
			<Projects />
		</>
	)
}
