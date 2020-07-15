import { TodoItem } from "../components/TodoItem"
import { AnyAction } from "redux"
import { ADD_ITEM, SELECT_ITEM, SHOW_NEW_ITEM_MODAL } from "../constants"

export function addItem(item: TodoItem): AnyAction {
    return {
        type: ADD_ITEM,
        item
    }
}

export function selectItem(id: number): AnyAction {
    return {
        type: SELECT_ITEM,
        id
    }
}

export function showNewItemModal(): AnyAction {
    return {
        type: SHOW_NEW_ITEM_MODAL,
    }
}