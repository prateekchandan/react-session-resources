import React from 'react';

class ListItem extends React.Component {
    render() {
        if (this.props.isSelected) {
            return <span>
                {this.props.item.name}
            </span>
        }
        return <button onClick={this.onClick}>
            {this.props.item.name}
        </button>
    }

    onClick = () => {
        this.props.onSelected(this.props.item);
    }
}

export default ListItem;