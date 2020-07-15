import React from 'react';
import { TodoItem } from './TodoItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import List from '../containers/ListContainer';

export interface StateMappedProps {
    todoItemList: TodoItem[];
}

class App extends React.Component<StateMappedProps, {}> {
    public render(): JSX.Element {
        return (
            <Container>
                <Row>
                    <Col sm='12'>
                        <Alert variant='primary'>
                            There are total {this.props.todoItemList.length} Todo Items
                        </Alert>
                    </Col>
                </Row>
                <List />
            </Container>
        );
    }
}

export default App;
