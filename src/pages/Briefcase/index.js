import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getBriefcase } from "../../store/selectors/briefcases";
import { getBriefcaseProjects } from "../../store/selectors/projects"

import { Grid } from "../../components/Grid"
import GridItem from "../../components/GridItem"

export default function Briefcase () {
  const { id } = useParams();
  const briefcase = useSelector(state => getBriefcase(state, id));
  const briefcaseProjects = useSelector(state => getBriefcaseProjects(state, id));

  return (
    <section>
      <h2>{ briefcase.name }</h2>
      <br />
      <p>{ briefcase.description }</p>
      <Grid>
        {briefcaseProjects.map((project) => (
          <GridItem 
            key={project.id}
            url="project"
            item={project}
            >
            {project.name}
          </GridItem>
        ))}
      </Grid>
    </section>
  )
}