import { useSelector } from "react-redux";
import { getTasks } from "../../store/selectors/tasks";

import List from "../../components/List"
import ListItem from "../../components/ListItem"

export default function Tasks () {
  const tasks = useSelector(state => (getTasks(state)))

  return (
    <List title="Tareas!">
      {tasks.map((task) => (
        <ListItem item={task} show={["title","assigne", "project", "status"]} key={task.id} />
      ))}
    </List>
  )
}