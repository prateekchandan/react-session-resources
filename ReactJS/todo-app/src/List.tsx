import React from 'react';
import { todoItemList, TodoItem } from './TodoItem';
import ListItem from './ListItem';
import ListItemCard from './ListItemCard';
import NewItemModal from './NewItemModal';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface ListStates {
    showAdditionModal: boolean
    selectedItem?: TodoItem;
}

class List extends React.Component<{}, ListStates> {
    constructor(props: {}) {
        super(props);
        this.state = {
            showAdditionModal: false
        };
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {this.getAllListItems()}
                        <ListGroup.Item variant="success" onClick={this.addNewItem}>
                            + Add new Item
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    {this.state.selectedItem && (
                        <ListItemCard item={this.state.selectedItem} />
                    )}
                </Col>
            </Row>
            {this.state.showAdditionModal && <NewItemModal 
                    onModalClosed = {() => {this.setState({...this.setState, showAdditionModal: false})}}
                    onItemAdded = {(item: TodoItem) => {
                        todoItemList.push(item);
                        this.setState({...this.setState, showAdditionModal: false});
                    }}
                />}
            </React.Fragment>
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
            ...this.state,
            selectedItem: item
        });
    };

    private addNewItem = (): void => {
        this.setState({
            ...this.state,
            showAdditionModal: true
        });
    }
}

export default List;