import { TodoItem } from "../components/TodoItem"
import { AnyAction } from "redux"
import { ADD_ITEM, CLOSE_NEW_ITEM_MODAL, SELECT_ITEM, SHOW_NEW_ITEM_MODAL } from "../constants"

export function addItem(name: string, desc: string): AnyAction {
    return {
        type: ADD_ITEM,
        name,
        desc
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

export function closeNewItemModal(): AnyAction {
    return {
        type: CLOSE_NEW_ITEM_MODAL,
    }
}