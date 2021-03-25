import styled from 'styled-components'

const StyledHeader = styled.header`
  box-shadow: 0 5px 50px rgba(0,0,0,.2);
  h1 {
    margin: 0 0 1em 0;
    padding: 1rem;
  }
`

export default function Header () {
  return (
    <StyledHeader>
      <h1>Freya</h1>
    </StyledHeader>
  )
}