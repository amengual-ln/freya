import { Link } from 'react-router-dom'
import styled from "styled-components"

const Doc = styled.div`
  text-align: center;
  color: #202020;
  transition: .2s;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  &:hover {
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