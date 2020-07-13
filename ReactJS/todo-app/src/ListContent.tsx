import React from 'react';
import { TodoItem } from './TodoItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface ListContentProps {
    item: TodoItem;
}

class ListContent extends React.Component<ListContentProps, {}> {
    public render(): JSX.Element {
        return (
            <Card>
                <Card.Body>
                    <Card.Text>{this.props.item.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ListContent;
