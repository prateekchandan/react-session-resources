import React from 'react';
import { TodoItem } from './TodoItem';
import ListItem from './ListItem';
import ListItemCard from './ListItemCard';
import NewItemModal from './NewItemModal';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface ListStates {
    showAdditionModal: boolean;
    selectedItem?: TodoItem;
    todoItemList: TodoItem[];
}

interface ListProps {
}

class List extends React.Component<ListProps, ListStates> {
    constructor(props: ListProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {this.getAllListItems()}
                            <ListGroup.Item
                                variant='success'
                                onClick={this.showAddNewItemModal}
                            >
                                + Add new Item
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        {this.state.selectedItem && (
                            <ListItemCard
                                item={this.state.selectedItem}
                            />
                        )}
                    </Col>
                </Row>
                {this.state.showAdditionModal && (
                    <NewItemModal/>
                )}
            </React.Fragment>
        );
    }

    private getAllListItems = (): JSX.Element[] => {
        let listItems: JSX.Element[] = [];
        this.state.todoItemList.forEach((item) => {
            listItems.push(
                <ListItem
                    item={item}
                    isSelected={
                        this.state.selectedItem !== undefined &&
                        item.id == this.state.selectedItem.id
                    }
                />
            );
        });
        return listItems;
    }

    private showAddNewItemModal = (): void => {
        // update store
    };
}

export default List;
