import { Link } from "react-router-dom";
import styled from "styled-components";

const CardItem = styled.div`
  color: #202020;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 15%);
  transition: 0.2s;
  text-align: center;
  padding: 1em;
  &:hover {
    box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
    transform: translateY(-5px);
  }
`;

export default function Card ({children, to}) {
  return (
    <Link to={to}>
      <CardItem>
        {children}
      </CardItem>
    </Link>
  );
}
