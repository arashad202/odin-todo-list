
import {Project} from "./projects";

const nav = document.createElement('nav');
nav.classList.add("h-screen", "border", "border-black", "bg-gray-100");

const heading = document.createElement("h2");
heading.classList.add("text-2xl", "font-bold", "py-2", "px-2");
heading.textContent = "Projects";
nav.appendChild(heading);

const addProjectBtn = document.createElement("button");
addProjectBtn.classList.add("py-2", "px-2", "rounded-r-md", "hover:bg-black", "hover:text-white");
addProjectBtn.textContent = "Add Project +"
nav.appendChild(addProjectBtn);

const projectList = document.createElement("ul");
nav.appendChild(projectList);

addProjectBtn.addEventListener("click", () => {
    const myProject = new Project();

    const list_item = document.createElement("li");
    list_item.classList.add("px-2", "my-2")
    list_item.textContent = myProject.getTitle();

    projectList.appendChild(list_item);
})

export { nav }