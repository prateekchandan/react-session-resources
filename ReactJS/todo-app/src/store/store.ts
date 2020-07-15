import { createStore } from 'redux'
import { Reducer } from '../reducers/reducer'
import { TodoItem } from '../components/TodoItem'
// add default todo items

const todoItemList: TodoItem[] = [
    new TodoItem(0, 'First Item', 'First Item Description'),
    new TodoItem(1, 'Second Item', 'Second Item Description'),
    new TodoItem(2, 'Third Item', 'Third Item Description'),
    new TodoItem(3, 'Fourth Item', 'Fourth Item Description'),
    new TodoItem(4, 'Fifth Item', 'Fifth Item Description')
];

export interface AppState {
    modalVisible: boolean;
    itemList: TodoItem[];
    selectedId: number;
}

export const initialState: AppState = {
    modalVisible: false,
    itemList: todoItemList,
    selectedId: -1,
}

export const store = createStore(Reducer, initialState)