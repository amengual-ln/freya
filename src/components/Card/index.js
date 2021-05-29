import { Link } from "react-router-dom";
import styled from "styled-components";

const CardItem = styled.div`
  color: ${(props) => (props.color ? "#fafafa" : "#202020")};
  background: ${(props) => props.color ? props.color : "#fff"};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.color ? "0 2px 2px " + props.color : "0 2px 2px rgb(0 0 0 / 15%)"};
  transition: 0.2s;
  text-align: center;
  padding: 1em;
  &:hover {
    box-shadow: ${(props) =>
      props.color ? "0 4px 4px " + props.color : "0 4px 4px rgb(0 0 0 / 15%)"};
    transform: translateY(-5px);
  }
`;

export default function Card({ children, to, color }) {
  return (
    <Link to={to}>
      <CardItem color={color}>{children}</CardItem>
    </Link>
  );
}
