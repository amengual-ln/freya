import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 2em;
`

export default function Grid ({title, columns = 4, children}) {
  return (
    <section>
      <h2>{ title }</h2>
      <GridContainer columns={ columns }>
        { children }
      </GridContainer>
    </section>
  )
}