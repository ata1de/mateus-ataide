export type Lang = "en" | "pt";

/** A headline number pulled out of an experience entry, rendered as a stat grid. */
export type Stat = {
  value: string;
  label: string;
};

export type Experience = {
  /** Used to look up /logos/<slug>.png, and as the monogram source when absent. */
  slug: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stats?: Stat[];
};

export type Project = {
  name: string;
  period: string;
  desc: string;
  link?: { href: string; label: string };
};

export type Education = {
  slug: string;
  title: string;
  role: string;
  period: string;
  bullets: string[];
};

export const contact = {
  email: "mateusataide.contact@gmail.com",
  github: "https://github.com/ata1de",
  linkedin: "https://linkedin.com/in/mateus-ataide",
} as const;

export const content = {
  en: {
    name: "Mateus Ataide",
    location: "Brazil",
    tagline: "I'm Mateus; software engineer at Stone — payments, and applied ai on the side.",
    status: "open to chat",
    sections: {
      about: "About",
      experience: "Journey",
      projects: "Projects",
      education: "Education",
      skills: "Techstack",
      certifications: "Certifications",
      contact: "Contact",
    },
    about: {
      headline: "I build the systems that decide whether money actually moves",
      body: [
        "software engineer with 3+ years building high-criticality financial systems — payment platforms processing r$60m+/month in transactions for thousands of doctors and clinics across brazil. currently at stone.",
        "most of my work lives in the unglamorous parts: a postgresql query taken from 13s to 150ms, boleto generation from 2 minutes to 100ms, an otp layer guarding r$35m+/month of sensitive operations, a bacen-mandated pix dispute flow shipped in a week.",
        "alongside that i build with applied ai — llms, rag and agents in production — an agentic slack tool that turned a 30–60min developer task into under 2 minutes of ops self-service, a rag support bot that cut handling time by 40%.",
        "studying computer technology at ufpe's centro de informática, one of brazil's top cs schools.",
        "really interested in meeting new people and learning about their experiences. reach out if you want to chat!",
      ],
    },
    contactPrompt: "Got something interesting to say?",
    experience: [
      {
        slug: "stone",
        company: "Stone",
        role: "Software Engineer",
        period: "sep 2026 – present",
        bullets: [
          "recently joined stone's engineering team, working on payment systems at one of brazil's largest fintechs.",
        ],
      },
      {
        slug: "robbin",
        company: "Robbin",
        role: "Software Engineer",
        period: "jul 2026 – sep 2026",
        bullets: [
          "helped build an agentic slack tool for payment reprocessing. the task carried a 2h sla and took 30 to 60 minutes to actually run, since it waited on whichever developer was free; it now sits with the operations team and finishes in under 2 minutes, with no engineer in the loop.",
          "audited and cut aws spend by over 50% (~r$30k/year) by moving log retention to s3 and right-sizing ecs services.",
          "moved database migrations into a ci/cd action, removing over 70% of the manual work previously done by hand through aws.",
        ],
        stats: [
          { value: "< 2 min", label: "Payment reprocessing, was 30–60min" },
          { value: "−50%", label: "AWS spend (~R$30k/year)" },
          { value: "−70%", label: "Manual migration work" },
        ],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Team Leader",
        period: "sep 2025 – may 2026",
        bullets: [
          "led a fintech squad building payment solutions, driving technical decisions, solution planning and product alignment — and mentoring engineers through code reviews, 1:1s and continuous feedback.",
          "designed and launched a partner api for e-commerce integrations enabling flexible multi-payment checkout — pix qr code and installment card payments with dynamic interest calculation — with redis-backed rate limiting and ip controls in nestjs. projected +30% revenue.",
          "cut payment-slip (boleto) generation from over 2 minutes to 100ms by moving installment creation to an asynchronous model.",
          "architected the med (pix dispute) system from scratch, delivered in 1 week with unit tests, webhooks and a complete refund flow, meeting a critical bacen requirement — impacts 75% of monthly transactions.",
          "contributed to features sustaining an average 17% monthly growth in transaction volume across the payment platform.",
          "led the migration of a critical pipeline from node.js to go, cutting processing down to ~4s for 20,000 records per run.",
          "operated cloud infrastructure on aws (ecs, s3, sqs, sns, lambda, cloudwatch) with authentication, authorization and access control across payment apis.",
          "used claude code daily as an agentic pipeline for planning, implementation, review and debugging.",
        ],
        stats: [
          { value: "+30%", label: "Projected revenue" },
          { value: "100ms", label: "Boleto generation, from 2min" },
          { value: "1 week", label: "MED system shipped" },
          { value: "+17%", label: "Monthly volume growth" },
        ],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Software Engineer",
        period: "sep 2024 – may 2026",
        bullets: [
          "drove the evolution of amigo pay, the financial platform inside the amigo ecosystem, building and integrating high-impact features in nestjs/typescript and go on a platform processing 100m+ tpv.",
          "reduced accounts-receivable query latency from 13s to 150ms (~85x) by optimizing postgresql queries, execution plans and indexes over high-volume financial datasets.",
          "designed and built from scratch a secure otp validation api supporting r$35m+/month in transaction volume — the first security layer for every sensitive payment operation, with session-based validation and attempt blocking against fraud.",
          "implemented reliable payment webhook flows, improving asynchronous transaction updates and reconciliation accuracy across the platform.",
          "enhanced pos systems with transaction history and automated email reporting in react native and node.js, improving merchant visibility.",
          "built an ai customer support bot in python using rag + the openai api — cut support handling time by 40% in production.",
          "implemented observability with grafana and datadog — metrics, logs and alerts — ensuring 99% slo and supporting production experiment analysis.",
        ],
        stats: [
          { value: "R$60M+", label: "Processed monthly" },
          { value: "~85x", label: "Query speedup" },
          { value: "R$35M+", label: "Secured by the OTP layer" },
        ],
      },
      {
        slug: "brightlift",
        company: "Brightlift",
        role: "Founding Engineer",
        period: "2023 – 2026",
        bullets: [
          "built and maintained ai agents integrated with llm apis (openai, gemini), implementing rag, mcp, function calling and streaming with focus on maximizing value per token in automation workflows.",
          "built llm evaluation and benchmarking infrastructure for model comparison without altering the application layer — enabling data-driven decisions.",
          "developed backend with fastapi (python), scraping + nlp pipeline for large-scale data analysis in mongodb, containerized with docker + ci/cd on aws.",
        ],
      },
    ] as Experience[],
    projects: [
      {
        name: "Gatewatch",
        period: "2025 – 2026",
        desc: "real-time market data platform in continuous development for 3+ years. focus on high-performance data ingestion, processing and visualization.",
      },
      {
        name: "Brightlift",
        period: "2023 – 2026",
        desc: "ai-powered digital campaign automation platform. built with fastapi + llms and react + vite. features: ai agent orchestration for creative generation, social media scraping pipeline with nlp sentiment analysis for market signal classification by ticker, mongodb for raw data storage. integrated with google ads and meta.",
      },
      {
        name: "Rekon",
        period: "2024",
        desc: "real-time tracking and analytics platform to monitor assets and events, with operational visibility and live insights.",
      },
    ] as Project[],
    education: [
      {
        slug: "ufpe",
        title: "UFPE — Centro de Informática (CIn)",
        role: "Computer Technology / Computer Systems",
        period: "jan 2023 – jan 2027",
        bullets: [
          "one of the top cs teaching and research centers in brazil and latin america.",
          "key subjects: algorithms, data structures, operating systems, oop, software engineering, systems architecture, ai, databases.",
          "teaching assistant since 2023 for algorithms & data structures and programming logic — helping students with problem solving, complexity analysis and computational thinking.",
        ],
      },
    ] as Education[],
    skills: [
      { label: "Languages", items: ["golang", "node.js", "typescript", "python", "sql"] },
      { label: "Frontend & mobile", items: ["react", "angular", "react native"] },
      {
        label: "Architecture",
        items: [
          "rest apis",
          "distributed systems",
          "microservices",
          "async processing",
          "api gateway",
        ],
      },
      {
        label: "AI & LLMs",
        items: [
          "rag",
          "ai agents",
          "llm orchestration",
          "openai",
          "gemini",
          "claude",
          "mcp",
          "function calling",
          "streaming",
          "nlp",
          "claude code",
        ],
      },
      {
        label: "Cloud",
        items: ["aws", "ecs", "s3", "sqs", "sns", "lambda", "cloudwatch", "gcp", "docker", "linux"],
      },
      { label: "Databases", items: ["postgresql", "mysql", "mongodb", "redis"] },
      { label: "Quality", items: ["automated tests", "jest", "ci/cd", "code review", "git"] },
      {
        label: "Observability",
        items: ["grafana", "datadog", "cloudwatch", "structured logging", "slos"],
      },
      {
        label: "Spoken",
        items: ["🇧🇷 portuguese (native)", "🇺🇸 english (professional)", "🇪🇸 spanish (professional)"],
      },
    ],
    certifications: [
      "Getting into the Serverless Mindset",
      "AWS Lambda Foundations",
      "Introduction to AWS Lambda",
      "SQL/Sequelize",
      "Nest: The Complete Developer's Guide",
      "SQL and PostgreSQL: The Complete Developer's Guide",
    ],
  },

  pt: {
    name: "Mateus Ataide",
    location: "Brasil",
    tagline:
      "Sou o Mateus; engenheiro de software na Stone — pagamentos, e ia aplicada em paralelo.",
    status: "aberto a conversar",
    sections: {
      about: "Sobre",
      experience: "Jornada",
      projects: "Projetos",
      education: "Educação",
      skills: "Techstack",
      certifications: "Certificações",
      contact: "Contato",
    },
    about: {
      headline: "Construo os sistemas que decidem se o dinheiro realmente sai do lugar",
      body: [
        "engenheiro de software com 3+ anos construindo sistemas financeiros de alta criticidade — plataformas de pagamento que processam r$60m+/mês em transações para milhares de médicos e clínicas no brasil. atualmente na stone.",
        "meu trabalho mora nas partes pouco glamourosas: uma query no postgresql que saiu de 13s para 150ms, geração de boleto de 2 minutos para 100ms, uma camada de otp protegendo r$35m+/mês em operações sensíveis, um fluxo de contestação de pix exigido pelo bacen entregue em uma semana.",
        "em paralelo construo com ia aplicada — llms, rag e agentes em produção — uma tool agêntica no slack que transformou uma tarefa de 30–60min de dev em menos de 2 minutos na mão do operacional, um bot de atendimento com rag que cortou 40% do tempo de resposta.",
        "estudando tecnologia da computação no centro de informática da ufpe, uma das melhores escolas de cs do brasil.",
        "tenho muito interesse em conhecer pessoas novas e aprender sobre suas experiências. me chama se quiser conversar!",
      ],
    },
    contactPrompt: "Tem algo interessante pra dizer?",
    experience: [
      {
        slug: "stone",
        company: "Stone",
        role: "Engenheiro de Software",
        period: "set 2026 – atual",
        bullets: [
          "entrei recentemente no time de engenharia da stone, trabalhando em sistemas de pagamento em uma das maiores fintechs do brasil.",
        ],
      },
      {
        slug: "robbin",
        company: "Robbin",
        role: "Engenheiro de Software",
        period: "jul 2026 – set 2026",
        bullets: [
          "ajudei a construir uma tool agêntica no slack para reprocessamento de pagamento. a tarefa tinha sla de 2h e levava de 30 minutos a 1 hora para ser executada, porque dependia de algum desenvolvedor estar livre; hoje fica na mão do operacional e termina em menos de 2 minutos, sem engenheiro no meio.",
          "analisei e reduzi os custos de aws em mais de 50% (~r$30 mil/ano) movendo a retenção de logs para o s3 e reduzindo custos em serviços no ecs.",
          "movi as migrations para uma action no ci/cd, eliminando mais de 70% do trabalho manual que antes era feito na mão pela aws.",
        ],
        stats: [
          { value: "< 2 min", label: "Reprocessamento, era 30–60min" },
          { value: "−50%", label: "Custo de AWS (~R$30 mil/ano)" },
          { value: "−70%", label: "Trabalho manual de migration" },
        ],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Team Leader",
        period: "set 2025 – mai 2026",
        bullets: [
          "liderei uma squad fintech de soluções de pagamento, conduzindo decisões técnicas, planejamento de soluções e alinhamento de produto — e mentorando engenheiros via code review, 1:1s e feedback contínuo.",
          "projetei e lancei uma api de parceiros para integrações com e-commerce, viabilizando checkout multi-pagamento flexível — pix qr code e cartão parcelado com cálculo dinâmico de juros — com rate limiting via redis e controle de ip em nestjs. impacto projetado de +30% em receita.",
          "reduzi a geração de boleto de mais de 2 minutos para 100ms ao migrar a criação de parcelas para um modelo assíncrono.",
          "arquitetei do zero o sistema de med (contestação de pix), entregue em 1 semana com testes unitários, webhooks e fluxo completo de estorno, atendendo exigência crítica do bacen — impacta 75% das transações mensais.",
          "contribuí com features que sustentaram um crescimento médio de 17% ao mês no volume transacionado da plataforma.",
          "liderei migração de pipeline crítico de node.js para go, reduzindo processamento para ~4s com 20.000 registros por execução.",
          "operei infraestrutura em nuvem na aws (ecs, s3, sqs, sns, lambda, cloudwatch) com autenticação, autorização e controle de acesso nas apis de pagamento.",
          "utilizei claude code diariamente como esteira agêntica para planejamento, implementação, revisão e debugging.",
        ],
        stats: [
          { value: "+30%", label: "Receita projetada" },
          { value: "100ms", label: "Geração de boleto, de 2min" },
          { value: "1 semana", label: "Sistema MED entregue" },
          { value: "+17%", label: "Crescimento mensal do volume" },
        ],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Engenheiro de Software",
        period: "set 2024 – mai 2026",
        bullets: [
          "conduzi a evolução do amigo pay, a plataforma financeira do ecossistema amigo, construindo e integrando features de alto impacto em nestjs/typescript e go numa plataforma que processa 100m+ de tpv.",
          "reduzi a latência de consultas de contas a receber de 13s para 150ms (~85x) otimizando queries, planos de execução e índices no postgresql sobre bases financeiras de alto volume.",
          "projetei e construí do zero uma api de validação por otp sustentando r$35m+/mês em volume transacionado — primeira camada de segurança de toda operação de pagamento sensível, com validação por sessão e bloqueio de tentativas contra fraude.",
          "implementei fluxos confiáveis de webhook de pagamento, melhorando as atualizações assíncronas de transação e a precisão da conciliação na plataforma.",
          "evoluí sistemas de pos com histórico de transações e relatórios automáticos por e-mail em react native e node.js, ampliando a visibilidade do lojista.",
          "desenvolvi bot de atendimento com ia em python usando rag + api openai — reduziu tempo de atendimento em 40% em produção.",
          "implementei observabilidade com grafana e datadog — métricas, logs e alertas — garantindo 99% de slo e suporte à análise de experimentos em produção.",
        ],
        stats: [
          { value: "R$60M+", label: "Processados por mês" },
          { value: "~85x", label: "Ganho em queries" },
          { value: "R$35M+", label: "Protegidos pela camada de OTP" },
        ],
      },
      {
        slug: "brightlift",
        company: "Brightlift",
        role: "Founding Engineer",
        period: "2023 – 2026",
        bullets: [
          "desenvolvi e mantive agentes de ia integrados a apis de llms (openai, gemini), implementando rag, mcp, function calling e streaming com foco em maximizar valor por token em fluxos de automação.",
          "construí infraestrutura de avaliação e benchmarking de llms para comparação de modelos sem alterar a camada de aplicação — metodologia para decisões baseadas em dados.",
          "desenvolvi backend com fastapi (python), pipeline de scraping + nlp para análise de grandes volumes de dados em mongodb, containerizado com docker + ci/cd na aws.",
        ],
      },
    ] as Experience[],
    projects: [
      {
        name: "Gatewatch",
        period: "2025 – 2026",
        desc: "plataforma de dados de mercado em tempo real em desenvolvimento contínuo há 3+ anos. foco em ingestão, processamento e visualização de dados de alta performance.",
      },
      {
        name: "Brightlift",
        period: "2023 – 2026",
        desc: "plataforma de automação de campanhas digitais com ia. construída com fastapi + llms e react + vite. features: orquestração de agentes de ia para geração de criativos, pipeline de scraping de redes sociais com análise de sentimento via nlp para classificação de sinais de mercado por ticker, mongodb para armazenamento bruto. integrado com google ads e meta.",
      },
      {
        name: "Rekon",
        period: "2024",
        desc: "plataforma de rastreamento e analytics em tempo real para monitorar ativos e eventos, com visibilidade operacional e insights ao vivo.",
      },
    ] as Project[],
    education: [
      {
        slug: "ufpe",
        title: "UFPE — Centro de Informática (CIn)",
        role: "Tecnologia da Computação / Sistemas de Computação",
        period: "jan 2023 – jan 2027",
        bullets: [
          "um dos principais centros de ensino e pesquisa em cs do brasil e da américa latina.",
          "matérias-chave: algoritmos, estruturas de dados, sistemas operacionais, poo, engenharia de software, arquitetura de sistemas, ia, bancos de dados.",
          "monitor desde 2023 de algoritmos & estruturas de dados e lógica de programação — ajudando estudantes com resolução de problemas, análise de complexidade e pensamento computacional.",
        ],
      },
    ] as Education[],
    skills: [
      { label: "Linguagens", items: ["golang", "node.js", "typescript", "python", "sql"] },
      { label: "Frontend & mobile", items: ["react", "angular", "react native"] },
      {
        label: "Arquitetura",
        items: [
          "rest apis",
          "sistemas distribuídos",
          "microsserviços",
          "processamento assíncrono",
          "api gateway",
        ],
      },
      {
        label: "IA & LLMs",
        items: [
          "rag",
          "agentes de ia",
          "orquestração de llm",
          "openai",
          "gemini",
          "claude",
          "mcp",
          "function calling",
          "streaming",
          "nlp",
          "claude code",
        ],
      },
      {
        label: "Cloud",
        items: ["aws", "ecs", "s3", "sqs", "sns", "lambda", "cloudwatch", "gcp", "docker", "linux"],
      },
      { label: "Bancos de dados", items: ["postgresql", "mysql", "mongodb", "redis"] },
      {
        label: "Qualidade",
        items: ["testes automatizados", "jest", "ci/cd", "code review", "git"],
      },
      {
        label: "Observabilidade",
        items: ["grafana", "datadog", "cloudwatch", "logs estruturados", "slos"],
      },
      {
        label: "Idiomas",
        items: ["🇧🇷 português (nativo)", "🇺🇸 inglês (profissional)", "🇪🇸 espanhol (profissional)"],
      },
    ],
    certifications: [
      "Getting into the Serverless Mindset",
      "AWS Lambda Foundations",
      "Introduction to AWS Lambda",
      "SQL/Sequelize",
      "Nest: The Complete Developer's Guide",
      "SQL and PostgreSQL: The Complete Developer's Guide",
    ],
  },
} as const;
