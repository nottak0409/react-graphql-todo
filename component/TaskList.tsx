import { gql, useQuery } from '@apollo/client'
import { List, ListItem, Button } from '@chakra-ui/react'
import TaskDeleteButton from './TaskDeleteButton'

export const AllTasksQuery = gql`
    query {
        tasks {
            id
            title
            done
        }
    }
`

const TaskList: React.FC = () => {
    const { data, loading, error } = useQuery(AllTasksQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <List>
            {data.tasks.map(task => (
                <ListItem key={task.id}>
                    <div className="flex justify-between w-full space-y-2">
                        <div className="flex items-center">
                            <input type="checkbox" checked={task.done}/>
                            <span className="ml-2 text-lg">
                                {task.title}
                            </span>
                        </div>
                        <TaskDeleteButton
                            TaskId={task.id}
                        />
                    </div>
                </ListItem>
            ))}
        </List>
    )
}

export default TaskList
