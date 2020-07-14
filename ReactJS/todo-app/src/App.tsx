import React from 'react';
import List from './List';
import { todoItemList } from './TodoItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Container>
                <Row>
                    <Col sm='12'>
                        <Alert variant='primary'>
                            There are total {todoItemList.length} Todo Items
                        </Alert>
                    </Col>
                </Row>
                <List onListUpdated={() => this.setState({})} />
            </Container>
        );
    }
}

export default App;
