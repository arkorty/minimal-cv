import {} from "@/images/logos";
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
  personalWebsiteUrl: "https://folio.arkorty.xyz",
  contact: {
    email: "arkorty@gmail.com",
    tel: "",
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
      company: "Shubhalakshmi Enterprises",
      link: "",
      badges: ["Part-time"],
      title: "Operations Specialist",
      logo: "",
      start: "2019",
      end: "Present",
      description:
        "Held a multi-faceted role within my family-owned government contracting firm, focusing on technical functions. Responsibilities included validating invoices and executing technology-driven operations critical to business continuity.",
    },
    {
      company: "Custom PC Integrator",
      link: "",
      badges: ["Self-Employed"],
      title: "System Architect and Technical Specialist",
      logo: "",
      start: "2018",
      end: "Present",
      description:
        "Provided expert consultation and assembled custom PC systems tailored to client needs. Recommended optimal hardware configurations for gaming and professional use, ensuring performance, reliability, and compatibility. Delivered high-quality results with precision and personalized service.",
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
  languages: ["JavaScript", "Go", "Rust", "C", "C++", "Java", "Python", "Bash"],
  projects: [
    {
      title: "Reduce",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Echo",
        "GORM",
        "PostgreSQL",
        "Docker",
      ],
      description:
        "A full-stack URL shortener with integrated QR code generation for quick access.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/Reduce",
      },
    },
    {
      title: "CodeShare",
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Echo",
        "GORM",
        "PostgreSQL",
        "Docker",
      ],
      description:
        "A full-stack web app that allows users to save and share code snippets using a simple 6-character code.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/CodeShare",
      },
    },
    {
      title: "DownLink",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Echo",
        "Docker",
        "yt-dlp",
        "ffmpeg",
      ],
      description:
        "Full-stack web-app that lets users download videos from YouTube and Instagram.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/DownLink",
      },
    },
    {
      title: "Neolite",
      techStack: ["Neovim", "Lua", "Shell", "IDE"],
      description: "Fast and lightweight Neovim distro.",
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
      title: "PostOxideDB",
      techStack: ["Rust", "Docker", "Next.js", "React.js", "Tailwind CSS"],
      description: "Full-stack GUI based database management system.",
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
        "A simple mathematical expression evaluator using an Abstract Syntax Tree; follows the Objected-oriented paradaigm.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/Arithmetic-AST",
      },
    },
    {
      title: "folio",
      techStack: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
      description: "Portfolio website made using Next.js.",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/arkorty/folio",
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
  ],
} as const;
