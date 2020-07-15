import React from 'react';
import { TodoItem } from './TodoItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface ListItemCardProps {
    item: TodoItem;
}

class ListItemCard extends React.Component<ListItemCardProps, {}> {
    public render(): JSX.Element {
        return (
            <Card>
                <Card.Title>{this.props.item.name}</Card.Title>
                <Card.Body>
                    <Card.Text>{this.props.item.description}</Card.Text>
                    {this.props.item.isComplete ? (
                        <Button variant='success' onClick={this.toggleComplete}>
                            Mark InComplete
                        </Button>
                    ) : (
                        <Button variant='warning' onClick={this.toggleComplete}>
                            Complete
                        </Button>
                    )}
                </Card.Body>
            </Card>
        );
    }

    private toggleComplete = (): void => {
        // Update store
    };
}

export default ListItemCard;
