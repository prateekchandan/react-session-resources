import React from 'react';
import {todoItemList} from "./TodoItem";
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 3
        };
    }

    render() {
        return <ul>
            {this.getAllListItems()}
        </ul>;
    }
  
    getAllListItems() {
        let listItems = [];
        todoItemList.forEach(item => {
            listItems.push(
            <ListItem 
                id={item.id}
                name={item.name} 
                isSelected={item.id == this.state.selectedId}
                onSelected={this.onItemSelected}
            />);
         });
        return listItems;
    }

    onItemSelected = (id) => {
        this.setState({
            selectedId: id
        })
    }
}

export default List;