class TodoItem {
    constructor (id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
};

export const todoItemList = [
    new TodoItem(1, "First Item", "First Item Description"),
    new TodoItem(2, "Second Item", "Second Item Description"),
    new TodoItem(3, "Third Item", "Third Item Description"),
    new TodoItem(4, "Fourth Item", "Fourth Item Description"),
    new TodoItem(5, "Fifth Item", "Fifth Item Description")
];