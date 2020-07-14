import { createStore } from 'redux'
import { Reducer } from '../reducers/reducer'
import { TodoItem, todoItemList } from '../TodoItem'

export interface AppState {
    modalVisible: boolean;
    itemList: TodoItem[];
    selectedId: number | null;
}

export const initialState: AppState = {
    modalVisible: false,
    itemList: todoItemList,
    selectedId: null,
}

export const store = createStore(Reducer, initialState)