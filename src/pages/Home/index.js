import { connect } from "react-redux";
import { getTasks } from "../../store/selectors/tasks";
import { getProjects } from "../../store/selectors/projects";
import { getBriefcases } from "../../store/selectors/briefcases";

import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";

function Home({ tasks, projects, briefcases }) {
  return (
    <>
      <List title="Eventos de hoy">
        {tasks.map((task) => (
          <ListItem item={task} show={["title","assigne", "project", "status"]} key={task.id} />
        ))}
      </List>
      <br />
      <Grid title="Portafolios" columns="6">
        {briefcases.map((briefcase) => (
          <GridItem item={briefcase} url="briefcase" filled key={briefcase.id} />
        ))}
      </Grid>
      <Grid title="Proyectos" columns="7">
        {projects.map((project) => (
          <GridItem item={project} url="project" filled key={project.id} />
        ))}
      </Grid>
    </>
  );
}

export default connect((state) => ({
  tasks: getTasks(state),
  projects: getProjects(state),
  briefcases: getBriefcases(state),
}))(Home);
