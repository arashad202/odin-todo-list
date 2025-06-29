export function renderProjectList (projects, selectedProject) {
    const projectList = document.querySelector("#projectList");
    projectList.innerHTML = '';
    projects.forEach(p => {
        const li = document.createElement("li");
        li.className = `mb-2 hover:cursor-pointer hover:underline ${p.title === selectedProject ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`;
        li.dataset.project = p.title;
        projectList.appendChild(li);
    });
}

export function renderTaskList (project) {
    const title = document.querySelector("#project-title");
    title.textContent = project.title;

    const tasks_container = document.querySelector(".tasks_container");
    project.tasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "task_card border border-black rounded-2xl w-70 h-70 p-3 grid grid-cols-1 grid-rows-5";
        const title = document.createElement("h3");
        title.className = "font-bold";
        title.textContent = task.title;
        const description = document.createElement("p");
        description.textContent = `Description: ${task.description}`;
        const dueDate = document.createElement("p");
        dueDate.textContent = `Due Date: ${task.description}`;
        const priority = document.createElement("p");
        priority.textContent = `Priority: ${task.priority}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "taskDone w-[100%] self-center mx-auto mt-4  px-2 rounded-3xl bg-blue-800 text-white hover:bg-blue-600 hover:cursor-pointer";
        deleteBtn.textContent = "Done"
        card.append(title, description, priority, dueDate, deleteBtn);
        tasks_container.appendChild(card);
    })
}

export {renderProjectList, renderTaskList}