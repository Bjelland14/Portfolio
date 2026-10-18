const projects = [
  {
    title: "FlavorCraft",
    role: "Team project. I was scrum master and SEO & analytics lead.",
    description:
      "Recipe app built in an agency-style team for a fictional client. I ran our sprints and set up SEO and analytics: meta tags, Schema.org recipe data and Microsoft Clarity behind cookie consent.",
    result: "Lighthouse: 100 in accessibility and best practices",
    tech: ["React", "Vite", "React Router"],
    image: "assets/thumbnails/flavorcraft.jpeg",
    github: "https://github.com/Bjelland14/flavorcraft-agency-2",
    live: "https://flavorcraft-team-beta.netlify.app/"
  },
  {
    title: "Online Shop",
    role: "JavaScript Frameworks course assignment",
    description:
      "Online shop with search, sorting, a cart with quantities and totals, checkout and a validated contact form, built on the Noroff Online Shop API.",
    result: "AI usage documented in its own AI log",
    tech: ["React", "TypeScript", "Vite", "React Router"],
    image: "assets/thumbnails/jsframeworks.png",
    github: "https://github.com/Bjelland14/js-frameworks-ca",
    live: "https://js-frameworks-ca-lloyd.netlify.app/"
  },
  {
    title: "Auction House",
    role: "Semester Project 2",
    description:
      "Responsive auction platform with login, listings, bidding, search and user profiles, built on the Noroff Auction API.",
    result: "AI usage documented in its own AI log",
    tech: ["TypeScript", "Vite", "Bootstrap", "REST API"],
    image: "assets/thumbnails/auction.jpg",
    github: "https://github.com/Bjelland14/Sp2",
    live: "https://auction-house-sp2-bjelland.netlify.app/"
  }
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.classList.add("project-card");

  const tags = project.tech.map((t) => `<li>${t}</li>`).join("");
  const result = project.result
    ? `<p class="project-result">${project.result}</p>`
    : "";

  card.innerHTML = `
    <a class="project-shot" href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="Open the live site for ${project.title}">
      <img src="${project.image}" alt="Screenshot of ${project.title}">
    </a>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p class="project-role">${project.role}</p>
      <p>${project.description}</p>
      ${result}
      <ul class="project-tech" aria-label="Built with">${tags}</ul>
      <div class="project-links">
        <a class="button button--primary" href="${project.live}" target="_blank" rel="noopener noreferrer">Live site</a>
        <a class="button" href="${project.github}" target="_blank" rel="noopener noreferrer">Code on GitHub</a>
      </div>
    </div>
  `;

  container.appendChild(card);
});