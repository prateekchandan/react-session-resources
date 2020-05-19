import React from 'react';

class ListItem extends React.Component {
    render() {
        if (this.props.isSelected) {
            return <span>
                {this.props.name};
            </span>
        }
        return <button>
            {this.props.name}
        </button>
    }
}

export default ListItem;