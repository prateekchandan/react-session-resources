import React from 'react';
import {todoItemList, TodoItem} from "./TodoItem";
import ListItem from './ListItem';

interface ListStates{
    selectedId: number
    description: string;
}

class List extends React.Component<{}, ListStates> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedId: -1,
            description: ""
        };
    }

    public render(): JSX.Element {
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
  
    private getAllListItems(): JSX.Element[] {
        let listItems: JSX.Element[] = [];
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

    private onItemSelected = (item: TodoItem): void => {
        this.setState({
            selectedId: item.id,
            description: item.description
        })
    }
}

export default List;