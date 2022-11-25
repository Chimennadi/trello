import { useRef } from "react"
import { ColumnContainer, ColumnTitle } from "./styles"
import  AddNewItem  from "./AddNewItem"
import { useAppState } from "./state/AppStateContext"
import  Card  from "./Card"
import { addTask } from "./state/actions"
import { useItemDrag } from "./utils/useItemDrag"

type ColumnProps = {
    text: string,
    children?: React.ReactNode
    id: string
}

function Column ( props: ColumnProps) {
    const { text, id } = props
    const { getTasksByListId, dispatch, draggedItem } = useAppState()

    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)

    
    const drag = useItemDrag({ type: "COLUMN", id, text })
    
    drag(ref)

    return (
        <ColumnContainer ref={ref}>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem 
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}

export default Column