import { AnyAction } from "redux";
import { AppState, initialState } from "../store/store";
import { ADD_ITEM, CLOSE_NEW_ITEM_MODAL, SELECT_ITEM, SHOW_NEW_ITEM_MODAL } from "../constants";
import { TodoItem } from "../components/TodoItem";

export function Reducer(
    state: AppState = initialState,
    action: AnyAction
): AppState {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemList: [...state.itemList, new TodoItem(state.itemList.length, action.name, action.desc)],
                modalVisible: false,
            };
        case SELECT_ITEM:
            return {
                ...state,
                selectedId: action.id,
            };
        case SHOW_NEW_ITEM_MODAL:
            return {
                ...state,
                modalVisible: true
            }
        case CLOSE_NEW_ITEM_MODAL:
            return {
                ...state,
                modalVisible: false
            }
        default:
            return state;
    }
}

//    action --->--------<-----old state
//                  |
//                  |
//                  |
//                  v
//              New State
