const projects = [
{
title: "Auction House",
description: "Responsive auction platform built with TypeScript, Vite and Bootstrap. Includes authentication, listings, bidding and profile management.",
image: "assets/thumbnails/auction.jpg",
github: "https://github.com/Bjelland14/Sp2",
live: "https://auction-house-sp2-bjelland.netlify.app/"
},
{
title: "Project Exam 1",
description: "E-commerce web application built with JavaScript. Includes product browsing, product details, cart functionality and checkout flow.",
image: "assets/thumbnails/PE1.png",
github: "https://github.com/Bjelland14/PE1-Lloyd-Bjelland",
live: "https://bjelland14.github.io/PE1-Lloyd-Bjelland/"
},
{
title: "Social Media Application",
description: "Social media application built with TypeScript and Vite. Includes authentication, post creation, profiles, search and follow functionality.",
image: "assets/thumbnails/js2.png",
github: "https://github.com/Bjelland14/JavaScript-2-Course-Assignment",
live: "https://bjelland14.github.io/JavaScript-2-Course-Assignment/#/login"
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
