import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getProject } from '../../store/selectors/projects'
import { getProjectTasks } from '../../store/selectors/tasks'

import { modifyResource } from '../../store/reducers/resources'

import { Toggle } from '../../components/atoms/Toggle'
import { Collapsible } from '../../components/atoms/Collapsible'
import { TaskGroup } from '../../components/TaskGroup'

export default function Project() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const project = useSelector(state => getProject(state, id))
  const projectTasks = useSelector(state => getProjectTasks(state, id))

  const toggleProjectStatus = (enabled) => {
    dispatch(modifyResource('projects', id, {
      ...project,
      active: enabled
    }))
  }

  return (
    <section>
      <header className="flex justify-between items-center">
        <h2>{project.name}</h2>
        <Toggle handleToggle={toggleProjectStatus} initial={project.active} color={project.color} />
      </header>
      <br />
      <p>{project.description}</p>
      <br />
      <h3>Tareas</h3>
      <Collapsible title="WIP" isOpen={projectTasks.wip.length > 0}>
        <TaskGroup tasks={projectTasks.wip} />
      </Collapsible>
      <hr className="mt-4" />
      <Collapsible title="TO DO" isOpen={projectTasks.todo.length > 0}>
        <TaskGroup tasks={projectTasks.todo} />
      </Collapsible>
      <hr className="mt-4" />

      <Collapsible title="DONE" isOpen={projectTasks.done.length > 0}>
        <TaskGroup tasks={projectTasks.done} />
      </Collapsible>
    </section>
  )
}