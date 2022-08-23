import {TasksStateType} from '../App';
import {v1} from "uuid";


export type RemoveTaskActionsType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskID:string
}
export type AddTaskActionsType = {
    type: 'ADD-TASK',
    title: string,
    todolistId: string
}


type ActionsType = RemoveTaskActionsType | AddTaskActionsType

export const tasksReducer = (state:TasksStateType, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":{
            const stateCopy={...state}
            const tasks=state[action.todolistId]
            const filteredTasks=tasks.filter(t=> t.id !== action.taskID)
            stateCopy[action.todolistId]=filteredTasks
            return stateCopy
        }
        case "ADD-TASK":{
            const stateCopy={...state}
            const tasks = stateCopy[action.todolistId]
            const newTask={id: v1(), title: action.title, isDone: false}
            const newTasks =[newTask, ...tasks]
            stateCopy[action.todolistId]=newTasks

            return stateCopy
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskID:string,todolistId: string): RemoveTaskActionsType => {
    return {type: 'REMOVE-TASK',taskID,  todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionsType => {
    return { type: 'ADD-TASK',title, todolistId}
}
