import MainLayout from "../../layouts/MainLayout";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

const tasks = [
  {
    id: "1",
    status: "To do",
    title: "A task",
    assigne: "Lautaro",
    project: "Personal",
  },
  {
    id: "2",
    status: "To do",
    title: "Remove this hardcoded tasks",
    assigne: "Lautaro",
    project: "Freya",
    dueDate: "Yesterday!"
  },
]

export default function Home() {
  return (
    <MainLayout>
      <List title="Eventos de hoy">
        {tasks.map((task) => (
          <ListItem item={task} />
        ))}
      </List>
    </MainLayout>
  );
}
