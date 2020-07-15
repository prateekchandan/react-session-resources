import React from 'react';
import { TodoItem } from './TodoItem';
import ListGroup from 'react-bootstrap/ListGroup';

export interface ListItemProps {
    isSelected: boolean;
    item: TodoItem;
    onSelected: (id: number) => void
}

class ListItem extends React.Component<ListItemProps, {}> {
    public render(): JSX.Element {
        return (
            <ListGroup.Item
                variant={this.props.isSelected ? 'primary' : ''}
                onClick={this.onClick}
                key={this.props.item.id}
            >
                {this.props.item.isComplete ? '✅' : '❌'}{' '}
                {this.props.item.name}
            </ListGroup.Item>
        );
    }

    private onClick = (): void => {
        this.props.onSelected(this.props.item.id)
    };
}

export default ListItem;
