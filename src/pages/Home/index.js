import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";

const tasks = [
  {
    id: "1",
    status: "To do",
    title: "A task",
    assigne: "Lautaro",
    project: "Day to day",
  },
  {
    id: "2",
    status: "To do",
    title: "Remove this hardcoded tasks",
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
          <GridItem item={briefcase} key={briefcase.id} />
        ))}
      </Grid>
    </>
  );
}
