import { useParams } from 'react-router';
import { useSelector } from "react-redux";
import { getBriefcase } from "../../store/selectors/briefcases";

export default function Briefcase () {
  const { id } = useParams();
  const briefcase = useSelector(state => getBriefcase(state, id));

  return (
    <h1>{ briefcase.name }</h1>
  )
}