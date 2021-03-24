import styled from "styled-components"

const Item = styled.tr`
  border-bottom: 1px solid rgba(0,0,0,.2);
  td {
    padding: 10px;
  }
`

export default function ListItem ({item}) {
  return (
    <Item>
      <td>{item.status}</td>
      <td>{item.title}</td>
      <td>{item.assigne}</td>
      <td>{item.project}</td>
      <td>{item.dueDate}</td>
    </Item>
  )
}