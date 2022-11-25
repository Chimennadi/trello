import { createContext, useContext, FC, Dispatch } from "react"
import { appStateReducer, AppState, List, Task} from "./appStateReducer"
import { Action } from "./actions"
import { useImmerReducer } from "use-immer"
import { DragItem } from "../DragItem"

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

type AppStateContextProps = {
    lists: List[]
    draggedItem: DragItem | null
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c1", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c2", text: "Begin to use static typing" }]
        }
    ]
}


export const AppStateProvider: FC<any> = ({children}) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
  
    const { lists, draggedItem } = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}