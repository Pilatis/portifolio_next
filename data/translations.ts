export type Locale = "en" | "pt";

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      certifications: "Certifications",
      principles: "Principles",
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
      checkLiveSite: "View project",
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
        {
          title: "B2BHotel – SaaS Platform for Hotel Service Management and Intermediation",
          des: "B2B SaaS platform for intermediation and management of services in the hotel sector, connecting hotels, service providers and administrative staff.",
          fullDes: "B2B SaaS platform aimed at intermediation and management of services in the hotel sector, connecting hotels, service providers and administrative staff in a centralized digital ecosystem. I actively participated in the development of the solution across different phases of the project, starting with a focus on front-end and later acting as a Full Stack developer, contributing both to the evolution of the interface and to the implementation of business rules and integrations on the backend. The platform is structured around three main profiles: Provider – structured onboarding flow with complete professional registration, automated resume generation, personalized calendar and intelligent opportunity filtering system; Hotel – operational panel for creating and tracking services, organizing demands and viewing indicators; Admin – operational core responsible for creating and managing services, financial consolidation, generation of receivables and payables, payment batch processing and integration with banking services. The solution was developed with a Full Stack architecture using React, Next.js, Spring Boot and PostgreSQL, hosted on AWS with separation between staging and production. The system centralizes operational and financial rules, including permission control by profile, automated report generation (PDF, CSV and XLSX) and REST API integration with Banco Inter for payment automation. Project in production, structured for scalability, operational control and continuous expansion.",
          media: [
            { title: "Hotel Dashboard – Operational View", description: "Main hotel panel with consolidated view of operations within the platform. The interface shows indicators such as active selection processes, scheduled interviews, hires made, vacancy validity, contracted plans and access requests, enabling quick monitoring and decision-making based on operational status." },
            { title: "Vacancy Management – Filters and Operational Control", description: "Vacancy management interface with filters by sector, state and city, enabling full organization and control of published opportunities. The screen allows editing and tracking of vacancies, reinforcing the modular structure and centralized management of selection processes." },
            { title: "Provider Dashboard – Personalized Opportunities", description: "Provider homepage with intelligent display of available vacancies according to location and applied filters (area, service, state and city). Designed to prioritize relevant opportunities and optimize navigation and applications within the platform." },
            { title: "Provider Calendar – Custom Calendar", description: "Calendar developed for full visualization of selection processes, vacancies and scheduled times. The interface allows organized tracking of the professional's activities, with a customized structure for availability and commitment control." },
          ],
        },
      ],
    },
    certifications: {
      heading: "My",
      highlight: "certifications",
      filterAll: "All",
      inProgress: "In progress",
      categoryLabels: {
        Frontend: "Frontend",
        Backend: "Backend",
        Fundamentos: "Fundamentals",
        Liderança: "Leadership",
        "Metodologias Ágeis": "Agile Methodologies",
      },
      items: [
        { title: "Next.js and React", description: "Complete training in React and Next.js with practical application in real projects, covering hybrid rendering, routing, API integration and Node.js fundamentals for building full stack applications.", issuer: "Udemy" },
        { title: "React from Zero to Mastery (Hooks, Router, API, Projects)", description: "In-depth React course focusing on Hooks, React Router, API consumption and practical project development. Emphasis on component architecture, state management and best practices.", issuer: "Udemy" },
        { title: "Computing: Fundamentals", description: "Introductory course on computing fundamentals, programming logic, structural concepts of computer systems and essential theoretical foundations for software development.", issuer: "IFSUL - Federal Institute Sul-rio-grandense" },
        { title: "Leadership in Team Management", description: "Training focused on developing leadership competencies, people management and team organization, with focus on productivity, strategic communication and goal alignment.", issuer: "Leonardo da Vinci University Center - Uniasselvi" },
        { title: "JavaScript", description: "Certification in fundamentals and practice of modern JavaScript, including DOM manipulation, data structures, advanced functions and building interactive web applications.", issuer: "freeCodeCamp" },
        { title: "Scrum", description: "Training in Scrum methodology with focus on agile team organization, role definition, sprint planning and practical application of agile frameworks in software projects.", issuer: "Leonardo da Vinci University Center - Uniasselvi" },
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
    principles: {
      heading: "Engineering",
      highlight: "principles",
      categoryLabels: {
        Arquitetura: "Architecture",
        Backend: "Backend",
        Frontend: "Frontend",
        "Banco de Dados": "Database",
        DevOps: "DevOps",
        Segurança: "Security",
        Qualidade: "Quality",
      },
      items: [
        { title: "Clear Separation of Responsibilities", description: "Structuring the application with a clear division between layers (controller, service, repository), avoiding coupling and facilitating maintenance, testing and system evolution." },
        { title: "RESTful Architecture and Well-Defined Contracts", description: "Development of REST APIs with route standardization, versioning and consistent contracts, ensuring predictability in frontend-backend integration." },
        { title: "Role-Based Access Control", description: "Implementation of permission control by role on the backend, ensuring each user type has restricted access to allowed functionality." },
        { title: "Structured and Scalable Frontend", description: "Frontend organization with reusable componentization, separation of logic and presentation, and domain-oriented folder structure." },
        { title: "Consistent Data Persistence and Modeling", description: "Relational modeling with focus on integrity, normalization and query efficiency, using PostgreSQL as the main database." },
        { title: "Cloud Infrastructure and Deploy", description: "Application configuration and deploy in cloud environment, with separation of environments (staging/prod) and secure organization of variables and credentials." },
        { title: "Clean Code and Quality Standards", description: "Application of code writing best practices, clear naming, single-responsibility functions and test coverage to reduce technical debt." },
        { title: "Report Generation and Data Export", description: "Standardization of report generation in multiple formats (PDF, CSV, XLSX) with defined contracts and data reuse for operational consistency." },
        { title: "Performance and Query Optimization", description: "Use of appropriate indexes, avoiding N+1 and heavy queries, with monitoring of impact on response time and database load." },
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
      certifications: "Certificações",
      principles: "Princípios",
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
      checkLiveSite: "Ver projeto",
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
        {
          title: "B2BHotel – Plataforma SaaS de Gestão e Intermediação de Serviços para Hotéis",
          des: "Plataforma SaaS B2B para intermediação e gestão de serviços no setor hoteleiro, conectando hotéis, prestadores e equipe administrativa.",
          fullDes: "Plataforma SaaS B2B voltada para intermediação e gestão de serviços no setor hoteleiro, conectando hotéis, prestadores e equipe administrativa em um ecossistema digital centralizado. Participei ativamente do desenvolvimento da solução ao longo de diferentes fases do projeto, iniciando com foco em front-end e posteriormente atuando como desenvolvedor Full Stack, contribuindo tanto na evolução da interface quanto na implementação de regras de negócio e integrações no backend. A plataforma é estruturada em três perfis principais: Prestador – fluxo de onboarding estruturado com cadastro profissional completo, geração automatizada de currículo, agenda personalizada e sistema inteligente de filtragem de oportunidades; Hotel – painel operacional para criação e acompanhamento de serviços, organização de demandas e visualização de indicadores; Admin – núcleo operacional responsável pela criação e gestão de serviços, consolidação financeira, geração de contas a receber e contas a pagar, processamento de lotes de pagamento e integração com serviços bancários. A solução foi desenvolvida com arquitetura Full Stack utilizando React, Next.js, Spring Boot e PostgreSQL, hospedada em ambiente AWS com separação entre homologação e produção. O sistema centraliza regras operacionais e financeiras da operação, incluindo controle de permissões por perfil, geração automatizada de relatórios (PDF, CSV e XLSX) e integração via API REST com o Banco Inter para automação de pagamentos. Projeto em produção, estruturado para escalabilidade, controle operacional e expansão contínua.",
          media: [
            { title: "Dashboard do Hotel – Visão Operacional", description: "Painel principal do hotel com visão consolidada da operação dentro da plataforma. A interface apresenta indicadores como processos seletivos ativos, entrevistas agendadas, contratações realizadas, validade de vagas, planos contratados e solicitações de acesso, permitindo acompanhamento rápido e tomada de decisão baseada em status operacionais." },
            { title: "Gestão de Vagas – Filtros e Controle Operacional", description: "Interface de gerenciamento de vagas com filtros por setor, estado e cidade, permitindo organização e controle completo das oportunidades publicadas. A tela possibilita edição e acompanhamento das vagas, reforçando a estrutura modular e a gestão centralizada de processos seletivos." },
            { title: "Dashboard do Prestador – Oportunidades Personalizadas", description: "Página inicial do prestador com exibição inteligente de vagas disponíveis conforme localização e filtros aplicados (área, serviço, estado e cidade). Desenvolvida para priorizar oportunidades relevantes e otimizar a navegação e candidatura dentro da plataforma." },
            { title: "Agenda do Prestador – Calendário Customizado", description: "Calendário desenvolvido para visualização completa de processos seletivos, vagas e horários agendados. A interface permite acompanhamento organizado das atividades do profissional, com estrutura personalizada para controle de disponibilidade e compromissos." },
          ],
        },
      ],
    },
    certifications: {
      heading: "Minhas",
      highlight: "certificações",
      filterAll: "Todos",
      inProgress: "Em andamento",
      categoryLabels: {
        Frontend: "Frontend",
        Backend: "Backend",
        Fundamentos: "Fundamentos",
        Liderança: "Liderança",
        "Metodologias Ágeis": "Metodologias Ágeis",
      },
      items: [
        { title: "Next.js e React", description: "Formação completa em React e Next.js com aplicação prática em projetos reais, abordando renderização híbrida, roteamento, integração com APIs e fundamentos de Node.js para construção de aplicações full stack.", issuer: "Udemy" },
        { title: "React do Zero a Maestria (c/Hooks, Router, API, Projetos)", description: "Curso aprofundado em React com foco em Hooks, React Router, consumo de APIs e desenvolvimento de projetos práticos. Ênfase em arquitetura de componentes, gerenciamento de estado e boas práticas.", issuer: "Udemy" },
        { title: "Computação: Fundamentos", description: "Curso introdutório abordando fundamentos da computação, lógica de programação, conceitos estruturais de sistemas computacionais e bases teóricas essenciais para desenvolvimento de software.", issuer: "IFSUL - Instituto Federal Sul-rio-grandense" },
        { title: "A Liderança na Gestão de Equipes", description: "Formação voltada ao desenvolvimento de competências em liderança, gestão de pessoas e organização de equipes, com foco em produtividade, comunicação estratégica e alinhamento de objetivos.", issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi" },
        { title: "JavaScript", description: "Certificação em fundamentos e prática de JavaScript moderno, incluindo manipulação de DOM, estruturas de dados, funções avançadas e construção de aplicações web interativas.", issuer: "freeCodeCamp" },
        { title: "Scrum", description: "Formação em metodologia Scrum com foco em organização de times ágeis, definição de papéis, planejamento de sprints e aplicação prática de frameworks ágeis em projetos de software.", issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi" },
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
    principles: {
      heading: "Princípios de",
      highlight: "engenharia",
      categoryLabels: {
        Arquitetura: "Arquitetura",
        Backend: "Backend",
        Frontend: "Frontend",
        "Banco de Dados": "Banco de Dados",
        DevOps: "DevOps",
        Segurança: "Segurança",
        Qualidade: "Qualidade",
      },
      items: [
        { title: "Separação Clara de Responsabilidades", description: "Estruturação da aplicação com divisão clara entre camadas (controller, service, repository), evitando acoplamento e facilitando manutenção, testes e evolução do sistema." },
        { title: "Arquitetura RESTful e Contratos Bem Definidos", description: "Desenvolvimento de APIs REST com padronização de rotas, versionamento e contratos consistentes, garantindo previsibilidade na integração entre frontend e backend." },
        { title: "Controle de Acesso Baseado em Roles", description: "Implementação de controle de permissões por role no backend, assegurando que cada tipo de usuário tenha acesso restrito às funcionalidades permitidas." },
        { title: "Frontend Estruturado e Escalável", description: "Organização do frontend com componentização reutilizável, separação de lógica e apresentação, e estrutura de pastas orientada a domínio." },
        { title: "Persistência e Modelagem de Dados Consistentes", description: "Modelagem relacional com foco em integridade, normalização e eficiência de consultas, utilizando PostgreSQL como banco principal." },
        { title: "Infraestrutura e Deploy em Nuvem", description: "Configuração e deploy de aplicação em ambiente cloud, com separação de ambientes (HML/Prod) e organização segura de variáveis e credenciais." },
        { title: "Código Limpo e Padrões de Qualidade", description: "Aplicação de boas práticas de escrita de código, nomenclatura clara, funções com responsabilidade única e cobertura de testes para reduzir débito técnico." },
        { title: "Geração de Relatórios e Exportação de Dados", description: "Padronização da geração de relatórios em múltiplos formatos (PDF, CSV, XLSX) com contratos definidos e reuso de dados para consistência operacional." },
        { title: "Performance e Otimização de Consultas", description: "Uso de índices adequados, evitando N+1 e consultas pesadas, com monitoramento de impacto em tempo de resposta e carga no banco." },
      ],
    },
    approach: {
      heading: "Meu",
      highlight: "approach",
      cards: [
        {
          title: "Planejamento e Estratégia",
          order: "Frase 1",
          des: "Começo entendendo objetivos, usuários e necessidades técnicas para definir a direção certa desde o primeiro dia.",
        },
        {
          title: "Desenvolvimento e Colaboração",
          order: "Frase 2",
          des: "Desenvolvo com foco em código limpo, comunicação clara e atualizações constantes durante todo o processo.",
        },
        {
          title: "Entrega e Evolução",
          order: "Frase 3",
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
