import { useSelector } from "react-redux";
import { getTasksAndProject } from "../../store/selectors/tasks";

import AddTaskForm from "../../components/AddTaskForm"
import { List } from "../../components/List"
import { ListItem } from "../../components/ListItem"
import { Dropdown } from '../../components/Dropdown'

export default function Tasks () {
  const tasks = useSelector(state => getTasksAndProject(state))

  return (
    <section>
				<h2>Tareas</h2>
        <AddTaskForm />
        <hr />
				<List>
					{tasks.map((task) => (
						<ListItem key={task.id}>
              <div>
                <span className={`px-4 py-1.5 bg-${task.project ? task.project.color : 'white'} text-white rounded`}>{task.project?.name}</span>
                <span className="px-4">{task.description}</span>
              </div>
              <div>
                <span className="px-4">{task.status}</span>
                <Dropdown taskId={task.id} />
              </div>
						</ListItem>
					))}
				</List>
			</section>
  )
}