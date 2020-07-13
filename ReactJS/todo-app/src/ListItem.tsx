import React from 'react';
import { TodoItem } from './TodoItem';

export interface ListItemProps {
    isSelected: boolean;
    item: TodoItem;
    onSelected: (item: TodoItem) => void;
}

class ListItem extends React.Component<ListItemProps, {}> {
    public render(): JSX.Element {
        if (this.props.isSelected) {
            return <span>
                {this.props.item.name}
            </span>
        }
        return <button onClick={this.onClick}>
            {this.props.item.name}
        </button>
    }

    private onClick = (): void => {
        this.props.onSelected(this.props.item);
    }
}

export default ListItem;