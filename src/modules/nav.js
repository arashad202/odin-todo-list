
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
addProjectBtn.id = "addPorject";
nav.appendChild(addProjectBtn);

// add project modal
const projectdialog = document.createElement("dialog");
projectdialog.id = "projectDialog";
projectdialog.classList.add("mx-auto", "my-auto", "p-3", "rounded-md")
// form inside modal
const projectForm = document.createElement("form");
projectForm.method = "dialog";
// p for title input
const projectTitle = document.createElement("p");
projectTitle.classList.add("mb-3")
    //title label
const titleLabel = document.createElement("label");
titleLabel.setAttribute('for', 'title');
titleLabel.textContent = "Title"
projectTitle.appendChild(titleLabel);
    //title input
const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.id = "title";
titleInput.classList.add("px-1", "py-1", "ml-2", "border", "border-black", "rounded-md");
projectTitle.appendChild(titleInput);
// append title part to form
projectForm.appendChild(projectTitle);

// div for buttons
const BtnsDiv = document.createElement("div");
    //cancel button
const cancelButton = document.createElement("button");
cancelButton.type = "reset";
cancelButton.classList.add("py-1", "px-1", "rounded-md", "hover:text-white", "hover:bg-black");
cancelButton.textContent = "Cancel";
    //submit button
const submitButton = document.createElement("button");
submitButton.type = "default";
submitButton.classList.add("py-1", "px-1", "ml-2", "rounded-md", "hover:text-white", "hover:bg-black");
submitButton.textContent = "Confirm";
    // appendind buttons to div
BtnsDiv.appendChild(cancelButton);
BtnsDiv.appendChild(submitButton);
// appending buttons to form
projectForm.appendChild(BtnsDiv);
// appending form to dialog
projectdialog.appendChild(projectForm);
// appending dialog to nav section
nav.appendChild(projectdialog);

const projectList = document.createElement("ul");
nav.appendChild(projectList);

projectdialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (projectdialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
addProjectBtn.addEventListener("click", () => {
  projectdialog.showModal();
  openCheck(projectdialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  projectdialog.close("No project created");    
  openCheck(projectdialog);
});

projectdialog.addEventListener("close", (e) => {
  const projectTile = projectdialog.returnValue.title;
  const myProject = new Project(projectTile.title, "my first project");
  const listItem = document.createElement("li");
  listItem.textContent = myProject.title;
  projectList.appendChild(listItem);
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  const output = {
    title: titleInput.value
  }
  projectdialog.close(output); // Have to send the select box value here.
});



export { nav }