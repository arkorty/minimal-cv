import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arkaprabha Chakraborty",
  initials: "AC",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  about:
    "Student, DevOps Engineer, SysAdmin, and FOSS advocate; building the next-gen for the next-gen.",
  summary:
    "Experienced professional skilled in cloud infrastructure, system administration, and low-level operating systems. Proficient in C, Rust, Java, Python, and C++. Experienced in implementing cryptography in client-facing software. Strong background in Docker for efficient containerization and deployment. Committed to delivering quality solutions and eager to work in related sectors.",
  avatarUrl: "https://avatars.githubusercontent.com/u/63536980?v=4",
  personalWebsiteUrl: "https://arkorty.xyz",
  contact: {
    email: "arkorty@gmail.com",
    tel: "+916289844601",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arkorty",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arkorty/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/arkorty",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering & Management, Newtown",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Custom PC Integrator",
      link: "",
      badges: ["Self-Employed"],
      title: "System Architect and Technical Specialist",
      logo: "",
      start: "2018",
      end: "Present",
      description:
        "Specialized in providing expert guidance and building custom PC systems tailored to clients' specific needs. Utilized comprehensive knowledge of computer hardware components to recommend optimal configurations for gaming and professional applications. Meticulously assembled mid-to-high-end gaming PCs, ensuring compatibility, performance, and reliability. Consistently exceeded client expectations through personalized consultation and attention to detail.",
    },
  ],
  skills: [
    "Linux",
    "BSD",
    "Git",
    "GitHub",
    "AWS",
    "Oracle Cloud",
    "Google Cloud",
    "Docker",
  ],
  languages: ["Rust", "C", "C++", "Java", "Python", "Bash", "Golang"],
  projects: [
  {
      title: "Neolite",
      techStack: ["Neovim", "Lua", "Shell", "IDE"],
      description:
        "Fast and lightweight configuration of Neovim as a functional IDE.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/neolite",
      },
    },
    {
      title: "RUSTCM-CLI",
      techStack: ["Rust", "XChaCha20", "Poly1305", "XChaCha20-Poly1305"],
      description:
        "Encryption or decryption of UTF-8 encoded text files using the XChaCha20-Poly1305 authenticated cipher.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/rustcm-cli",
      },
    },
    {
      title: "Online Clipboard",
      techStack: ["Golang", "Javascript", "CSS", "HTML", "PostgreSQL", "Docker", "Docker Compose", "Next.js", "MUI/Material", "Tailwind CSS"],
      description:
        "An Online Clipboard that can be used from everywhere.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/online-clipboard",
      },
    },

    {
      title: "PostOxideDB",
      techStack: ["Rust", "Docker", "Next.js", "React.js", "Tailwind CSS"],
      description: "Simple yet performant database management solution.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/PostOxideDB",
      },
    },
    {
      title: "Arithmetic AST",
      techStack: ["C++", "OOP"],
      description:
        "Simple mathematical expression evaluator using an Abstract Syntax Tree following Objected-oriented paradaigm.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/Arithmetic-AST",
      },
    },
    {
      title: "Home Directory",
      techStack: ["Next.js", "React.js", "Tailwind CSS"],
      description: "Personalized website made using Next.js.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/home-directory",
      },
    },
    {
      title: "donut.c",
      techStack: ["C"],
      description: "Spinning ASCII donut on the terminal.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/donut.c",
      },
    },
    {
      title: "maze.c",
      techStack: ["C"],
      description: "ASCII maze game written in C.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/maze.c",
      },
    },
    {
      title: "maze.cxx",
      techStack: ["C++"],
      description: "ASCII maze game written in C++.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/maze.cxx",
      },
    },
    {
      title: "GoHTTPServer",
      techStack: ["Go"],
      description: "Simple Web Server written in Golang.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/GoHTTPServer",
      },
    },
  ],
} as const;
