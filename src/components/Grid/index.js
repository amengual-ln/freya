import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${props => props.itemWidth });
  gap: 2em;
  justify-content: center;
  margin-bottom: 1rem;
`

export default function Grid ({title, itemWidth = '200px', children}) {
  return (
    <section>
      <h2>{ title }</h2>
      <GridContainer itemWidth={ itemWidth } id="grid">
        { children }
      </GridContainer>
    </section>
  )
}