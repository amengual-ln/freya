import { List } from '../../../../components/List'
import { ListItem } from '../../../../components/ListItem'
import { Task } from '../../../../components/Task'

export const TaskGroup = ({ tasks }) => {
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <Task task={task}>
                        <div>
                            {task.project &&
                                <span
                                    className={`px-4 py-1.5 bg-${task.project.color ?? 'gray-300'
                                        } text-white rounded`}
                                >
                                    {task.project?.name}
                                </span>
                            }
                            <span className="px-4">{task.description}</span>
                        </div>
                    </Task>
                </ListItem>
            ))}
        </List>
    )
}