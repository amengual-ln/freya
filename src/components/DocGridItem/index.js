import { Link } from 'react-router-dom'
import styled from "styled-components"

const Doc = styled.div`
  color: #202020;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 15%);
  transition: .2s;
  text-align: center;
  &:hover {
    box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
    transform: translateY(-5px);
  }
  a {
    display: block;
    padding: 0.01rem 0;
    color: inherit;
    text-decoration: none;
  }
`

export default function DocGridItem ({ doc, url }) {
  const title = doc.title.replace(/(<([^>]+)>)/ig, '');
  return (
    <Doc>
      <Link to={`/${url}/${doc.id}`}>
        <h4>{title}</h4>
      </Link>
    </Doc>
  )
}