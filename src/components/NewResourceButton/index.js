import { useDispatch } from 'react-redux'
import { createResource } from '../../store/reducers/resources'
import styled from 'styled-components'

const NewResource = styled.button`
	all: unset;
	text-align: center;
	background: #fff;
	color: #202020;
	cursor: pointer;
	transition: 0.2s;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
	padding: 1em;

	&:hover {
		transform: translateY(-5px);
	}
`

export default function NewResourceButton({ collection }) {
	const dispatch = useDispatch()

	const newResource = () => {
		if (collection) { dispatch(createResource(collection)) }
	}

	return <NewResource onClick={newResource}>Nuevo +</NewResource>
}
