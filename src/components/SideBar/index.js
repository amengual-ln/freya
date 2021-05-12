import { Link } from "react-router-dom";

import styled from 'styled-components'

const Aside = styled.aside`
  position: fixed;
  height: 91.83vh;
  li {
    list-style: none;
    margin: 2em 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    padding: 1em 0;
  }
`

export default function SideBar () {
  return (
    <Aside>
      <ul>
        <li>
          <Link to="/tasks">Tareas</Link>
        </li>
        <li>
          <Link to="/briefcases">Portafolios</Link>
        </li>
        <li>
          <Link to="/projects">Proyectos</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/resources">Recursos</Link>
        </li>
        <li>
          <Link to="/vault">&nbsp;</Link>
        </li>
      </ul>
    </Aside>
  )
}