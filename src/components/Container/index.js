import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`

export default function Container ({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}