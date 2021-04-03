import { Link } from 'react-router-dom'
import styled from "styled-components"

const Item = styled.div`
  background: ${props => props.filled ? props.color : 'none'};
  border: 3px solid ${props => props.filled ? 'none' : props.color};
  text-align: center;
  color: ${props => props.filled ? 'white' : props.color};
  border-radius: .5rem;
  a {
    display: block;
    padding: 0.01rem 0;
    color: inherit;
    text-decoration: none;
  }
`

export default function GridItem ({ item, url, filled }) {
  return (
    <Item color={item.color} filled={filled}>
      <Link to={`/${url}/${item.id}`}>
        <h4>{item.name}</h4>
      </Link>
    </Item>
  )
}