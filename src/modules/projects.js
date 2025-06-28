import { Task } from "./tasks";

const projects = [
    {
        title: "test_proj",
        description: "test_proj desciption",
        tasks: [
            {
                title: "task1",
                description: "describe task",
                dueDate: new Date("2025-08-01"),
                notes: "notes on task",
                checklist: [
                    {
                        cheklist1: "check 1"
                    }
                ]
            }
        ]
    }
]

class Project {
    constructor(title, description) {
        this.id = crypto.randomUUID;
        this.title = title;
        this.description = description;
        this.tasks = [];
    }

    setTitle (title) {
        this.title = title;
    }

    getTitle () {
        return this.title;
    }

    setDescription (description) {
        this.description = description;
    }

    getDescription () {
        return this.description
    }

    addTask(title, desciption, dueDate, priority, notes) {
        const myTask = new Task(title, desciption, dueDate, priority, notes);
        this.tasks.push(myTask);
    }

}

export {Project}