const projects = [
  {
    title: "FlavorCraft",
    role: "Team project · Scrum Master and SEO & Analytics Lead",
    description:
      "Recipe discovery app built in an agency-style team for a fictional client, with UX research and design in Figma, issues, branch conventions and semantic commits. I facilitated the sprints as scrum master and was responsible for SEO and analytics: meta tags, Open Graph, Schema.org recipe data (JSON-LD) and Microsoft Clarity, loaded only after cookie consent (GDPR). Lighthouse: 100 in accessibility and best practices.",
    tech: "React · Vite · React Router",
    image: "assets/thumbnails/flavorcraft.jpeg",
    github: "https://github.com/Bjelland14/flavorcraft-agency-2",
    live: "https://flavorcraft-team-beta.netlify.app/"
  },
  {
    title: "Online Shop",
    role: "JavaScript Frameworks",
    description:
      "Online shop with search, sorting, product pages, a shopping cart with quantities and totals, checkout and a validated contact form, using the Noroff Online Shop API. Includes loading and error handling, toast notifications and responsive design. AI usage is documented in a dedicated AI log.",
    tech: "React · TypeScript · Vite · React Router",
    image: "assets/thumbnails/jsframeworks.png",
    github: "https://github.com/Bjelland14/js-frameworks-ca",
    live: "https://js-frameworks-ca-lloyd.netlify.app/"
  },
  {
    title: "Auction House",
    role: "Semester Project 2",
    description:
      "Responsive auction platform with authentication, listing management, bidding, search and profile functionality using the Noroff Auction API.",
    tech: "TypeScript · Vite · Bootstrap · REST API",
    image: "assets/thumbnails/auction.jpg",
    github: "https://github.com/Bjelland14/Sp2",
    live: "https://auction-house-sp2-bjelland.netlify.app/"
  }
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${project.image}" alt="Screenshot of ${project.title}">
    <h3>${project.title}</h3>
    <p class="project-role">${project.role}</p>
    <p>${project.description}</p>
    <p class="project-tech">${project.tech}</p>

    <div class="project-links">
      <a
        href="${project.github}"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="${project.live}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Site
      </a>
    </div>
  `;

  container.appendChild(card);
});