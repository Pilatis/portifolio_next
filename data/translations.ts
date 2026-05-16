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
      short: [
        "Full Stack Developer based in Brazil. I work with React, Next.js and TypeScript to build clean, scalable applications.",
        "I focus on front-end quality and back-end integration, and I contribute to projects that create real value for users and businesses.",
      ],
      paragraphs: [
        "I'm Lucas Pilati, a Full Stack Developer based in Brazil, passionate about building clean, accessible and high-quality digital experiences.",
        "I work mainly with React, Next.js and TypeScript, combining strong front-end foundations with back-end knowledge to build complete, reliable applications.",
        "I enjoy exploring new technologies, improving how products are built, and contributing to projects that create real value for users and businesses.",
      ],
      imageAlt: "Lucas Pilati - Full Stack Developer",
    },
    viewMode: {
      label: "View:",
      recruiter: "Recruiter",
      technical: "Technical",
    },
    grid: {
      items: [
        { title: "Collaborative mindset with designers, product and engineering teams.", description: "" },
        { title: "I'm very flexible with time zone communications", description: "" },
        { title: "My tech stack", description: "I constantly try to improve" },
        { title: "Clean, scalable code with performance and usability in mind.", description: "" },
        { title: "Building digital experiences that combine usability, performance and impact.", description: "The Inside Scoop" },
        { title: "Always open to new challenges and impactful projects.", description: "" },
      ],
    },
    projects: {
      heading: "A small selection of",
      highlight: "recent projects",
      checkLiveSite: "View project",
      viewAll: "View all projects",
      items: [
        {
          title: "Voxa – Career Development and Guidance Platform",
          des: "Digital platform for self-awareness and career guidance, with assessments, tests and AI-powered interview simulation.",
          fullDes: `I worked as a Front-end Developer on Voxa, a digital platform focused on helping people understand themselves better professionally and make more assertive career decisions.

The project brings together different assessments and interactive experiences, such as career moment tests, professional goal definition, problem-solving assessments, person–company fit mapping and leadership potential analysis. One of the platform's main differentiators is interview simulation with an AI-powered interactive chat that analyzes answers and generates results in real time.

On the front end, I built interactive, responsive, user-centered interfaces, ensuring clarity in presenting tests and smooth navigation across complex steps. I worked hands-on with dynamic flows and varied UI states, keeping data display consistent and personalized outcomes reliable.

I actively contributed to product evolution alongside product, UX and engineering teams, supporting technical decisions and continuous improvements. The project demanded strong attention to usability, accessibility and performance, especially for long, interactive journeys.`,
          practicalApplication:
            "Development of interfaces for dynamic assessment flows, including AI-powered interview simulation, real-time result processing and personalized data presentation for users.",
          impact:
            "Direct contribution to the user experience on a career-focused platform, ensuring clarity, flow and reliability in critical interactions such as assessments and interview simulations.",
          media: [
            { title: "Homepage", description: "Landing page of the Voxa platform, presenting the professional self-awareness journey, with access to career tests, job discovery and selection process simulation, in a modern, UX-focused layout." },
            { title: "Tests and Results", description: "Overview of the platform's main tests (Career Moment, Solu, Fit Mapping and Volt), with consolidated results and insights on professional profile and potential." },
            { title: "Solu Assessment", description: "Solu assessment interface, one of the platform's core evaluations for professional profile and problem-solving style." },
            { title: "Interview Simulation", description: "Demo of the interview simulation with AI-based interactive chat, evaluating user answers and generating feedback for professional development." },
          ],
        },
        {
          title: "Fotocord – Photo Book Creation App with Integrated Checkout",
          des: "Mobile app for personalized photo books, with full order flow, authentication and integrated payments.",
          fullDes: `I worked on Fotocord, a mobile app for creating personalized photo books: users assemble albums with their photos, pay in the app and receive the physical product.

The project uses React Native (Expo) on the client and NestJS on the backend, with PostgreSQL, Prisma and Docker.

My main responsibility was the payments system end to end: integrating the backend with the K8 Fintech gateway and shaping the entire checkout flow. I implemented multiple methods—including PIX, hybrid boleto, credit card and subscriptions—covering charge creation, processing and reliable payment status updates.

The design includes state handling (pending, approved, error, expired), webhooks to stay in sync with the gateway and idempotency strategies to avoid duplicate charges. I also wired payments to orders so financial transactions stayed consistent with the purchase journey.

I contributed to authentication and user management with Keycloak, covering sign-up, login and application security.

I also worked on communications: transactional email with Resend (account confirmation, password recovery) and push notifications with Expo Notifications, improving engagement and the overall experience.

The project involved real product challenges: a robust checkout, integrations with external services, asynchronous state handling and a smooth experience across the full user journey.`,
          practicalApplication:
            "Implementation of a complete payments system in production, including integration with a financial gateway, multiple payment methods, webhooks for status updates and a direct link to the platform order flow.",
          impact:
            "Ownership of one of the most critical parts of the product, ensuring the purchase journey worked end to end—supporting system reliability, user experience and operational viability of the app.",
          media: [
            { title: "User registration flow", description: "Full in-app account creation flow, including data entry steps and initial user validation." },
            { title: "Email verification", description: "Account confirmation screen with a code sent by email, validating the user and securing access to the platform." },
            { title: "Notification center", description: "Screen listing system notifications such as account created, payment completed and albums created, keeping the user informed in real time." },
            { title: "Subscription management", description: "View and manage an active subscription, integrated with recurring payments." },
            { title: "Saved cards", description: "Manage previously saved cards for secure reuse at checkout." },
            { title: "Add card", description: "Full flow to enter credit card details, integrated with the payment gateway including validation and tokenization." },
            { title: "PIX payment", description: "PIX charge screen with QR code and instructions for immediate payment." },
            { title: "Full checkout flow", description: "End-to-end payment demo (mocked): method selection, order summary and transaction states such as waiting, success, error and expired for PIX and boleto." },
          ],
        },
        {
          title: "DR Insights — Data Intelligence and Analytics Platform",
          des: "Insights and data analytics platform for companies, integrating multiple social media APIs for analysis of posts, texts, documents and startup data.",
          fullDes: `I worked as a Front-End Developer on a data insights and analytics platform for companies, integrating multiple social media APIs to analyze posts, texts, documents and startup data.

The solution generates strategic insights through relational charts, pivot tables and interactive visualizations.

I was responsible for developing responsive and scalable interfaces, with a focus on usability, performance and user experience. In collaboration with other developers and the UX team, I participated in daily meetings and technical decisions for the continuous evolution of the product.

One of the highlights was the implementation of an interactive map that displays and marks company locations, enabling intuitive exploration of geographic data and expanding the visual analysis of insights presented on the platform.`,
          media: [
            { title: "Interactive Company Map", description: "Interactive map that displays and marks companies geographically based on dynamic filters, enabling visual exploration of data, regional analysis and identification of market patterns in an intuitive and responsive way." },
            { title: "Intelligent Term Search", description: "Intelligent search interface that allows analysis of terms across multiple market APIs, consolidating data from social networks and external sources to generate strategic insights, trends and relevant opportunities for companies." },
            { title: "Text and Document Analysis", description: "Advanced text and document analysis module, responsible for processing large volumes of information and transforming unstructured data into actionable insights, supporting strategic decisions and market analysis." },
            { title: "Homepage", description: "Platform homepage where the user searches for terms, themes or strategic topics. The feature consolidates data from multiple social networks and digital sources, returning an overview with charts, related topics and relevant indicators, facilitating trend analysis and data-driven decision making." },
          ],
        },
        {
          title: "B2BHotel – SaaS Platform for Hotel Service Management and Intermediation",
          des: "B2B SaaS platform for operational and financial management in the hotel sector, connecting hotels, providers and administration.",
          fullDes: `The B2B SaaS platform focuses on intermediation and management of services in the hotel sector, connecting hotels, providers and administrative staff in one centralized digital ecosystem.

I started as a Front-End developer and later worked as Full Stack, contributing both to the interface and to business rules and backend integrations.

The platform is organized around three main profiles: Provider—with full onboarding, automated résumé generation and a personalized calendar; Hotel—with an operational panel for creating and tracking services; and Admin—handling financial management, payment processing and operational control.

The solution was built with a Full Stack architecture using React, Next.js, Spring Boot and PostgreSQL, hosted on AWS. It centralizes operational and financial rules, including permission controls, report generation and integration with Banco Inter for payment automation.

The project involved challenges such as multi-profile access control, complex operational flows, banking integrations and consistency across financial processes.`,
          practicalApplication:
            "Full stack development of a multi-profile SaaS platform, including business rules, banking API integration and automated reporting and financial workflows.",
          impact:
            "Direct contribution to structuring a production solution that centralizes hotel-sector operations and financial processes, improving operational efficiency and platform control.",
          media: [
            { title: "Hotel Dashboard – Operational View", description: "Dashboard with a consolidated view of hotel operations, showing indicators and status for hiring processes, hires and activities." },
            { title: "Vacancy Management – Operational Control", description: "Vacancy management UI with advanced filters for organizing and tracking all published opportunities." },
            { title: "Provider Dashboard – Opportunities", description: "Provider home screen with personalized vacancy listings based on filters and location, prioritizing relevance." },
            { title: "Provider Calendar – Calendar", description: "Custom calendar for commitments, hiring processes and provider availability." },
          ],
        },
      ],
    },
    certifications: {
      heading: "My",
      highlight: "certifications",
      filterAll: "All",
      searchPlaceholder: "Search certifications...",
      inProgress: "In progress",
      viewAll: "View all certifications",
      viewDetails: "View details",
      pageBack: "Back to portfolio",
      backToCertifications: "Back to certifications",
      notFound: "Certification not found.",
      period: "Period",
      year: "Year",
      hoursLabel: "Duration",
      topicsLabel: "Key topics",
      practicalApplicationLabel: "Practical application",
      impactLabel: "Impact",
      skillsLabel: "Skills",
      categoryLabel: "Category",
      issuerLabel: "Issuer",
      categoryLabels: {
        Frontend: "Frontend",
        Backend: "Backend",
        Fundamentos: "Fundamentals",
        Liderança: "Leadership",
        "Metodologias Ágeis": "Agile Methodologies",
        Idiomas: "Languages",
        Comunicação: "Communication",
        "Banco de Dados": "Databases",
        APIs: "APIs",
        "Inteligência Artificial": "Artificial Intelligence",
        Dados: "Data",
      },
      items: [
        { title: "Next.js and React", description: "Complete training in React and Next.js with practical application in real projects, covering hybrid rendering, routing, API integration and Node.js fundamentals for building full stack applications.", issuer: "Udemy", skills: ["React", "Next.js", "Node.js", "HTML", "CSS"], practicalApplication: "Application of concepts in the development of modern applications using React, Next.js and REST APIs.", impact: "Improved organization of front-end applications, page load optimization and better structuring of web projects." },
        { title: "React from Zero to Mastery (Hooks, Router, API, Projects)", description: "In-depth React course focusing on Hooks, React Router, API consumption and practical project development. Emphasis on component architecture, state management and best practices.", issuer: "Udemy", skills: ["React", "Node.js", "HTML", "CSS"], practicalApplication: "Application of concepts to create modular and reusable interfaces in React applications.", impact: "Increased component reuse and improved maintainability of front-end applications." },
        { title: "Computing: Fundamentals", description: "Introductory course on computing fundamentals, programming logic, structural concepts of computer systems and essential theoretical foundations for software development.", issuer: "IFSUL - Federal Institute Sul-rio-grandense", skills: ["Programming Logic", "Computer Architecture", "Algorithms"], practicalApplication: "Theoretical foundation applied to algorithm development and structured problem solving in software projects.", impact: "Strengthened logical foundation for application development and better understanding of system structure." },
        { title: "Leadership in Team Management", description: "Training focused on developing leadership competencies, people management and team organization, with focus on productivity, strategic communication and goal alignment.", issuer: "Leonardo da Vinci University Center - Uniasselvi", skills: ["Team Management", "Communication", "Decision Making"], practicalApplication: "Application of concepts in organizing workflows and collaboration in development projects.", impact: "Improved communication and task organization in collaborative environments." },
        { title: "JavaScript", description: "Certification in fundamentals and practice of modern JavaScript, including DOM manipulation, data structures, advanced functions and building interactive web applications.", issuer: "freeCodeCamp", skills: ["JavaScript", "ES6+", "DOM Manipulation", "Data Structures", "Programming Logic"], practicalApplication: "Continuous use of JavaScript in building applications with React, Next.js and Node.js.", impact: "Improved organization of business logic and greater efficiency in data manipulation in web applications." },
        { title: "Scrum", description: "Training in Scrum methodology with focus on agile team organization, role definition, sprint planning and practical application of agile frameworks in software projects.", issuer: "Leonardo da Vinci University Center - Uniasselvi", skills: ["Scrum", "Agile Management", "Sprints", "Product Backlog"], practicalApplication: "Application of agile practices in planning and organizing software projects.", impact: "Improved task management and organization of the development workflow." },
        { title: "React Native: Creating Modern Mobile Applications", description: "React Native course offered by IFSUL (40 hours), held from March 3 to May 4, 2025. Practical approach to creating modern mobile applications for iOS and Android, focusing on components, navigation, state and API integration.", issuer: "IFSUL - Federal Institute Sul-rio-grandense", skills: ["React Native", "JavaScript", "Mobile", "iOS", "Android", "Expo"], practicalApplication: "Exploration of cross-platform mobile development using React Native and API integration.", impact: "Expanded capability to develop for iOS and Android mobile platforms." },
        { title: "English for Developers – A2 (CEFR)", description: "English certification for developers focusing on grammar, listening and reading comprehension, aligned to CEFR level A2.", issuer: "freeCodeCamp", skills: ["English", "Reading", "Listening", "Grammar", "Technical Communication"], practicalApplication: "Use of English for reading technical documentation, international courses and following global developer community content.", impact: "Greater autonomy to learn technologies, understand official documentation and engage with technical materials in English." },
        { title: "Databases: Relational Systems and Modeling", description: "Training in databases with a focus on relational modeling, normalization and efficient data structuring, ensuring integrity, consistency and support for scalable applications.", issuer: "IFSUL - Federal Institute Sul-rio-grandense", skills: ["SQL", "Data Modeling", "Relational Databases", "Database Design", "Normalization"], practicalApplication: "Application in modeling relational databases for APIs and web systems, ensuring data consistency and query efficiency.", impact: "Evolution in the ability to structure scalable and optimized databases, reducing integrity issues and improving application performance." },
        { title: "Node.js API Development and Backend Architecture", description: "Certification in modern API development with Node.js, covering RESTful architecture, building services with Express.js, database integration, and authentication and authorization implementation.", issuer: "Federal Institute of Rio Grande do Sul (IFRS)", skills: ["Node.js", "Express.js", "REST APIs", "Backend Development", "Authentication", "Authorization", "Database Integration"], practicalApplication: "Application in building scalable APIs, with route definition, database integration and implementation of secure access control.", impact: "Strengthening in building robust, well-structured backends, with focus on security, organization and API development best practices." },
        { title: "Artificial Intelligence I: Artificial Neural Networks", description: "Training in Artificial Intelligence focused on artificial neural networks, from foundational concepts to architectures such as Perceptron, Adaline and Multilayer Perceptron (MLP).", issuer: "Federal Institute of Education, Science and Technology of Triângulo Mineiro (IFTM)", skills: ["Artificial Intelligence", "Neural Networks", "Machine Learning", "Perceptron", "MLP"], practicalApplication: "Understanding and applying neural network concepts to computational problems, as a foundation for growth in machine learning and intelligent systems.", impact: "Expanded technical foundation in artificial intelligence, enabling understanding of learning algorithms and their applications in modern solutions." },
        { title: "Artificial Intelligence II: Advanced Neural Network Architectures", description: "Advanced training in Artificial Intelligence focused on modern neural network architectures, including convolutional networks, recurrent models such as LSTM, and techniques for imbalanced data and dimensionality reduction.", issuer: "Federal Institute of Education, Science and Technology of Triângulo Mineiro (IFTM)", skills: ["Neural Networks", "Deep Learning", "CNN", "LSTM", "Machine Learning", "Dimensionality Reduction"], practicalApplication: "Application of advanced neural network architectures in building intelligent solutions, including processing of complex and sequential data.", impact: "Deeper understanding of advanced machine learning models, expanding the ability to tackle real-world problems with complex data." },
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
      viewAll: "View all principles",
      pageBack: "Back to portfolio",
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
      resumeTitle: "Resume",
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
      practicalApplicationLabel: "Practical application",
      impactLabel: "Impact",
      stagingNoticeTitle: "Staging & demo content",
      stagingNoticeBody:
        "Images, videos and screens from staging or test, not production. Names, numbers and flows are fictional or anonymized examples for the portfolio; they do not represent real clients or identifiable data.",
      stagingNoticeTerm: "staging",
      stagingNoticeTermTooltip:
        "Pre-production environment used to validate changes before the final release.",
      stagingNoticeCompact:
        "Staging or test media, not production. No real client data.",
    },
    projectsPage: {
      heading: "Projects",
      pageBack: "Back to portfolio",
      searchPlaceholder: "Search projects...",
      filterAll: "All",
      noResults: "No projects found.",
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
      short: [
        "Desenvolvedor Full Stack baseado no Brasil. Trabalho com React, Next.js e TypeScript para construir aplicações limpas e escaláveis.",
        "Foco em qualidade de front-end e integração com back-end, contribuindo com projetos que geram valor real para usuários e negócios.",
      ],
      paragraphs: [
        "Sou Lucas Pilati, Desenvolvedor Full Stack baseado no Brasil, apaixonado por criar experiências digitais limpas, acessíveis e de alta qualidade.",
        "Trabalho principalmente com React, Next.js e TypeScript, unindo bases sólidas de front-end a conhecimento de back-end para construir aplicações completas e confiáveis.",
        "Gosto de explorar novas tecnologias, melhorar a forma como produtos são construídos e contribuir com projetos que geram valor real para usuários e negócios.",
      ],
      imageAlt: "Lucas Pilati - Desenvolvedor Full Stack",
    },
    viewMode: {
      label: "Visualização:",
      recruiter: "Recrutador",
      technical: "Técnico",
    },
    grid: {
      items: [
        { title: "Mentalidade colaborativa com design, produto e engenharia.", description: "" },
        { title: "Muito flexível com fusos horários na comunicação", description: "" },
        { title: "Minha stack", description: "Sempre buscando evoluir" },
        { title: "Código limpo e escalável com foco em performance e usabilidade.", description: "" },
        { title: "Criando experiências digitais que unem usabilidade, performance e impacto.", description: "Por dentro" },
        { title: "Sempre aberto a novos desafios e projetos com impacto.", description: "" },
      ],
    },
    projects: {
      heading: "Uma pequena seleção de",
      highlight: "projetos recentes",
      checkLiveSite: "Ver projeto",
      viewAll: "Ver mais projetos",
      items: [
        {
          title: "Voxa – Plataforma de Desenvolvimento e Orientação de Carreira",
          des: "Plataforma digital de autoconhecimento e orientação de carreira, com testes, avaliações e simulação de entrevistas com IA.",
          fullDes: `Atuação como Desenvolvedor Front-end no desenvolvimento do Voxa, uma plataforma digital focada em ajudar pessoas a se conhecerem melhor profissionalmente e tomarem decisões mais assertivas sobre sua carreira.
        
        O projeto reúne diferentes avaliações e experiências interativas, como testes de momento de carreira, definição de objetivos profissionais, avaliações de resolução de problemas, mapeamento de compatibilidade pessoa–empresa e análise de potencial de liderança. Um dos principais diferenciais da plataforma é a simulação de entrevistas com chat interativo baseado em IA, responsável por analisar respostas e gerar resultados em tempo real.
        
        No front-end, atuei na construção de interfaces interativas, responsivas e orientadas à experiência do usuário, garantindo clareza na apresentação dos testes e fluidez na navegação entre etapas complexas. Trabalhei diretamente com fluxos dinâmicos e estados variados, assegurando consistência na exibição de dados e resultados personalizados.
        
        Participei ativamente da evolução do produto em colaboração com equipes de produto, UX e desenvolvimento, contribuindo para decisões técnicas e melhorias contínuas na plataforma. O projeto exigiu atenção especial à usabilidade, acessibilidade e performance, principalmente na construção de jornadas longas e interativas.`,
        
          practicalApplication:
            "Desenvolvimento de interfaces complexas para fluxos dinâmicos de avaliação, incluindo simulação de entrevistas com IA, processamento de resultados em tempo real e exibição de dados personalizados ao usuário.",
        
          impact:
            "Contribuição direta na experiência do usuário em uma plataforma centrada em decisões de carreira, garantindo clareza, fluidez e confiabilidade em interações críticas como testes e simulações de entrevista.",
        
          media: [
            { title: "Homepage", description: "Tela inicial da plataforma Voxa, apresentando a jornada de autoconhecimento profissional, com acesso aos testes de carreira, descoberta de vagas e simulação de processos seletivos, em um layout moderno e focado em UX." },
            { title: "Testes e Resultados", description: "Visão geral dos principais testes da plataforma (Momento de Carreira, Solu, Mapeamento de Compatibilidade e Volt), com consolidação de resultados e insights sobre perfil profissional e potencial." },
            { title: "Avaliação Solu", description: "Interface da avaliação Solu, uma das principais avaliações da plataforma para perfil profissional e estilo de resolução de problemas." },
            { title: "Simulação de Entrevista", description: "Demonstração da simulação de entrevista com chat interativo baseado em IA, avaliando respostas do usuário e gerando feedbacks para desenvolvimento profissional." },
          ],
        },
          {
            title: "Fotocord – Aplicativo de Criação de Fotolivros com Checkout Integrado",
            des: "Aplicativo mobile para criação de fotolivros personalizados, com fluxo completo de pedidos, autenticação e pagamentos integrados.",
            fullDes: `Atuação no desenvolvimento do Fotocord, um aplicativo mobile voltado à criação de fotolivros personalizados, onde o usuário pode montar álbuns com suas fotos, realizar o pagamento diretamente pelo app e receber o produto físico.
        
        O projeto foi construído com React Native (Expo) no front-end e NestJS no backend, utilizando PostgreSQL, Prisma e Docker para estruturação da aplicação.
        
        Minha principal responsabilidade foi o desenvolvimento completo do sistema de pagamentos, integrando o backend a um gateway financeiro (K8 Fintech) e estruturando todo o fluxo de checkout da aplicação. Implementei suporte a múltiplos métodos de pagamento, incluindo PIX, boleto híbrido, cartão de crédito e assinaturas, garantindo a criação de cobranças, processamento e atualização de estados de pagamento de forma confiável.
        
        O sistema foi projetado com controle de estados (pendente, aprovado, erro, expirado), utilização de webhooks para sincronização com o gateway e estratégias de idempotência para evitar duplicidade de cobranças. Também atuei na conexão entre pagamentos e pedidos, garantindo consistência entre transações financeiras e o fluxo de compra do usuário.
        
        Além disso, contribuí diretamente na implementação da autenticação e gerenciamento de usuários utilizando Keycloak, integrando fluxos de cadastro, login e segurança da aplicação.
        
        Participei também da implementação de comunicação do sistema, incluindo envio de emails transacionais com Resend (confirmação de conta, recuperação de senha) e sistema de notificações push utilizando Expo Notifications, melhorando a experiência e o engajamento do usuário.
        
        O projeto envolveu desafios reais de produto, como construção de um checkout robusto, integração com serviços externos, tratamento de estados assíncronos e garantia de uma experiência fluida para o usuário em todas as etapas da jornada.`,
        
            practicalApplication:
              "Implementação de um sistema de pagamentos completo em produção, incluindo integração com gateway financeiro, processamento de múltiplos métodos de pagamento, uso de webhooks para atualização de estados e conexão direta com o fluxo de pedidos do sistema.",
        
            impact:
              "Atuação em uma das áreas mais críticas do produto, garantindo que o fluxo de compra funcionasse de ponta a ponta. Contribuiu diretamente para a confiabilidade do sistema, experiência do usuário e viabilidade operacional do aplicativo.",
        
            media: [
              {
                title: "Fluxo de Cadastro do Usuário",
                description: "Demonstração do processo completo de criação de conta no aplicativo, incluindo etapas de entrada de dados e validação inicial do usuário."
              },
              {
                title: "Verificação de Email",
                description: "Tela de confirmação de conta via código enviado por email, garantindo validação do usuário e segurança no acesso à plataforma."
              },
              {
                title: "Central de Notificações",
                description: "Tela que apresenta notificações do sistema, incluindo eventos como conta criada, pagamento realizado e criação de álbuns, integrando comunicação em tempo real com o usuário."
              },
              {
                title: "Gestão de Assinatura",
                description: "Interface de visualização e gerenciamento de assinatura ativa, integrada ao sistema de pagamentos recorrentes."
              },
              {
                title: "Cartões Salvos",
                description: "Tela de gerenciamento de cartões previamente cadastrados, permitindo reutilização segura de métodos de pagamento."
              },
              {
                title: "Cadastro de Cartão",
                description: "Fluxo completo de inserção de dados de cartão de crédito, integrado ao gateway de pagamento com validação e tokenização."
              },
              {
                title: "Pagamento via PIX",
                description: "Tela de geração de cobrança via PIX, com exibição de QR Code e instruções para pagamento imediato."
              },
              {
                title: "Fluxo Completo de Checkout",
                description: "Demonstração do fluxo completo de pagamento (mockado), incluindo escolha de método, resumo do pedido e estados de transação como aguardando, sucesso, erro e expirado para PIX e boleto."
              }
            ]
          },
        {
          title: "DR Insights — Plataforma de Inteligência e Análise de Dados",
          des: "Plataforma de insights e análise de dados para empresas, integrando múltiplas APIs de redes sociais para análise de posts, textos, documentos e dados de startups.",
          fullDes: `Atuei como Desenvolvedor Front-End em uma plataforma de insights e análise de dados para empresas, integrando múltiplas APIs de redes sociais para análise de posts, textos, documentos e dados de startups.

A solução gera insights estratégicos por meio de gráficos relacionais, tabelas dinâmicas e visualizações interativas.

Fui responsável pelo desenvolvimento de interfaces responsivas e escaláveis, com foco em usabilidade, performance e experiência do usuário. Em colaboração com outros desenvolvedores e o time de UX, participei de reuniões diárias e decisões técnicas para evolução contínua do produto.

Um dos destaques do projeto foi a implementação de um mapa interativo, que exibe e marca a localização das empresas, permitindo a exploração intuitiva de dados geográficos e ampliando a análise visual dos insights apresentados na plataforma.`,
          media: [
            { title: "Mapa Interativo de Empresas", description: "Mapa interativo que exibe e marca empresas geograficamente a partir de filtros dinâmicos, permitindo a exploração visual de dados, análise regional e identificação de padrões de mercado de forma intuitiva e responsiva." },
            { title: "Busca Inteligente de Termos", description: "Interface de busca inteligente que permite a análise de termos em múltiplas APIs de mercado, consolidando dados de redes sociais e fontes externas para gerar insights estratégicos, tendências e oportunidades relevantes para empresas." },
            { title: "Análise de Textos e Documentos", description: "Módulo de análise avançada de textos e documentos, responsável por processar grandes volumes de informação e transformar dados não estruturados em insights acionáveis, apoiando decisões estratégicas e análises de mercado." },
            { title: "Página Inicial", description: "Página inicial da plataforma onde o usuário realiza pesquisas por termos, temas ou assuntos estratégicos. O recurso consolida dados de múltiplas redes sociais e fontes digitais, retornando uma visão geral com gráficos, tópicos relacionados e indicadores relevantes, facilitando a análise de tendências e a tomada de decisões baseada em dados." },
          ],
        },
        {
          title: "B2BHotel – Plataforma SaaS de Gestão e Intermediação de Serviços para Hotéis",
          des: "Plataforma SaaS B2B para gestão operacional e financeira no setor hoteleiro, conectando hotéis, prestadores e administração.",
          fullDes: `Plataforma SaaS B2B voltada para intermediação e gestão de serviços no setor hoteleiro, conectando hotéis, prestadores e equipe administrativa em um ecossistema digital centralizado.
        
        Atuei inicialmente como desenvolvedor Front-End e posteriormente como Full Stack, contribuindo tanto na construção da interface quanto na implementação de regras de negócio e integrações no backend.
        
        A plataforma é estruturada em três perfis principais: Prestador, com onboarding completo, geração automatizada de currículo e agenda personalizada; Hotel, com painel operacional para criação e acompanhamento de serviços; e Admin, responsável pela gestão financeira, processamento de pagamentos e controle da operação.
        
        A solução foi desenvolvida com arquitetura Full Stack utilizando React, Next.js, Spring Boot e PostgreSQL, hospedada em ambiente AWS. O sistema centraliza regras operacionais e financeiras, incluindo controle de permissões, geração de relatórios e integração com o Banco Inter para automação de pagamentos.
        
        O projeto envolveu desafios como controle de múltiplos perfis, organização de fluxos operacionais complexos, integração com serviços bancários e garantia de consistência em processos financeiros.`,
        
          practicalApplication:
            "Desenvolvimento full stack de uma plataforma SaaS com múltiplos perfis de usuário, incluindo implementação de regras de negócio, integração com APIs bancárias e geração automatizada de relatórios e processos financeiros.",
        
          impact:
            "Contribuição direta na estruturação de uma solução em produção, centralizando operações e processos financeiros do setor hoteleiro, aumentando eficiência operacional e controle da plataforma.",
        
          media: [
            { title: "Dashboard do Hotel – Visão Operacional", description: "Painel com visão consolidada da operação do hotel, apresentando indicadores e status de processos seletivos, contratações e atividades." },
            { title: "Gestão de Vagas – Controle Operacional", description: "Interface de gerenciamento de vagas com filtros avançados, permitindo organização e acompanhamento completo das oportunidades publicadas." },
            { title: "Dashboard do Prestador – Oportunidades", description: "Tela inicial do prestador com exibição personalizada de vagas conforme filtros e localização, priorizando relevância." },
            { title: "Agenda do Prestador – Calendário", description: "Calendário customizado para visualização de compromissos, processos seletivos e disponibilidade do profissional." },
          ],
        },
      ],
    },
    certifications: {
      heading: "Minhas",
      highlight: "certificações",
      filterAll: "Todos",
      searchPlaceholder: "Buscar certificações...",
      inProgress: "Em andamento",
      viewAll: "Ver mais certificações",
      viewDetails: "Ver detalhes",
      pageBack: "Voltar ao portfólio",
      backToCertifications: "Voltar às certificações",
      notFound: "Certificação não encontrada.",
      period: "Período",
      year: "Ano",
      hoursLabel: "Carga horária",
      topicsLabel: "Principais tópicos",
      practicalApplicationLabel: "Aplicação prática",
      impactLabel: "Impacto",
      skillsLabel: "Competências",
      categoryLabel: "Categoria",
      issuerLabel: "Instituição",
      categoryLabels: {
        Frontend: "Frontend",
        Backend: "Backend",
        Fundamentos: "Fundamentos",
        Liderança: "Liderança",
        "Metodologias Ágeis": "Metodologias Ágeis",
        Idiomas: "Idiomas",
        Comunicação: "Comunicação",
        "Banco de Dados": "Banco de Dados",
        APIs: "APIs",
        "Inteligência Artificial": "Inteligência Artificial",
        Dados: "Dados",
      },
      items: [
        { title: "Next.js e React", description: "Formação completa em React e Next.js com aplicação prática em projetos reais, abordando renderização híbrida, roteamento, integração com APIs e fundamentos de Node.js para construção de aplicações full stack.", issuer: "Udemy", skills: ["React", "Next.js", "Node.js", "HTML", "CSS"], practicalApplication: "Aplicação dos conceitos no desenvolvimento de aplicações modernas utilizando React, Next.js e APIs REST.", impact: "Melhoria na organização de aplicações front-end, otimização de carregamento de páginas e melhor estruturação de projetos web." },
        { title: "React do Zero a Maestria (c/Hooks, Router, API, Projetos)", description: "Curso aprofundado em React com foco em Hooks, React Router, consumo de APIs e desenvolvimento de projetos práticos. Ênfase em arquitetura de componentes, gerenciamento de estado e boas práticas.", issuer: "Udemy", skills: ["React", "Node.js", "HTML", "CSS"], practicalApplication: "Utilização dos conceitos para criação de interfaces modulares e reutilizáveis em aplicações React.", impact: "Aumento da reutilização de componentes e melhoria na manutenção de aplicações front-end." },
        { title: "Computação: Fundamentos", description: "Curso introdutório abordando fundamentos da computação, lógica de programação, conceitos estruturais de sistemas computacionais e bases teóricas essenciais para desenvolvimento de software.", issuer: "IFSUL - Instituto Federal Sul-rio-grandense", skills: ["Lógica de Programação", "Arquitetura de Computadores", "Algoritmos"], practicalApplication: "Base teórica aplicada no desenvolvimento de algoritmos e resolução estruturada de problemas em projetos de software.", impact: "Fortalecimento da base lógica para desenvolvimento de aplicações e melhor entendimento da estrutura de sistemas." },
        { title: "A Liderança na Gestão de Equipes", description: "Formação voltada ao desenvolvimento de competências em liderança, gestão de pessoas e organização de equipes, com foco em produtividade, comunicação estratégica e alinhamento de objetivos.", issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi", skills: ["Gestão de Equipes", "Comunicação", "Tomada de Decisão"], practicalApplication: "Aplicação dos conceitos na organização de fluxos de trabalho e colaboração em projetos de desenvolvimento.", impact: "Melhoria na comunicação e organização de tarefas em ambientes colaborativos." },
        { title: "JavaScript", description: "Certificação em fundamentos e prática de JavaScript moderno, incluindo manipulação de DOM, estruturas de dados, funções avançadas e construção de aplicações web interativas.", issuer: "freeCodeCamp", skills: ["JavaScript", "ES6+", "Manipulação de DOM", "Estruturas de Dados", "Lógica de Programação"], practicalApplication: "Uso contínuo do JavaScript no desenvolvimento de aplicações com React, Next.js e Node.js.", impact: "Melhoria na organização da lógica de negócio e maior eficiência na manipulação de dados em aplicações web." },
        { title: "Scrum", description: "Formação em metodologia Scrum com foco em organização de times ágeis, definição de papéis, planejamento de sprints e aplicação prática de frameworks ágeis em projetos de software.", issuer: "Centro Universitário Leonardo da Vinci - Uniasselvi", skills: ["Scrum", "Gestão Ágil", "Sprints", "Product Backlog"], practicalApplication: "Aplicação de práticas ágeis no planejamento e organização de projetos de software.", impact: "Melhoria na gestão de tarefas e organização do fluxo de desenvolvimento." },
        { title: "React Native: Criação de Aplicativos Móveis Modernos", description: "Curso de React Native ofertado pelo IFSUL (40 horas), realizado de 3 de março a 4 de maio de 2025. Abordagem prática na criação de aplicativos móveis modernos para iOS e Android, com foco em componentes, navegação, estado e integração com APIs.", issuer: "IFSUL - Instituto Federal Sul-rio-grandense", skills: ["React Native", "JavaScript", "Mobile", "iOS", "Android", "Expo"], practicalApplication: "Exploração do desenvolvimento mobile multiplataforma utilizando React Native e integração com APIs.", impact: "Ampliação da capacidade de desenvolvimento para plataformas móveis iOS e Android." },
        { title: "English for Developers – A2 (CEFR)", description: "Certificação de inglês para desenvolvedores com foco em gramática, compreensão auditiva e leitura, alinhada ao nível A2 do CEFR.", issuer: "freeCodeCamp", skills: ["Inglês", "Leitura", "Compreensão auditiva", "Gramática", "Comunicação técnica"], practicalApplication: "Utilização do inglês para leitura de documentação técnica, cursos internacionais e acompanhamento de conteúdos da comunidade global de desenvolvimento.", impact: "Maior autonomia para estudar tecnologias, compreender documentação oficial e interagir com materiais técnicos em inglês." },
        { title: "Banco de Dados: Sistemas e Modelagem Relacional", description: "Formação em bancos de dados com foco em modelagem relacional, normalização e estruturação eficiente de dados, garantindo integridade, consistência e suporte a aplicações escaláveis.", issuer: "IFSUL - Instituto Federal Sul-rio-grandense", skills: ["SQL", "Modelagem de Dados", "Bancos Relacionais", "Design de Banco de Dados", "Normalização"], practicalApplication: "Aplicação na modelagem de bancos relacionais para APIs e sistemas web, garantindo consistência de dados e eficiência em consultas.", impact: "Evolução na capacidade de estruturar bancos de dados de forma escalável e otimizada, reduzindo problemas de integridade e melhorando a performance das aplicações." },
        { title: "Node.js Desenvolvimento de APIs e Arquitetura de Backend", description: "Certificação em desenvolvimento de APIs modernas com Node.js, abrangendo arquitetura RESTful, construção de serviços com Express.js, integração com bancos de dados e implementação de autenticação e autorização.", issuer: "Instituto Federal do Rio Grande do Sul (IFRS)", skills: ["Node.js", "Express.js", "REST APIs", "Backend Development", "Authentication", "Authorization", "Database Integration"], practicalApplication: "Aplicação na construção de APIs escaláveis, com definição de rotas, integração com banco de dados e implementação de controle de acesso seguro.", impact: "Fortalecimento na construção de backends robustos e bem estruturados, com foco em segurança, organização e boas práticas de desenvolvimento de APIs." },
        { title: "Inteligência Artificial I: Redes Neurais Artificiais", description: "Formação em Inteligência Artificial com foco em redes neurais artificiais, abordando desde os conceitos iniciais até arquiteturas como Perceptron, Adaline e Multilayer Perceptron (MLP).", issuer: "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM)", skills: ["Inteligência Artificial", "Redes Neurais", "Machine Learning", "Perceptron", "MLP"], practicalApplication: "Compreensão e aplicação de conceitos de redes neurais em problemas computacionais, servindo como base para evolução em machine learning e sistemas inteligentes.", impact: "Expansão da base técnica em inteligência artificial, permitindo entendimento de algoritmos de aprendizado e suas aplicações em soluções modernas." },
        { title: "Inteligência Artificial II: Arquiteturas Avançadas de Redes Neurais", description: "Formação avançada em Inteligência Artificial com foco em arquiteturas modernas de redes neurais, incluindo redes convolucionais, modelos recorrentes como LSTM e técnicas para tratamento de dados desbalanceados e redução de dimensionalidade.", issuer: "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM)", skills: ["Redes Neurais", "Deep Learning", "CNN", "LSTM", "Machine Learning", "Redução de Dimensionalidade"], practicalApplication: "Aplicação de arquiteturas avançadas de redes neurais na construção de soluções inteligentes, incluindo processamento de dados complexos e sequenciais.", impact: "Evolução para o entendimento de modelos mais avançados de aprendizado de máquina, ampliando a capacidade de atuar em problemas reais com dados complexos." },
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
      viewAll: "Ver mais princípios",
      pageBack: "Voltar ao portfólio",
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
      heading: "Minha",
      highlight: "abordagem",
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
      resumeTitle: "Currículo",
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
      practicalApplicationLabel: "Aplicação prática",
      impactLabel: "Impacto",
      stagingNoticeTitle: "Homologação e demonstração",
      stagingNoticeBody:
        "Imagens, vídeos e telas de homologação ou teste, não de produção. Nomes, números e fluxos são exemplos fictícios ou anonimizados para o portfólio; não representam clientes reais nem dados identificáveis.",
      stagingNoticeTerm: "homologação",
      stagingNoticeTermTooltip:
        "Ambiente de validação parecido com o de produção, usado para testar alterações antes da liberação final.",
      stagingNoticeCompact:
        "Mídias de homologação ou teste, não de produção. Sem dados reais.",
    },
    projectsPage: {
      heading: "Projetos",
      pageBack: "Voltar ao portfólio",
      searchPlaceholder: "Buscar projetos...",
      filterAll: "Todos",
      noResults: "Nenhum projeto encontrado.",
    },
  },
} as const;

export default translations;

export function getByPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}
