import React from 'react';
import {todoItemList} from "./TodoItem";

class List extends React.Component {
    render() {
        return <ul>
            {this.getAllListItems()}
        </ul>;
    }
  
    getAllListItems() {
        let listItems = [];
        todoItemList.forEach(item => {
            listItems.push(<li>{item.name}</li>)
         });
        return listItems;
    }
}

export default List;