export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    title: "RainyDays",
    description: "An e-commerce website for a fictional clothing brand.",
    image: "./assets/thumbnails/rainydays.png",
    github: "https://github.com/Bjelland14/HTML-og-CSS-CA",
    live: "https://bjelland14.github.io/HTML-og-CSS-CA/"
  },
  {
    title: "RainyDays JavaScript",
    description: "RainyDays project with focus on JavaScript functionality.",
    image: "./assets/thumbnails/rainydaysjs.png",
    github: "https://github.com/Bjelland14/RainyDaysJS",
    live: "https://bjelland14.github.io/RainyDaysJS/"
  },
  {
    title: "Semester Project 1",
    description: "Responsive and accessible museum website built with HTML & CSS.",
    image: "./assets/thumbnails/SP-1.png",
    github: "https://github.com/Bjelland14/Semester-Project-1",
    live: "https://bjelland14.github.io/Semester-Project-1/"
  }
];