import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`

export default function List ({title, children}) {
  return(
    <article>
      <h2>{ title }</h2>
      <StyledTable>
        <tbody>
          {children}
        </tbody>
      </StyledTable>
    </article>
  )
}