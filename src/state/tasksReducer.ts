import {TasksStateType} from '../App';


export type ActionsType1 = {
    type: '1',
    id: string
}
export type ActionsType2 = {
    type: '2',
    title: string
}


type ActionsType = ActionsType1 | ActionsType2

export const tasksReducer = (state:TasksStateType, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case "1":{
            return {...state}
        }
        case "2":{
            return {...state}
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const action1AC = (todolistId: string): ActionsType1 => {
    return { type: '1', id: todolistId}
}
export const action2AC = (title: string): ActionsType2 => {
    return { type: '2', title: title}
}
