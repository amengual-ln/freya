import styled from "styled-components"

const Item = styled.div`
  background: ${props => props.filled ? props.color : 'none'};
  border: 3px solid ${props => props.filled ? 'none' : props.color};
  text-align: center;
  color: ${props => props.filled ? 'white' : props.color};
  border-radius: .5rem;
`

export default function GridItem ({ item, filled }) {
  return (
    <Item color={item.color} filled={filled}>
      <h4>{item.name}</h4>
    </Item>
  )
}