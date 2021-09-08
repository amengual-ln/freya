import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteResource } from '../../store/reducers/resources'
import { Delete } from '@styled-icons/material-outlined'

const CardContainer = styled.article`
	position: relative;
	&:hover svg {
		opacity: 0.5;
	}
	&:hover .card {
		transform: translateY(-5px);
	}
`

const DeleteIcon = styled(Delete)`
	position: absolute;
	right: 0;
	padding: 0.5rem;
	margin: -0.25rem 0;
	width: 2.25rem;
	cursor: pointer;
	transition: 0.2s;
	z-index: 9;
	opacity: 0;
	&:hover {
		color: red;
	}
`

const CardItem = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	color: ${(props) => (props.color ? '#fafafa' : '#202020')};
	border-radius: 5px;
	transition: 0.2s;
	text-align: center;
	padding: 2em;
`

export default function Card({
	children,
	to,
	href,
	color,
	deletable = false,
	collection,
	id,
}) {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deleteResource(collection, id))
	}

	return (
		<CardContainer>
			{deletable && <DeleteIcon onClick={() => handleDelete()} />}
			{to ? (
				<Link to={to}>
					<CardItem
						color={color}
						className={`card bg-${
							color ? color : 'white'
						} shadow hover:shadow-md`}
					>
						{children}
					</CardItem>
				</Link>
			) : (
				<a target="_blank" rel="noreferrer" href={href}>
					<CardItem
						color={color}
						className={`card bg-${
							color ? color : 'white'
						} shadow hover:shadow-md`}
					>
						{children}
					</CardItem>
				</a>
			)}
		</CardContainer>
	)
}
