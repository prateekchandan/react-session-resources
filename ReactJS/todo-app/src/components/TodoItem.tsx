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