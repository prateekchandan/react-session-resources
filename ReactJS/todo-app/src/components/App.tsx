import React from 'react';
import List from './List';
import { TodoItem } from './TodoItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

interface AppStates {
    todoItemList: TodoItem[];
}

class App extends React.Component<{}, AppStates> {
    public render(): JSX.Element {
        return (
            <Container>
                <Row>
                    <Col sm='12'>
                        <Alert variant='primary'>
                            There are total {this.state.todoItemList.length} Todo Items
                        </Alert>
                    </Col>
                </Row>
                <List />
            </Container>
        );
    }
}

export default App;
