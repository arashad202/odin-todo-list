import "./styles.css";
import {nav} from "./modules/nav";
import {main} from "./modules/main";

const myApp = document.querySelector('#app');
myApp.classList.add("grid", "grid-cols-[1fr_4fr]");

myApp.appendChild(nav);
myApp.appendChild(main);


