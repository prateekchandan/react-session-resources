import React from 'react';
import {todoItemList} from "./TodoItem";
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        return <ul>
            {this.getAllListItems()}
        </ul>;
    }
  
    getAllListItems() {
        let listItems = [];
        todoItemList.forEach(item => {
            listItems.push(<ListItem name={item.name}/>)
         });
        return listItems;
    }
}

export default List;