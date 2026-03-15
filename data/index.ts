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

export type ViewMode = "recruiter" | "technical";

export const gridItems: Array<{
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
  visibleIn?: ViewMode[];
}> = [
  {
    id: 1,
    title: "Collaborative mindset with designers, product and engineering teams.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    visibleIn: ["recruiter", "technical"],
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
    visibleIn: ["technical"],
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
    visibleIn: ["recruiter", "technical"],
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
    visibleIn: ["recruiter", "technical"],
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
    visibleIn: ["technical"],
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
    visibleIn: ["technical"],
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
  /** Imagem por idioma (PT/EN); quando definidos, substituem `image` conforme o locale. */
  imagePt?: string;
  imageEn?: string;
  images?: string[];
  title: string;
  description: string;
  issuer: string;
  startedAt: string;
  issuedAt: string | null;
  category: string[];
  skills: string[];
  topics?: string[];
  practicalApplication?: string;
  impact?: string;
  hours?: string;
  featured?: boolean;
};

export const certificationCategories = [
  "Frontend",
  "Backend",
  "Fundamentos",
  "Liderança",
  "Metodologias Ágeis",
  "Idiomas",
  "Comunicação",
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
    topics: [
      "SSR e SSG com Next.js",
      "Arquitetura de componentes em React",
      "Roteamento e estrutura de aplicações",
      "Integração com APIs",
      "Fundamentos de aplicações full stack"
    ],
    description:
      "Formação completa em React e Next.js com aplicação prática em projetos reais, abordando renderização híbrida, roteamento e integração com APIs.",
    practicalApplication:
      "Aplicação dos conceitos no desenvolvimento de aplicações modernas utilizando React, Next.js e APIs REST.",
    impact:
      "Melhoria na organização de aplicações front-end, otimização de carregamento de páginas e melhor estruturação de projetos web.",
    featured: true,
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
    topics: [
      "Hooks do React",
      "React Router",
      "Consumo de APIs",
      "Componentização",
      "Estruturação de projetos"
    ],
    description:
      "Curso aprofundado em React com foco em Hooks, React Router, consumo de APIs e desenvolvimento de projetos práticos.",
    practicalApplication:
      "Utilização dos conceitos para criação de interfaces modulares e reutilizáveis em aplicações React.",
    impact:
      "Aumento da reutilização de componentes e melhoria na manutenção de aplicações front-end.",
    featured: true,
  },
  {
    id: 3,
    image: "/images/certificates/computacao-fundamentos-ifsul.jpg",
    images: [
      "/images/certificates/computacao-fundamentos-ifsul.jpg",
      "/images/certificates/computacao-fundamentos-ifsul-p2.jpg"
    ],
    title: "Computação: Fundamentos",
    issuer: "IFSUL - Instituto Federal Sul-rio-grandense",
    startedAt: "2025-10",
    issuedAt: "2025-11",
    category: ["Fundamentos"],
    skills: ["Lógica de Programação", "Arquitetura de Computadores", "Algoritmos"],
    topics: [
      "Fundamentos da computação",
      "Estruturas lógicas",
      "Algoritmos básicos",
      "Arquitetura de sistemas computacionais"
    ],
    description:
      "Curso introdutório abordando fundamentos da computação e lógica de programação.",
    practicalApplication:
      "Base teórica aplicada no desenvolvimento de algoritmos e resolução estruturada de problemas em projetos de software.",
    impact:
      "Fortalecimento da base lógica para desenvolvimento de aplicações e melhor entendimento da estrutura de sistemas.",
  },
  {
    id: 4,
    image: "/images/certificates/lideranca-uniasselvi.jpg",
    images: [
      "/images/certificates/lideranca-uniasselvi.jpg",
      "/images/certificates/lideranca-uniasselvi-p2.jpg"
    ],
    title: "A Liderança na Gestão de Equipes",
    issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi",
    startedAt: "2025-11",
    issuedAt: "2025-12",
    category: ["Liderança"],
    skills: ["Gestão de Equipes", "Comunicação", "Tomada de Decisão"],
    topics: [
      "Liderança estratégica",
      "Comunicação organizacional",
      "Gestão de equipes",
      "Tomada de decisão"
    ],
    description:
      "Formação voltada ao desenvolvimento de competências em liderança e gestão de equipes.",
    practicalApplication:
      "Aplicação dos conceitos na organização de fluxos de trabalho e colaboração em projetos de desenvolvimento.",
    impact:
      "Melhoria na comunicação e organização de tarefas em ambientes colaborativos.",
  },
  {
    id: 5,
    image: "/images/certificates/javascript-freecodecamp.jpg",
    imagePt: "/images/certificates/certificado-javascript-pt.JPG",
    imageEn: "/images/certificates/certificado-javascript-en.JPG",
    title: "JavaScript",
    issuer: "freeCodeCamp",
    startedAt: "2024-12",
    issuedAt: "2026-02",
    hours: "300h",
    category: ["Frontend", "Fundamentos"],
    skills: [
      "JavaScript",
      "ES6+",
      "Manipulação de DOM",
      "Estruturas de Dados",
      "Lógica de Programação"
    ],
    topics: [
      "Estruturas de dados",
      "Programação funcional",
      "ES6+",
      "Manipulação de DOM",
      "Algoritmos"
    ],
    description:
      "Certificação com forte abordagem prática em JavaScript moderno e resolução de problemas.",
    practicalApplication:
      "Uso contínuo do JavaScript no desenvolvimento de aplicações com React, Next.js e Node.js.",
    impact:
      "Melhoria na organização da lógica de negócio e maior eficiência na manipulação de dados em aplicações web.",
    featured: true,
  },
  {
    id: 6,
    image: "/images/certificates/scrum-uniasselvi.jpg",
    images: [
      "/images/certificates/scrum-pt1.JPG",
      "/images/certificates/scrum-pt2.JPG"
    ],
    title: "Scrum",
    issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi",
    startedAt: "2025-12",
    issuedAt: "2026-02",
    category: ["Metodologias Ágeis"],
    skills: ["Scrum", "Gestão Ágil", "Sprints", "Product Backlog"],
    topics: [
      "Framework Scrum",
      "Planejamento de sprints",
      "Gestão de backlog",
      "Papéis em times ágeis"
    ],
    description:
      "Formação em metodologia Scrum com foco na organização e execução de projetos ágeis.",
    practicalApplication:
      "Aplicação de práticas ágeis no planejamento e organização de projetos de software.",
    impact:
      "Melhoria na gestão de tarefas e organização do fluxo de desenvolvimento.",
  },
  {
    id: 7,
    image: "/images/certificates/react-native-ifsul.jpg",
    images: [
      "/images/certificates/react-native-ifsul.jpg",
      "/images/certificates/react-native-ifsul-p2.jpg"
    ],
    title: "React Native: Criação de Aplicativos Móveis Modernos",
    issuer: "IFSUL - Instituto Federal Sul-rio-grandense",
    startedAt: "2025-03",
    issuedAt: "2025-05",
    hours: "40h",
    category: ["Frontend"],
    skills: ["React Native", "JavaScript", "Mobile", "iOS", "Android", "Expo"],
    topics: [
      "Componentes React Native",
      "Navegação em aplicações mobile",
      "Gerenciamento de estado",
      "Integração com APIs",
      "Desenvolvimento multiplataforma"
    ],
    description:
      "Curso de React Native com abordagem prática para criação de aplicativos móveis modernos.",
    practicalApplication:
      "Exploração do desenvolvimento mobile multiplataforma utilizando React Native e integração com APIs.",
    impact:
      "Ampliação da capacidade de desenvolvimento para plataformas móveis iOS e Android.",
  },
  {
    id: 8,
    image: "/images/certificates/certificado-A2-english-pt.JPG",
    imagePt: "/images/certificates/certificado-A2-english-pt.JPG",
    imageEn: "/images/certificates/certificado-A2-english-en.JPG",
    title: "English for Developers – A2 (CEFR)",
    description:
      "Certificação de inglês para desenvolvedores com foco em gramática, compreensão auditiva e leitura, alinhada ao nível A2 do Quadro Europeu Comum de Referência para Línguas (CEFR).",
    issuer: "freeCodeCamp",
    startedAt: "2026-02",
    issuedAt: "2026-03",
    category: ["Idiomas", "Comunicação"],
    skills: ["English", "Reading", "Listening", "Grammar", "Technical Communication"],
    topics: [
      "Gramática aplicada",
      "Compreensão auditiva",
      "Leitura em inglês",
      "Vocabulário técnico para desenvolvedores",
      "Comunicação em ambiente técnico"
    ],
    practicalApplication:
      "Utilização do inglês para leitura de documentação técnica, cursos internacionais e acompanhamento de conteúdos da comunidade global de desenvolvimento.",
    impact:
      "Maior autonomia para estudar tecnologias, compreender documentação oficial e interagir com materiais técnicos em inglês.",
    featured: false
  }
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
  visibleIn?: ViewMode[];
  /** Exibir na seção da home (apenas alguns em destaque) */
  featured?: boolean;
};

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 1,
    title: "Separação Clara de Responsabilidades",
    category: "Arquitetura",
    tags: ["Clean Architecture", "SRP", "Modularização"],
    description:
      "Estruturação da aplicação com separação clara entre camadas (controller, service e repository), reduzindo acoplamento entre componentes e promovendo maior manutenibilidade, testabilidade e evolução do sistema.",
    visibleIn: ["recruiter", "technical"],
    featured: true,
  },
  {
    id: 2,
    title: "Arquitetura RESTful e Contratos de API Consistentes",
    category: "Backend",
    tags: ["REST", "Spring Boot", "API Contracts"],
    description:
      "Desenvolvimento de APIs REST seguindo boas práticas de padronização de rotas, versionamento e definição de contratos estáveis, garantindo previsibilidade e integração confiável entre frontend e backend.",
    visibleIn: ["recruiter", "technical"],
    featured: true,
  },
  {
    id: 3,
    title: "Controle de Acesso Baseado em Roles",
    category: "Segurança",
    tags: ["RBAC", "Autorização", "JWT"],
    description:
      "Implementação de controle de acesso baseado em papéis (RBAC) no backend, assegurando que diferentes perfis de usuário tenham permissões adequadas e acesso restrito às funcionalidades autorizadas.",
    visibleIn: ["recruiter", "technical"],
    featured: true,
  },
  {
    id: 4,
    title: "Arquitetura de Frontend Escalável",
    category: "Frontend",
    tags: ["React", "Next.js", "Componentização"],
    description:
      "Estruturação do frontend com componentização reutilizável, separação entre lógica de negócio e apresentação e organização de código orientada a domínio, facilitando escalabilidade e manutenção.",
    visibleIn: ["recruiter", "technical"],
  },
  {
    id: 5,
    title: "Modelagem e Persistência de Dados Consistentes",
    category: "Banco de Dados",
    tags: ["PostgreSQL", "Modelagem Relacional"],
    description:
      "Modelagem de dados relacional com foco em integridade, normalização e eficiência de consultas, utilizando PostgreSQL para garantir consistência e confiabilidade na persistência das informações.",
    visibleIn: ["technical"],
  },
  {
    id: 6,
    title: "Infraestrutura e Deploy em Ambiente Cloud",
    category: "DevOps",
    tags: ["AWS", "Cloud", "Deploy"],
    description:
      "Configuração de infraestrutura e deploy em ambiente cloud, com separação adequada de ambientes (homologação e produção), gerenciamento seguro de variáveis e organização de processos de entrega.",
    visibleIn: ["technical"],
  },
  {
    id: 7,
    title: "Código Limpo e Boas Práticas de Engenharia",
    category: "Qualidade",
    tags: ["Clean Code", "Testes", "Manutenibilidade"],
    description:
      "Aplicação de princípios de código limpo, incluindo nomenclatura clara, funções com responsabilidade única e estrutura modular, contribuindo para maior legibilidade, manutenibilidade e redução de débito técnico.",
    visibleIn: ["technical"],
  },
  {
    id: 8,
    title: "Padronização de Geração de Relatórios",
    category: "Backend",
    tags: ["PDF", "CSV", "XLSX", "Exportação"],
    description:
      "Implementação de geração de relatórios em múltiplos formatos (PDF, CSV e XLSX), com padronização de contratos e reutilização de dados, garantindo consistência e confiabilidade nas exportações.",
    visibleIn: ["technical"],
  },
  {
    id: 9,
    title: "Otimização de Consultas e Performance de Dados",
    category: "Banco de Dados",
    tags: ["Performance", "Índices", "Queries"],
    description:
      "Otimização de consultas e modelagem de índices para reduzir carga no banco de dados, evitar problemas como N+1 queries e melhorar o tempo de resposta das aplicações.",
    visibleIn: ["technical"],
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
