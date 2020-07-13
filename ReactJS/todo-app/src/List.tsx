import React from 'react';
import { todoItemList, TodoItem } from './TodoItem';
import ListItem from './ListItem';
import ListContent from './ListContent';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface ListStates {
    selectedItem?: TodoItem;
}

class List extends React.Component<{}, ListStates> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <Row>
                <Col sm={4}>
                    <ListGroup>{this.getAllListItems()}</ListGroup>
                </Col>
                <Col sm={8}>
                    {this.state.selectedItem && (
                        <ListContent item={this.state.selectedItem} />
                    )}
                </Col>
            </Row>
        );
    }

    private getAllListItems(): JSX.Element[] {
        let listItems: JSX.Element[] = [];
        todoItemList.forEach((item) => {
            listItems.push(
                <ListItem
                    item={item}
                    isSelected={
                        this.state.selectedItem !== undefined &&
                        item.id == this.state.selectedItem.id
                    }
                    onSelected={this.onItemSelected}
                />
            );
        });
        return listItems;
    }

    private onItemSelected = (item: TodoItem): void => {
        this.setState({
            selectedItem: item
        });
    };
}

export default List;