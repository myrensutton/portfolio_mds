import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Myren Sutton - Bioinformatics and Biomedical Engineer",
  author: "Myren DeShawn Sutton",
  description: "Hello!",
  lang: "en",
  siteLogo: "/tinyhead.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/myren-sutton-ab233221b" },
    { text: "Github", href: "https://github.com/ddsnph" },
  ],
  socialImage: "",
  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Myren Sutton",
    specialty: "Bioinformatics | Biomedical Engineering | Biological Engineering",
    summary:
      "I’m Myren Sutton, a biomedical engineer and bioinformatics researcher passionate about leveraging machine learning, genomic data analysis, and innovative design to address critical healthcare challenges. I'm actively seeking employment opportunities in bioinformatics, data science, and healthcare technology following my Master's graduation, aiming to create impactful and inclusive medical solutions.",
    email: "myrensutton@gmail.com",
  },
  experience: [
    {
      company: "Pfizer Pharmaceuticals",
      position: "Bioprocessing Research and Development Intern",
      startDate: "June 2025",
      endDate: "August 2025",
      summary: [
        "Collaborated within the biotherapeutics and pharmaceuticals division, creating automation scripts to enhance operational efficiency.",
        "Engaged in hands on experience with machine automation processes, optimizing laboratory workflow.",

      ],
    },
    {
      company: "University of Missouri - Columbia",
      position: "Residential Advisor",
      startDate: "August 2023",
      endDate: "May 2026",
      summary: [
        "Led a supportive and safe living environment for over 700 residents, enforcing housing policies and providing crisis management.",
        "Facilitated mentorship and resource accessibility, working collaboratively within a diverse team of 22+ advisors.",
      ],
    },
    {
      company: "University of Missouri - Columbia | Dr. Praveen Rao Scalable Data Science Lab",
      position: "Bioinformatics Research Intern",
      startDate: "May 2023",
      endDate: "May 2025",
      summary: [
        "Developed a robust pipeline for analyzing genomic data using Transformer models, clustering variants of COVID-19 patients to identify susceptibility factors.",
        "Utilized Jupyter Notebook and RealVNC Viewer with GPU integration for large-scale data analysis, ensuring interactive and accessible results.",
        "Presented findings at multiple national research forums, including ABRCMS and Mizzou research conferences.",
        "Visualized genomic data from variant calling files (VCFs), providing clear and meaningful insights.",
        "Gained foundational training in Python and basic machine learning techniques for genomic data analysis.",
      ],
    },
    {
      company: "University of Missouri - Columbia | Dr. Trupti Joshi Research Lab",
      position: "Bioinformatics Research Assistant",
      startDate: "August 2023",
      endDate: "May 2026",
      summary: [
        "Assisted in developing visualization tools for soybean genomic data using R and R Shiny.",
        "Participated in weekly seminars to explore new bioinformatics technologies and methodologies.",
      ],
    },
  ],

  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],

  about: {
    description: `
 Hi, I’m Myren Sutton! I'm a bioinformatics researcher and biomedical engineer passionate about using data to solve real world healthcare problems. My work focuses on combining machine learning, bioinformatics, and practical engineering to create tools that actually make a difference for patients.

I’ve designed and developed projects ranging from clustering genomic variants of COVID-19 patients with transformer models to creating affordable, eco-friendly 3D-printed medical splints. I'm proficient in Python, R, MATLAB, and SolidWorks, and enjoy applying these skills to innovative medical technologies.

Ultimately, I’m driven to make healthcare more inclusive and effective through thoughtful, data driven design.
    `,
    image: "/profilePhoto.png",
  },
};

// #5755ff
