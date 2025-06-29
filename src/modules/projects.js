export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(idx) {
        this.tasks.splice(idx,1);
    }
}

export {Project}