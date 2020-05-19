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
            listItems.push(<ListItem name={item.name} isSelected={item.id == this.state.selectedId}/>)
         });
        return listItems;
    }
}

export default List;