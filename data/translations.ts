export type Locale = "en" | "pt";

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      headline: "Transforming Ideas into Scalable Digital Experiences",
      subtitle: "Hi! I'm Lucas Pilati, a Full Stack Developer based in Brazil.",
      cta: "Show my work",
    },
    about: {
      title: "About",
      highlight: "me",
      paragraphs: [
        "I'm Lucas Pilati, a Full Stack Developer based in Brazil, passionate about building clean, accessible and high-quality digital experiences.",
        "I work mainly with React, Next.js and TypeScript, combining strong front-end foundations with back-end knowledge to build complete, reliable applications.",
        "I enjoy exploring new technologies, improving how products are built, and contributing to projects that create real value for users and businesses.",
      ],
      imageAlt: "Lucas Pilati - Full Stack Developer",
    },
    grid: {
      items: [
        { title: "Collaborative mindset with designers, product and engineering teams.", description: "" },
        { title: "I'm very flexible with time zone communications", description: "" },
        { title: "My tech stack", description: "I constantly try to improve" },
        { title: "Clean, scalable code with performance and usability in mind.", description: "" },
        { title: "Exploring advanced JavaScript and UI animations.", description: "The Inside Scoop" },
        { title: "Always open to new challenges and impactful projects.", description: "" },
      ],
    },
    projects: {
      heading: "A small selection of",
      highlight: "recent projects",
      checkLiveSite: "Check Live Site",
      items: [
        {
          title: "Ecommerce App",
          des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        },
        {
          title: "Electron Editor App",
          des: "A simple text editor built with Electron, with support for opening, editing, saving and renaming .txt files.",
        },
      ],
    },
    experience: {
      heading: "My",
      highlight: "work experience",
      items: [
        {
          title: "Full Stack Developer",
          desc: "Building modern web applications with React, Next.js and TypeScript, focusing on scalability, performance and clean architecture, while integrating front-end and back-end solutions.",
        },
        {
          title: "Front-End & Mobile Developer (React Native)",
          desc: "Developing responsive web interfaces and native mobile applications for iOS and Android using React Native, delivering smooth and intuitive user experiences.",
        },
        {
          title: "Freelance Full Stack Projects",
          desc: "Working on freelance projects from concept to deployment, collaborating with clients to deliver customized web and application solutions tailored to real business needs.",
        },
        {
          title: "Front-End Technical Leadership",
          desc: "Contributing to technical decisions, defining front-end architecture, and collaborating closely with design and product teams to ensure consistent, scalable solutions.",
        },
      ],
    },
    approach: {
      heading: "My",
      highlight: "approach",
      cards: [
        {
          title: "Planning & Strategy",
          order: "Phase 1",
          des: "I start by understanding goals, users and technical needs to define the right direction from day one.",
        },
        {
          title: "Development & Collaboration",
          order: "Phase 2",
          des: "I build with focus on clean code, clear communication and constant progress updates throughout the process.",
        },
        {
          title: "Delivery & Evolution",
          order: "Phase 3",
          des: "I deliver scalable, production-ready solutions and continuously improve them based on real usage and feedback.",
        },
      ],
    },
    footer: {
      ctaTitle: "Ready to build something",
      ctaHighlight: "meaningful",
      ctaTitleEnd: "together?",
      ctaSubtext: "Let's connect and talk about how I can help bring your ideas to life.",
      button: "Let's get in touch",
      copyright: "Copyright © 2026 Lucas Pilati",
    },
    bento: {
      copyEmail: "Copy my email address",
      emailCopied: "Email is Copied!",
    },
    projectPage: {
      backToProjects: "Back to projects",
      aboutTitle: "About this project",
      techStack: "Tech stack",
      notFound: "Project not found.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      testimonials: "Depoimentos",
      contact: "Contato",
    },
    hero: {
      headline: "Transformando ideias em experiências digitais escaláveis",
      subtitle: "Olá! Sou Lucas Pilati, Desenvolvedor Full Stack baseado no Brasil.",
      cta: "Ver meu trabalho",
    },
    about: {
      title: "Sobre",
      highlight: "mim",
      paragraphs: [
        "Sou Lucas Pilati, Desenvolvedor Full Stack baseado no Brasil, apaixonado por criar experiências digitais limpas, acessíveis e de alta qualidade.",
        "Trabalho principalmente com React, Next.js e TypeScript, unindo bases sólidas de front-end a conhecimento de back-end para construir aplicações completas e confiáveis.",
        "Gosto de explorar novas tecnologias, melhorar a forma como produtos são construídos e contribuir com projetos que geram valor real para usuários e negócios.",
      ],
      imageAlt: "Lucas Pilati - Desenvolvedor Full Stack",
    },
    grid: {
      items: [
        { title: "Mentalidade colaborativa com design, produto e engenharia.", description: "" },
        { title: "Muito flexível com fusos horários na comunicação", description: "" },
        { title: "Minha stack", description: "Sempre buscando evoluir" },
        { title: "Código limpo e escalável com foco em performance e usabilidade.", description: "" },
        { title: "Explorando JavaScript avançado e animações de interface.", description: "Por dentro" },
        { title: "Sempre aberto a novos desafios e projetos com impacto.", description: "" },
      ],
    },
    projects: {
      heading: "Uma pequena seleção de",
      highlight: "projetos recentes",
      checkLiveSite: "Ver site",
      items: [
        {
          title: "Ecommerce App",
          des: "Explore o sistema solar com esta simulação 3D dos planetas feita em Three.js.",
        },
        {
          title: "Electron Editor App",
          des: "Editor de texto simples feito com Electron: abrir, editar, salvar e renomear arquivos .txt.",
        },
      ],
    },
    experience: {
      heading: "Minha",
      highlight: "experiência",
      items: [
        {
          title: "Desenvolvedor Full Stack",
          desc: "Construindo aplicações web modernas com React, Next.js e TypeScript, com foco em escalabilidade, performance e arquitetura limpa, integrando front-end e back-end.",
        },
        {
          title: "Desenvolvedor Front-End e Mobile (React Native)",
          desc: "Desenvolvendo interfaces web responsivas e aplicativos nativos para iOS e Android com React Native, entregando experiências fluidas e intuitivas.",
        },
        {
          title: "Projetos Freelance Full Stack",
          desc: "Atuando em projetos freelance do conceito ao deploy, em colaboração com clientes para entregar soluções web e aplicações sob medida para necessidades reais.",
        },
        {
          title: "Liderança Técnica Front-End",
          desc: "Contribuindo com decisões técnicas, definindo arquitetura front-end e colaborando com design e produto para soluções consistentes e escaláveis.",
        },
      ],
    },
    approach: {
      heading: "Meu",
      highlight: "approach",
      cards: [
        {
          title: "Planejamento e Estratégia",
          order: "Fase 1",
          des: "Começo entendendo objetivos, usuários e necessidades técnicas para definir a direção certa desde o primeiro dia.",
        },
        {
          title: "Desenvolvimento e Colaboração",
          order: "Fase 2",
          des: "Desenvolvo com foco em código limpo, comunicação clara e atualizações constantes durante todo o processo.",
        },
        {
          title: "Entrega e Evolução",
          order: "Fase 3",
          des: "Entrego soluções escaláveis e prontas para produção e as melhoro continuamente com base em uso real e feedback.",
        },
      ],
    },
    footer: {
      ctaTitle: "Pronto para construir algo",
      ctaHighlight: "significativo",
      ctaTitleEnd: "juntos?",
      ctaSubtext: "Vamos conversar sobre como posso ajudar a dar vida às suas ideias.",
      button: "Vamos conversar",
      copyright: "Copyright © 2026 Lucas Pilati",
    },
    bento: {
      copyEmail: "Copiar meu e-mail",
      emailCopied: "E-mail copiado!",
    },
    projectPage: {
      backToProjects: "Voltar aos projetos",
      aboutTitle: "Sobre o projeto",
      techStack: "Stack técnico",
      notFound: "Projeto não encontrado.",
    },
  },
} as const;

export default translations;

export function getByPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}
