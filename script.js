const projects = [
{
title: "RainyDays",
description: "E-commerce website built with HTML and CSS.",
image: "assets/thumbnails/rainydays.png",
github: "https://github.com/Bjelland14/HTML-og-CSS-CA",
live: "https://bjelland14.github.io/HTML-og-CSS-CA/"
},
{
title: "RainyDays JavaScript",
description: "RainyDays project with JavaScript functionality.",
image: "assets/thumbnails/rainydaysjs.png",
github: "https://github.com/Bjelland14/RainyDaysJS",
live: "https://bjelland14.github.io/RainyDaysJS/"
},
{
title: "Semester Project 1",
description: "Accessible museum website built with HTML and CSS.",
image: "assets/thumbnails/SP-1.png",
github: "https://github.com/Bjelland14/Semester-Project-1",
live: "https://bjelland14.github.io/Semester-Project-1/"
}
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
const card = document.createElement("div");
card.classList.add("project-card");

card.innerHTML = `     <img src="${project.image}" alt="${project.title}">     <h3>${project.title}</h3>     <p>${project.description}</p>     <div class="project-links">       <a href="${project.github}" target="_blank">GitHub</a>       <a href="${project.live}" target="_blank">Live Site</a>     </div>
  `;

container.appendChild(card);
});
