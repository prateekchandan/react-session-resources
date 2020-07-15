import React from "react";
import { TodoItem } from "./TodoItem";
import ListItem from "./ListItem";
import ListItemCard from "./ListItemCard";
import NewItemModal from "../containers/NewItemModalContainer";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export interface StateMappedProps {
    isModalVisible: boolean;
    selectedItem?: TodoItem;
    todoItemList: TodoItem[];
}

export interface DispatchMappedProps {
    showModal: () => void;
    onSelected: (id: number) => void
}

type ListProps = StateMappedProps & DispatchMappedProps

class List extends React.Component<ListProps, {}> {
    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {this.getAllListItems()}
                            <ListGroup.Item
                                variant="success"
                                onClick={this.showAddNewItemModal}
                            >
                                + Add new Item
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        {this.props.selectedItem && (
                            <ListItemCard item={this.props.selectedItem} />
                        )}
                    </Col>
                </Row>
                {this.props.isModalVisible && <NewItemModal />}
            </React.Fragment>
        );
    }

    private getAllListItems = (): JSX.Element[] => {
        return this.props.todoItemList.map((item) => {
            return (
                <ListItem
                    key={item.id}
                    item={item}
                    isSelected={
                        this.props.selectedItem !== undefined &&
                        item.id == this.props.selectedItem.id
                    }
                    onSelected={this.props.onSelected}
                />
            );
        });
    };

    private showAddNewItemModal = (): void => {
        // update store
        this.props.showModal();
    };
}

export default List;
