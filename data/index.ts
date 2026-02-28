export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Principles", link: "#principles" },
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

export type Certification = {
  id: number;
  image: string;
  title: string;
  description: string;
  issuer: string;
  startedAt: string;
  issuedAt: string | null;
  category: string[];
  skills: string[];
};

export const certificationCategories = [
  "Frontend",
  "Backend",
  "Fundamentos",
  "Liderança",
  "Metodologias Ágeis",
] as const;

export const certifications: Certification[] = [
  {
    id: 1,
    image: "/images/certificates/next-react-udemy.jpg",
    title: "Next.js e React",
    issuer: "Udemy",
    startedAt: "2023-12",
    issuedAt: "2026-02",
    category: ["Frontend", "Backend"],
    skills: ["React", "Next.js", "Node.js", "HTML", "CSS"],
    description:
      "Formação completa em React e Next.js com aplicação prática em projetos reais, abordando renderização híbrida, roteamento, integração com APIs e fundamentos de Node.js para construção de aplicações full stack.",
  },
  {
    id: 2,
    image: "/images/certificates/react-maestria-udemy.jpg",
    title: "React do Zero a Maestria (c/Hooks, Router, API, Projetos)",
    issuer: "Udemy",
    startedAt: "2023-11",
    issuedAt: "2026-02",
    category: ["Frontend"],
    skills: ["React", "Node.js", "HTML", "CSS"],
    description:
      "Curso aprofundado em React com foco em Hooks, React Router, consumo de APIs e desenvolvimento de projetos práticos. Ênfase em arquitetura de componentes, gerenciamento de estado e boas práticas.",
  },
  {
    id: 3,
    image: "/images/certificates/computacao-fundamentos-ifsul.jpg",
    title: "Computação: Fundamentos",
    issuer: "IFSUL - Instituto Federal Sul-rio-grandense",
    startedAt: "2025-10",
    issuedAt: "2025-11",
    category: ["Fundamentos"],
    skills: ["Lógica de Programação", "Arquitetura de Computadores", "Algoritmos"],
    description:
      "Curso introdutório abordando fundamentos da computação, lógica de programação, conceitos estruturais de sistemas computacionais e bases teóricas essenciais para desenvolvimento de software.",
  },
  {
    id: 4,
    image: "/images/certificates/lideranca-uniasselvi.jpg",
    title: "A Liderança na Gestão de Equipes",
    issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi",
    startedAt: "2025-11",
    issuedAt: "2025-12",
    category: ["Liderança"],
    skills: ["Gestão de Equipes", "Comunicação", "Tomada de Decisão"],
    description:
      "Formação voltada ao desenvolvimento de competências em liderança, gestão de pessoas e organização de equipes, com foco em produtividade, comunicação estratégica e alinhamento de objetivos.",
  },
  {
    id: 5,
    image: "/images/certificates/javascript-freecodecamp.jpg",
    title: "JavaScript",
    issuer: "freeCodeCamp",
    startedAt: "2024-12",
    issuedAt: "2025-02",
    category: ["Frontend", "Fundamentos"],
    skills: ["JavaScript", "ES6+", "Manipulação de DOM", "Lógica de Programação"],
    description:
      "Certificação em fundamentos e prática de JavaScript moderno, incluindo manipulação de DOM, estruturas de dados, funções avançadas e construção de aplicações web interativas.",
  },
  {
    id: 6,
    image: "/images/certificates/scrum-uniasselvi.jpg",
    title: "Scrum",
    issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi",
    startedAt: "2025-12",
    issuedAt: null,
    category: ["Metodologias Ágeis"],
    skills: ["Scrum", "Gestão Ágil", "Sprints", "Product Backlog"],
    description:
      "Formação em metodologia Scrum com foco em organização de times ágeis, definição de papéis, planejamento de sprints e aplicação prática de frameworks ágeis em projetos de software.",
  },
];

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
  {
    id: 4,
    title: "B2BHotel – Plataforma SaaS de Gestão e Intermediação de Serviços para Hotéis",
    des: "Plataforma SaaS B2B para intermediação e gestão de serviços no setor hoteleiro, conectando hotéis, prestadores e equipe administrativa.",
    img: "/b2b/home-hotel.PNG",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/chakra.svg", "/git.svg", "/java.svg", "/postgresql.svg"],
    link: "",
    media: [
      { src: "/b2b/home-hotel.PNG", type: "image" as const },
      { src: "/b2b/vagas.PNG", type: "image" as const },
      { src: "/b2b/home.PNG", type: "image" as const },
      { src: "/b2b/agenda.PNG", type: "image" as const },
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

export type EngineeringPrinciple = {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
};

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 1,
    title: "Separação Clara de Responsabilidades",
    category: "Arquitetura",
    tags: ["Clean Architecture", "SRP", "Modularização"],
    description:
      "Estruturação da aplicação com divisão clara entre camadas (controller, service, repository), evitando acoplamento e facilitando manutenção, testes e evolução do sistema.",
  },
  {
    id: 2,
    title: "Arquitetura RESTful e Contratos Bem Definidos",
    category: "Backend",
    tags: ["REST", "Spring Boot", "API Contracts"],
    description:
      "Desenvolvimento de APIs REST com padronização de rotas, versionamento e contratos consistentes, garantindo previsibilidade na integração entre frontend e backend.",
  },
  {
    id: 3,
    title: "Controle de Acesso Baseado em Roles",
    category: "Segurança",
    tags: ["RBAC", "Autorização", "JWT"],
    description:
      "Implementação de controle de permissões por role no backend, assegurando que cada tipo de usuário tenha acesso restrito às funcionalidades permitidas.",
  },
  {
    id: 4,
    title: "Frontend Estruturado e Escalável",
    category: "Frontend",
    tags: ["React", "Next.js", "Componentização"],
    description:
      "Organização do frontend com componentização reutilizável, separação de lógica e apresentação, e estrutura de pastas orientada a domínio.",
  },
  {
    id: 5,
    title: "Persistência e Modelagem de Dados Consistentes",
    category: "Banco de Dados",
    tags: ["PostgreSQL", "Modelagem Relacional"],
    description:
      "Modelagem relacional com foco em integridade, normalização e eficiência de consultas, utilizando PostgreSQL como banco principal.",
  },
  {
    id: 6,
    title: "Infraestrutura e Deploy em Nuvem",
    category: "DevOps",
    tags: ["AWS", "Cloud", "Deploy"],
    description:
      "Configuração e deploy de aplicação em ambiente cloud, com separação de ambientes (HML/Prod) e organização segura de variáveis e credenciais.",
  },
  {
    id: 7,
    title: "Código Limpo e Padrões de Qualidade",
    category: "Qualidade",
    tags: ["Clean Code", "Testes", "Manutenibilidade"],
    description:
      "Aplicação de boas práticas de escrita de código, nomenclatura clara, funções com responsabilidade única e cobertura de testes para reduzir débito técnico.",
  },
  {
    id: 8,
    title: "Geração de Relatórios e Exportação de Dados",
    category: "Backend",
    tags: ["PDF", "CSV", "XLSX", "Exportação"],
    description:
      "Padronização da geração de relatórios em múltiplos formatos (PDF, CSV, XLSX) com contratos definidos e reuso de dados para consistência operacional.",
  },
  {
    id: 9,
    title: "Performance e Otimização de Consultas",
    category: "Banco de Dados",
    tags: ["Performance", "Índices", "Queries"],
    description:
      "Uso de índices adequados, evitando N+1 e consultas pesadas, com monitoramento de impacto em tempo de resposta e carga no banco.",
  },
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
