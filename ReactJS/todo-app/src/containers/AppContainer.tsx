import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../store/store';

import App, {
    StateMappedProps
} from '../components/App';

export function mapStateToProps(state: AppState): StateMappedProps {
    return {
        todoItemList: state.itemList
    };
}

export default connect(
    mapStateToProps
)(App);
