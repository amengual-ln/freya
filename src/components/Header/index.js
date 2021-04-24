import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: #fafafe;
  box-shadow: 0 3px 10px rgba(0,0,0,.1);
  margin-bottom: 3em;
  a {
    color: #202020;
    text-decoration: none;
  }
  h1 {
    margin: 0 0 1em 0;
    padding: 1rem;
  }
`

export default function Header () {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>Freya</h1>
      </Link>
    </StyledHeader>
  )
}