import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";

const tasks = [
  {
    id: "1",
    status: "To do",
    title: "Una tarea",
    assigne: "Lautaro",
    project: "Cada día",
  },
  {
    id: "2",
    status: "To do",
    title: "Mover este hardcodeo horrible a una api",
    assigne: "Lautaro",
    project: "Freya",
  },
]

const briefcases = [
  {
    id: "1",
    name: "Personal",
    color: "#6fbfff",
  },
  {
    id: "2",
    name: "Upya",
    color: "#a7e9af",
  },
]

const projects = [
  {
    id: "1",
    name: "Freya",
    color: "#6fbfff",
  },
  {
    id: "2",
    name: "WebUP",
    color: "#301020",
  },
  {
    id: "3",
    name: "Autovisión",
    color: "#540668",
  },
]

export default function Home() {
  return (
    <>
      <List title="Eventos de hoy">
        {tasks.map((task) => (
          <ListItem item={task} key={task.id} />
        ))}
      </List>
      <br/>
      <Grid title="Portafolios" columns="6">
        {briefcases.map((briefcase) => (
          <GridItem item={briefcase} filled key={briefcase.id} />
        ))}
      </Grid>
      <Grid title="Proyectos" columns="8">
        {projects.map((project) => (
          <GridItem item={project} key={project.id} />
        ))}
      </Grid>
    </>
  );
}
