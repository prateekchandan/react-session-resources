import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../store/store";

import List, { StateMappedProps, DispatchMappedProps } from "../components/List";
import { showNewItemModal, selectItem } from "../actions/action-creators";

export function mapStateToProps(state: AppState): StateMappedProps {
    const selectedItem =
        state.selectedId >= 0 ? state.itemList[state.selectedId] : undefined;
    return {
        isModalVisible: state.modalVisible,
        selectedItem: selectedItem,
        todoItemList: state.itemList,
    };
}

export function mapDispatchToProps(dispatch: Dispatch): DispatchMappedProps {
    return {
        showModal: () => {dispatch(showNewItemModal())},
        onSelected: (id: number) => { dispatch(selectItem(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
