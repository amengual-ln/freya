import styled from 'styled-components'

const Item = styled.li`
  	display: flex;
  	align-items: center;
  	justify-content: space-between;
	background: #fff;
	border-radius: 0.5rem;
	list-style: none;
	padding: 0.75rem;
	margin: 0.5rem 0;
`

export const ListItem = ({ children }) => {
	return (
		<Item>
			{children}
		</Item>
	)
}
