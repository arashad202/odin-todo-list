class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.id = crypto.randomUUID;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.done = false;
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

    setdueDate (dueDate) {
        this.dueDate = dueDate;
    }

    getdueDate () {
        return this.dueDate;
    }

    setPriority (priority) {
        this.priority = priority;
    }

    getPriority () {
        return this.priority;
    }

    setNotes (notes) {
        this.notes = notes;
    }

    getNotes () {
        return this.notes;
    }

    toggleDone() {
        this.done = !this.done;
    }
}

export {Task}