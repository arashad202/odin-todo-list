import "./styles.css";
import { Task } from "./modules/tasks.js";
import { Project } from "./modules/projects.js";
import { saveProjects, loadProjects } from "./modules/storage.js";
import { renderProjectList, renderTaskList } from "./modules/dom.js";

let projects = loadProjects();
let selectedProject;

// Restore class instances
function hydrate(data) {
  return data.map((p) => {
    const proj = new Project(p.title);
    proj.tasks = p.tasks.map(
      (t) => new Task(t.title, t.description, t.dueDate, t.priority, t.done)
    );
    return proj;
  });
}

if (projects.length) {
  projects = hydrate(projects);
} else {
  const inbox = new Project("Inbox");
  inbox.addTask(new Task("Welcome!", "Start by adding tasks!", "", "low"));
  projects = [inbox];
}

selectedProject = projects[0];
renderProjectList(projects, selectedProject.title);
renderTaskList(selectedProject);

// Project click
document.querySelector("#projectList").addEventListener("click", (e) => {
  const name = e.target.dataset.project;
  if (name) {
    selectedProject = projects.find((p) => p.title === name);
    renderProjectList(projects, name);
    renderTaskList(selectedProject);
  }
});

// Task "Done" button
document.querySelector(".tasks_container").addEventListener("click", (e) => {
  if (e.target.classList.contains("taskDone")) {
    const idx = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);
    selectedProject.removeTask(idx);
    saveProjects(projects);
    renderTaskList(selectedProject);
  }
});

// Add project
document.getElementById("addPorject").addEventListener("click", () => {
  document.getElementById("project-name").value = "";
  document.getElementById("project-dialog").showModal();
});

document.getElementById("submit-project").addEventListener("click", () => {
  const name = document.getElementById("project-name").value.trim();
  if (!name || projects.some((p) => p.title === name)) return;
  const newP = new Project(name);
  projects.push(newP);
  selectedProject = newP;
  saveProjects(projects);
  renderProjectList(projects, name);
  renderTaskList(selectedProject);
});

// Add task
document.getElementById("addTask").addEventListener("click", () => {
  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-date").value = "";
  document.getElementById("task-dialog").showModal();
});

document.getElementById("submit-task").addEventListener("click", () => {
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value;
  const date = document.getElementById("task-date").value;
  if (!title) return;
  selectedProject.addTask(new Task(title, desc, date));
  saveProjects(projects);
  renderTaskList(selectedProject);
});
