import React from 'react';
import {todoItemList} from "./TodoItem";
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: -1
        };
    }

    render() {
        return (
        <React.Fragment>
            <ul>
                {this.getAllListItems()}
            </ul>
            {this.state.description && <div>
                {this.state.description}
            </div>
            }
        </React.Fragment>
        );
    }
  
    getAllListItems() {
        let listItems = [];
        todoItemList.forEach(item => {
            listItems.push(
            <ListItem 
                item={item}
                isSelected={item.id == this.state.selectedId}
                onSelected={this.onItemSelected}
            />);
         });
        return listItems;
    }

    onItemSelected = (item) => {
        this.setState({
            selectedId: item.id,
            description: item.description
        })
    }
}

export default List;