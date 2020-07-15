import React, { FormEvent } from 'react';
import { TodoItem } from './TodoItem';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewItemModal extends React.Component<{} /*props*/, {} /*states*/> {
    public render(): JSX.Element {
        return (
            <Modal
                show={true}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
                onHide={this.handleClose}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title id='contained-modal-title-vcenter'>
                            Add new Item
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            name='name'
                            placeholder='Todo Item Description'
                        />
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            name='desc'
                            placeholder='Todo Item Description'
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'>Submit</Button>
                        <Button onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    private handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        const data: FormData = new FormData(event.currentTarget);
        event.preventDefault();
        // Update store
        /*this.props.onItemAdded(
            new TodoItem(
                todoItemList.length + 1,
                data.get('name') as string,
                data.get('desc') as string
            )
        );*/
    };

    private handleClose = ():void => {
        // Update store
    }
}

export default NewItemModal;
