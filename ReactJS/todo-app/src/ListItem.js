import React from 'react';

class ListItem extends React.Component {
    render() {
        if (this.props.isSelected) {
            return <span>
                {this.props.name}
            </span>
        }
        return <button onClick={this.onClick}>
            {this.props.name}
        </button>
    }

    onClick = () => {
        this.props.onSelected(this.props.id);
    }
}

export default ListItem;