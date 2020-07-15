import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../store/store";

import NewItemModal, { DispatchMappedProps } from "../components/NewItemModal";
import { addItem, closeNewItemModal } from "../actions/action-creators";

export function mapDispatchToProps(dispatch: Dispatch): DispatchMappedProps {
    return {
        submit: (name: string, desc: string) => {dispatch(addItem(name, desc))},
        closeModal: () => {dispatch(closeNewItemModal())}
    }
}

export default connect(null, mapDispatchToProps)(NewItemModal);
