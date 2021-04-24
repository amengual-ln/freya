import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`

export default function Container ({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}