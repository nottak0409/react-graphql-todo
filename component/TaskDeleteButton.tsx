import { gql, useMutation } from '@apollo/client'
import { Button } from '@chakra-ui/react'
import { AllTasksQuery } from './TaskList'

const DeleteTaskMutation = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

interface Props {
    TaskId: number
}

const TaskDeleteButton = (props: Props) => {
    const TaskId = props.TaskId

    const [deleteTask, { error }] = useMutation(DeleteTaskMutation, {
        refetchQueries: [AllTasksQuery],
    })

    const handleClick = (taskId: number) => {
        deleteTask({
            variables: {
                id: taskId,
            },
        })
    }
    if (error) return <p>Error: {error.message}</p>
    return (
        <Button onClick={() => handleClick(TaskId)}>
            削除
        </Button>
    )
}

export default TaskDeleteButton
