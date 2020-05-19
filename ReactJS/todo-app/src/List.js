import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 }; // initialize state in constructor always!
    }

    render(props) {
        return (
            <div>
                <p>{this.state.value}</p> {/*Access state using this.state*/}
                <button onClick={this.addOne}>Add</button>
            </div>
        );
    }

    addOne = () => { // Arrow function to bind
        this.setState({ value: this.state.value + 1 });
    }
}

export default List;