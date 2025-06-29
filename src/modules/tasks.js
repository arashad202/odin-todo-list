export class Task {
    constructor(title, description = '', dueDate = '', priority = 'low', done = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
    }

    toggleDone () {
        this.done = !this.done;
    }
}