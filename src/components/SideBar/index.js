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
          <Link to="/portafolios">Portafolios</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/notas">Notas</Link>
        </li>
      </ul>
    </Aside>
  )
}