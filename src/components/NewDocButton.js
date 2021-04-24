import { useDispatch } from "react-redux";
import { SaveNewDoc } from "../store/reducers/docs"
import styled from "styled-components";

const NewDoc = styled.button`
  all: unset;
  text-align: center;
  background: #fff;
  color: #202020;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
  padding: 1em;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default function NewDocButton() {
  const dispatch = useDispatch();

  const newDoc = () => {
    dispatch(SaveNewDoc())
    
  };

  return <NewDoc onClick={newDoc}>Nuevo +</NewDoc>;
}
