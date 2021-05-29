import Card from "../Card"
import styled from "styled-components"

const Item = styled.div`
  background: ${props => props.filled ? props.color : 'none'};
  border: 3px solid ${props => props.filled ? 'none' : props.color};
  text-align: center;
  color: ${props => props.filled ? 'white' : props.color};
  border-radius: .5rem;
  transition: .2s;
  &:hover {
    box-shadow: 0 5px 10px ${props => props.color};
    transform: translateY(-3px);
  }
  a {
    display: block;
    padding: 0.01rem 0;
    color: inherit;
    text-decoration: none;
  }
`

export default function GridItem ({ item, url, filled }) {
  return (
    <Card to={`/${url}/${item.id}`} color={item.color}>
      <h4>{item.name}</h4>
    </Card>
  )
}