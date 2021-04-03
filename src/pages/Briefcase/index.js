import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getBriefcase } from "../../store/selectors/briefcases";
import { getBriefcaseProjects } from "../../store/selectors/projects"

import List from "../../components/List"
import ListItem from "../../components/ListItem"

export default function Briefcase () {
  const { id } = useParams();
  const briefcase = useSelector(state => getBriefcase(state, id));
  const briefcaseProjects = useSelector(state => getBriefcaseProjects(state, id));

  return (
    <List title={ briefcase.name }>
      {briefcaseProjects.map((project) => (
        <ListItem item={project} show={["name"]} key={project.id} />
      ))}
    </List>
  )
}