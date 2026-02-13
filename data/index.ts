export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const aboutMe = {
  title: "About",
  highlight: "me",
  paragraphs: [
    "I’m Lucas Pilati, a Full Stack Developer based in Brazil, passionate about building clean, accessible and high-quality digital experiences.",
    "I work mainly with React, Next.js and TypeScript, combining strong front-end foundations with back-end knowledge to build complete, reliable applications.",
    "I enjoy exploring new technologies, improving how products are built, and contributing to projects that create real value for users and businesses.",
  ],
  imageAlt: "Lucas Pilati - Full Stack Developer",
};

export const gridItems = [
  {
    id: 1,
    title: "Collaborative mindset with designers, product and engineering teams.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Clean, scalable code with performance and usability in mind.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring advanced JavaScript and UI animations.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Always open to new challenges and impactful projects.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type ProjectMediaItem = {
  src: string;
  type: "image" | "video";
};

/** Nomes das tecnologias para tooltip nos ícones da stack */
export const STACK_LABELS: Record<string, string> = {
  "/next.svg": "Next.js",
  "/re.svg": "React",
  "/ts.svg": "TypeScript",
  "/git.svg": "Git",
  "/tail.svg": "Tailwind CSS",
  "/stream.svg": "Stream",
  "/dock.svg": "Docker",
  "/c.svg": "C",
  "/java.svg": "Java",
  "/postgresql.svg": "PostgreSQL",
  "/chakra.svg": "Chakra UI",
};

export const projects = [
  {
    id: 1,
    title: "Voxa – Plataforma de Desenvolvimento e Orientação de Carreira",
    des: "Plataforma digital de autoconhecimento e orientação de carreira, com testes, avaliações e simulação de entrevistas com IA.",
    img: "/voxa/voxa1.PNG",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/chakra.svg", "/dock.svg", "/git.svg", "/java.svg", "/postgresql.svg", "/git.svg"],
    link: "",
    media: [
      { src: "/voxa/voxa1.PNG", type: "image" as const },
      { src: "/voxa/voxa2.PNG", type: "image" as const },
      { src: "/voxa/solu2.PNG", type: "image" as const },
      { src: "/voxa/Video%20Project%202.mp4", type: "video" as const },
    ],
    clientName: "Cognitiva Brasil",
    clientLogo: "/cognitiva_brasil_tecnologias_educacionais_logo.jpg",
  },
  {
    id: 2,
    title: "Electron Editor App",
    des: "Um editor de texto simples feito com Electron, com suporte para abrir, editar, salvar e renomear arquivos .txt",
    img: "/p2.svg",
    images: ["/p2.svg", "/bg.png", "/grid.svg"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/chakra.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "DR Insights — Plataforma de Inteligência e Análise de Dados",
    des: "Plataforma de insights e análise de dados para empresas, integrando múltiplas APIs de redes sociais para análise de posts, textos, documentos e dados de startups.",
    img: "/dr/DrInsights4.PNG",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/chakra.svg", "java.svg", "/postgresql.svg", "/git.svg"],
    link: "",
    media: [
      { src: "/dr/dr2.PNG", type: "image" as const },
      { src: "/dr/Dr6.PNG", type: "image" as const },
      { src: "/dr/Dr3.PNG", type: "image" as const },
      { src: "/dr/DrInsights4.PNG", type: "image" as const },
    ],
    clientName: "Cognitiva Brasil",
    clientLogo: "/cognitiva_brasil_tecnologias_educacionais_logo.jpg",
  },
  // {
  //   id: 3,
  //   title: "Mini blog app",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Lucas Pilati was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lucas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lucas is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Lucas Pilati was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lucas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lucas is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Lucas Pilati was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lucas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lucas is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Lucas Pilati was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lucas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lucas is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Lucas Pilati was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lucas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lucas is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Building modern web applications with React, Next.js and TypeScript, focusing on scalability, performance and clean architecture, while integrating front-end and back-end solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front-End & Mobile Developer (React Native)",
    desc: "Developing responsive web interfaces and native mobile applications for iOS and Android using React Native, delivering smooth and intuitive user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full Stack Projects",
    desc: "Working on freelance projects from concept to deployment, collaborating with clients to deliver customized web and application solutions tailored to real business needs.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Front-End Technical Leadership",
    desc: "Contributing to technical decisions, defining front-end architecture, and collaborating closely with design and product teams to ensure consistent, scalable solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pilatis",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/lucas-pilati-15109b293/",
  },
];
