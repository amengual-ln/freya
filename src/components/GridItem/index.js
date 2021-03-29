import styled from "styled-components"

const Item = styled.div`
  background: ${props => props.color};
  text-align: center;
  color: white;
  border-radius: .5rem;
`

export default function GridItem ({ item }) {
  return (
    <Item color={item.color}>
      <h4>{item.name}</h4>
    </Item>
  )
}