"use client";

import {
  EnvelopeSimple,
  FileText,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";

export const URL = "https://api.github.com/users/IFAKA/repos";

export const CONTACTS = [
  {
    href: "https://github.com/IFAKA",
    icon: <GithubLogo size={16} />,
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/faka/",
    icon: <LinkedinLogo size={16} />,
    title: "Linkedin",
  },
  {
    href: "mailto:me@faka.dev",
    icon: <EnvelopeSimple size={16} />,
    title: "Email",
  },
  {
    href: "https://docs.google.com/document/d/1LmdIIMoGstnywAwh2e8QXqMZ3YSmWmUENMMkO4nCvwc/edit?usp=sharing",
    icon: <FileText size={16} />,
    title: "Curriculum vitae",
  },
];
