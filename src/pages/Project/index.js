import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getProject } from "../../store/selectors/projects";
import { getProjectTasks } from "../../store/selectors/tasks"

import { List } from "../../components/List"
import { ListItem } from "../../components/ListItem"
import { Dropdown } from "../../components/Dropdown"

export default function Briefcase () {
  const { id } = useParams();
  const project = useSelector(state => getProject(state, id));
  const projectTasks = useSelector(state => getProjectTasks(state, id));

  return (
    <section>
      <h2>{ project.name }</h2>
      <br />
      <p>{ project.description }</p>
      <br />
      <h3>Tareas</h3>
      <List>
        { projectTasks.length === 0 && 
          <div className="text-center">
            <span>No hay tareas pendientes en este proyecto</span>
          </div>
        }
        { projectTasks.map((task) => (
            <ListItem key={task.id}>
              <div>
                  <span className="px-4">{task.description}</span>
                </div>
                <div>
                  <span className="px-4">{task.status}</span>
                  <Dropdown />
                </div>
            </ListItem>
          ))
        }
      </List>
    </section>
  )
}