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
          title: "Voxa – Career Development and Guidance Platform",
          des: "Digital platform for self-awareness and career guidance, with assessments, tests and AI-powered interview simulation.",
          fullDes: "I worked as a Front-end Developer on Voxa, a digital platform focused on helping people understand themselves better professionally and make more assertive decisions about their career. The project brings together different assessments and interactive experiences: career moment and professional goals tests, problem-solving and quick reasoning assessments, person–company fit mapping, leadership potential assessment through cognitive stimuli, and interview simulation with an AI-based interactive chat that analyzes answers and calculates results in real time. On the front-end, I built interactive and responsive interfaces, ensuring clear presentation of the tests, good user experience and smooth navigation through complex flow steps. I worked in close collaboration with product, UX and development teams, contributing to the continuous evolution of the platform and to an intuitive, reliable experience for the end user. The project involved challenges such as organizing dynamic flows, displaying personalized results and integrating with assessment logic, always with a focus on usability, accessibility and interface quality.",
          media: [
            { title: "Homepage", description: "Landing page of the Voxa platform, presenting the professional self-awareness journey, with access to career tests, job discovery and selection process simulation, in a modern, UX-focused layout." },
            { title: "Tests and Results", description: "Overview of the platform's main tests (Career Moment, Solu, Fit Mapping and Volt), with consolidated results and insights on professional profile and potential." },
            { title: "Solu Assessment", description: "Solu assessment interface, one of the platform's core evaluations for professional profile and problem-solving style." },
            { title: "Interview Simulation", description: "Demo of the interview simulation with AI-based interactive chat, evaluating user answers and generating feedback for professional development." },
          ],
        },
        {
          title: "Electron Editor App",
          des: "A simple text editor built with Electron, with support for opening, editing, saving and renaming .txt files.",
        },
        {
          title: "DR Insights — Data Intelligence and Analytics Platform",
          des: "Insights and data analytics platform for companies, integrating multiple social media APIs for analysis of posts, texts, documents and startup data.",
          fullDes: "I worked as a Front-End Developer on a data insights and analytics platform for companies, integrating multiple social media APIs to analyze posts, texts, documents and startup data. The solution generates strategic insights through relational charts, pivot tables and interactive visualizations. I was responsible for developing responsive and scalable interfaces, with a focus on usability, performance and user experience. In collaboration with other developers and the UX team, I participated in daily meetings and technical decisions for the continuous evolution of the product. One of the highlights was the implementation of an interactive map that displays and marks company locations, enabling intuitive exploration of geographic data and expanding the visual analysis of insights presented on the platform.",
          media: [
            { title: "Interactive Company Map", description: "Interactive map that displays and marks companies geographically based on dynamic filters, enabling visual exploration of data, regional analysis and identification of market patterns in an intuitive and responsive way." },
            { title: "Intelligent Term Search", description: "Intelligent search interface that allows analysis of terms across multiple market APIs, consolidating data from social networks and external sources to generate strategic insights, trends and relevant opportunities for companies." },
            { title: "Text and Document Analysis", description: "Advanced text and document analysis module, responsible for processing large volumes of information and transforming unstructured data into actionable insights, supporting strategic decisions and market analysis." },
            { title: "Homepage", description: "Platform homepage where the user searches for terms, themes or strategic topics. The feature consolidates data from multiple social networks and digital sources, returning an overview with charts, related topics and relevant indicators, facilitating trend analysis and data-driven decision making." },
          ],
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
      inPartnershipWith: "In partnership with",
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
          title: "Voxa – Plataforma de Desenvolvimento e Orientação de Carreira",
          des: "Plataforma digital de autoconhecimento e orientação de carreira, com testes, avaliações e simulação de entrevistas com IA.",
          fullDes: "Atuação como Desenvolvedor Front-end no desenvolvimento do Voxa, uma plataforma digital focada em ajudar pessoas a se conhecerem melhor profissionalmente e tomarem decisões mais assertivas sobre sua carreira. O projeto reúne diferentes avaliações e experiências interativas, como: testes de momento de carreira e definição de objetivos profissionais; avaliações de resolução de problemas e raciocínio rápido; mapeamento de compatibilidade pessoa–empresa; avaliação de potencial de liderança por meio de estímulos cognitivos; simulação de entrevistas com chat interativo baseado em IA, com análise das respostas e cálculo de resultados em tempo real. No front-end, atuei na construção de interfaces interativas e responsivas, garantindo clareza na apresentação dos testes, boa experiência do usuário e fluidez na navegação entre etapas complexas do fluxo. Trabalhei em colaboração direta com time de produto, UX e desenvolvimento, contribuindo para a evolução contínua da plataforma e para a entrega de uma experiência intuitiva e confiável ao usuário final. O projeto envolveu desafios como organização de fluxos dinâmicos, exibição de resultados personalizados e integração com lógicas de avaliação, sempre com foco em usabilidade, acessibilidade e qualidade da interface.",
          media: [
            { title: "Homepage", description: "Tela inicial da plataforma Voxa, apresentando a jornada de autoconhecimento profissional, com acesso aos testes de carreira, descoberta de vagas e simulação de processos seletivos, em um layout moderno e focado em UX." },
            { title: "Testes e Resultados", description: "Visão geral dos principais testes da plataforma (Momento de Carreira, Solu, Mapeamento de Compatibilidade e Volt), com consolidação de resultados e insights sobre perfil profissional e potencial." },
            { title: "Avaliação Solu", description: "Interface da avaliação Solu, uma das principais avaliações da plataforma para perfil profissional e estilo de resolução de problemas." },
            { title: "Simulação de Entrevista", description: "Demonstração da simulação de entrevista com chat interativo baseado em IA, avaliando respostas do usuário e gerando feedbacks para desenvolvimento profissional." },
          ],
        },
        {
          title: "Electron Editor App",
          des: "Editor de texto simples feito com Electron: abrir, editar, salvar e renomear arquivos .txt.",
        },
        {
          title: "DR Insights — Plataforma de Inteligência e Análise de Dados",
          des: "Plataforma de insights e análise de dados para empresas, integrando múltiplas APIs de redes sociais para análise de posts, textos, documentos e dados de startups.",
          fullDes: "Atuei como Desenvolvedor Front-End em uma plataforma de insights e análise de dados para empresas, integrando múltiplas APIs de redes sociais para análise de posts, textos, documentos e dados de startups. A solução gera insights estratégicos por meio de gráficos relacionais, tabelas dinâmicas e visualizações interativas. Fui responsável pelo desenvolvimento de interfaces responsivas e escaláveis, com foco em usabilidade, performance e experiência do usuário. Em colaboração com outros desenvolvedores e o time de UX, participei de reuniões diárias e decisões técnicas para evolução contínua do produto. Um dos destaques do projeto foi a implementação de um mapa interativo, que exibe e marca a localização das empresas, permitindo a exploração intuitiva de dados geográficos e ampliando a análise visual dos insights apresentados na plataforma.",
          media: [
            { title: "Mapa Interativo de Empresas", description: "Mapa interativo que exibe e marca empresas geograficamente a partir de filtros dinâmicos, permitindo a exploração visual de dados, análise regional e identificação de padrões de mercado de forma intuitiva e responsiva." },
            { title: "Busca Inteligente de Termos", description: "Interface de busca inteligente que permite a análise de termos em múltiplas APIs de mercado, consolidando dados de redes sociais e fontes externas para gerar insights estratégicos, tendências e oportunidades relevantes para empresas." },
            { title: "Análise de Textos e Documentos", description: "Módulo de análise avançada de textos e documentos, responsável por processar grandes volumes de informação e transformar dados não estruturados em insights acionáveis, apoiando decisões estratégicas e análises de mercado." },
            { title: "Página Inicial", description: "Página inicial da plataforma onde o usuário realiza pesquisas por termos, temas ou assuntos estratégicos. O recurso consolida dados de múltiplas redes sociais e fontes digitais, retornando uma visão geral com gráficos, tópicos relacionados e indicadores relevantes, facilitando a análise de tendências e a tomada de decisões baseada em dados." },
          ],
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
      inPartnershipWith: "Associado a",
      notFound: "Projeto não encontrado.",
    },
  },
} as const;

export default translations;

export function getByPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}
