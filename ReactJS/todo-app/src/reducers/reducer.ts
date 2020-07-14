import { AnyAction } from "redux";
import { AppState, initialState } from "../store/store";
import { ADD_ITEM, SELECT_ITEM, SHOW_NEW_ITEM_MODAL } from "../constants";
import { TodoItem } from "../TodoItem";

export function Reducer(
    state: AppState = initialState,
    action: AnyAction
): AppState {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                itemList: [...state.itemList, action.item],
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
