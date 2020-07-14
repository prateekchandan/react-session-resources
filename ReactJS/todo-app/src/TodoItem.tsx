export class TodoItem {
    public id: number;
    public name: string;
    public description: string;
    public isComplete: boolean = false;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public toggleComplete(): void {
        this.isComplete = !this.isComplete;
    }
}

export const todoItemList: TodoItem[] = [
    new TodoItem(1, 'First Item', 'First Item Description'),
    new TodoItem(2, 'Second Item', 'Second Item Description'),
    new TodoItem(3, 'Third Item', 'Third Item Description'),
    new TodoItem(4, 'Fourth Item', 'Fourth Item Description'),
    new TodoItem(5, 'Fifth Item', 'Fifth Item Description')
];
