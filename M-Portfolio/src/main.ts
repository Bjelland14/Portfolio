import "./style.css";
import { projects } from "./data/projects";

const container = document.querySelector<HTMLDivElement>("#projects-container");

if (container) {
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="${project.live}" target="_blank" rel="noopener">Live Site</a>
      </div>
    `;

    container.appendChild(card);
  });
}