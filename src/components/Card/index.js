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
		box-shadow: ${(props) =>
			props.color ? '0 4px 4px ' + props.color : '0 4px 4px rgb(0 0 0 / 15%)'};
		transform: translateY(-5px);
	}
`

const DeleteIcon = styled(Delete)`
  position: absolute;
  right: 0;
	padding: 0.5rem;
	margin: -0.25rem 0;
	width: 1.25rem;
  cursor: pointer;
	transition: 0.2s;
  z-index: 9;
  opacity: 0;
	&:hover {
		color: red;
	}
`

const CardItem = styled.div`
	
	color: ${(props) => (props.color ? '#fafafa' : '#202020')};
	background: ${(props) => (props.color ? props.color : '#fff')};
	border-radius: 5px;
	box-shadow: ${(props) =>
		props.color ? '0 2px 2px ' + props.color : '0 2px 2px rgb(0 0 0 / 15%)'};
	transition: 0.2s;
	text-align: center;
	padding: 1em;
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
          <CardItem color={color} className='card'>
            {children}
          </CardItem>
        </Link>
			) : (
        <a target="_blank" rel="noreferrer" href={href}>
          <CardItem color={color} className='card'>
            {children}
          </CardItem>
        </a>
			)}
		</CardContainer>
	)
}
