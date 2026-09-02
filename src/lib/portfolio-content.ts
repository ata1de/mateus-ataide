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
    location: "Recife, Pernambuco, Brazil",
    tagline: "I'm Mateus; software engineer, ai product builder & perpetual tinkerer.",
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
      headline: "I turn manual work into systems that run themselves",
      body: [
        "software engineer and ai product builder with 3+ years of experience delivering high-impact systems. currently building ai-native agentic pipelines at extreme group (volund), turning months-long projects into weeks. previously led a fintech squad at amigo tech, sustaining systems that process r$60m+/month. focused on golang, node.js/typescript, python, and applied ai (llms, rag and ai agents in production).",
        "studying information systems at ufpe, one of brazil's top cs schools.",
        "really interested in meeting new people and learning about their experiences. reach out if you want to chat!",
      ],
    },
    contactPrompt: "Got something interesting to say?",
    experience: [
      {
        slug: "extreme-group",
        company: "Extreme Group (Volund)",
        role: "AI Product Builder",
        period: "jun 2026 – present",
        bullets: [
          "transform manual projects into ai-native workflows through specialized agents, eliminating human bottlenecks in repetitive development and operational steps.",
          "contributed to building volund os, an agent creation platform for cross-functional use (commercial, product, c-levels), integrating claude code and cursor sdk to unify models and integrations across the organization.",
          "integrated a legacy prodesp project from prototype to gcp deploy, reducing human interaction in the development cycle by 60% via ai agent automation.",
        ],
        stats: [{ value: "−60%", label: "Human interaction" }],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Software Engineer & Team Lead",
        period: "nov 2025 – may 2026",
        bullets: [
          "led a fintech squad, driving technical decisions, solution planning and product alignment, always focused on ownership and delivering real business impact.",
          "architected an e-commerce integration api (nestjs/typescript + redis) with projected +30% revenue impact.",
          "architected the med (pix dispute) system from scratch in nodejs and angular, delivered in 1 week with automated tests, webhooks and full flow, meeting a critical bacen requirement — impacts 75% of monthly transactions.",
          "led the migration of a critical pipeline from node.js to go, cutting processing down to ~4s for 20,000 records per run.",
          "operated cloud infrastructure on aws (ecs, s3, sqs, sns, lambda, cloudwatch) with authentication, authorization and access control across payment apis.",
          "used claude code daily as an agentic pipeline for planning, implementation, review and debugging.",
        ],
        stats: [
          { value: "+30%", label: "Projected revenue" },
          { value: "1 week", label: "MED system shipped" },
          { value: "4s", label: "20k records pipeline" },
        ],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Software Engineer",
        period: "sep 2024 – nov 2025",
        bullets: [
          "built and maintained backend apis and systems in nestjs/typescript and go for a platform processing r$60m+/month, with authentication, authorization and api security best practices.",
          "built an ai customer support bot in python using rag + the openai api — cut support handling time by 40% in production.",
          "reduced critical postgresql query latency from 13s to 150ms (~85x) via data analysis and profiling-based optimization.",
          "implemented observability with grafana and datadog — metrics, logs and alerts — ensuring 99% slo and supporting production experiment analysis.",
        ],
        stats: [
          { value: "R$60M+", label: "Processed monthly" },
          { value: "~85x", label: "Query speedup" },
          { value: "−40%", label: "Support handling time" },
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
      {
        name: "Reembolso AI",
        period: "2024",
        desc: "ai-driven expense management system: receipt parsing, approval flows and real-time financial insights for tighter control and faster reimbursements.",
      },
      {
        name: "Contract Automation API",
        period: "2024",
        desc: "go backend for contract generation automation. applied idiomatic concurrency patterns with goroutines and channels. containerized with docker for environment parity.",
      },
    ] as Project[],
    education: [
      {
        slug: "ufpe",
        title: "UFPE — Centro de Informática (CIn)",
        role: "Bachelor's in Information Systems",
        period: "2023 – present, Recife, Brazil",
        bullets: [
          "one of the top cs teaching and research centers in brazil and latin america.",
          "key subjects: algorithms, data structures, operating systems, oop, software engineering, systems architecture, ai, databases.",
        ],
      },
      {
        slug: "ufpe",
        title: "UFPE",
        role: "Teaching Assistant",
        period: "2023 – present",
        bullets: [
          "algorithms & data structures and programming logic.",
          "helped students with problem solving, complexity analysis and computational thinking.",
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
        items: ["aws", "ecs", "s3", "sqs", "sns", "lambda", "cloudwatch", "gcp", "linux"],
      },
      { label: "Databases", items: ["postgresql", "mysql", "mongodb", "redis"] },
      { label: "Quality", items: ["automated tests", "jest", "ci/cd", "code review", "git"] },
      {
        label: "Observability",
        items: ["grafana", "datadog", "cloudwatch", "structured logging", "slos"],
      },
    ],
    certifications: [
      "Getting into the Serverless Mindset",
      "AWS Lambda Foundations",
      "Introduction to AWS Lambda",
      "SQL Intermediate",
      "Nest: The Complete Developer's Guide",
      "SQL and PostgreSQL: The Complete Developer's Guide",
    ],
  },

  pt: {
    name: "Mateus Ataide",
    location: "Recife, Pernambuco, Brasil",
    tagline: "Sou o Mateus; engenheiro de software, ai product builder & curioso incurável.",
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
      headline: "Transformo trabalho manual em sistemas que se resolvem sozinhos",
      body: [
        "engenheiro de software e ai product builder com 3+ anos de experiência entregando sistemas de alto impacto. atualmente construindo pipelines agênticos ai-native na extreme group (volund), transformando projetos de meses em semanas. anteriormente liderei uma squad fintech na amigo tech, sustentando sistemas que processam r$60m+/mês. focado em golang, node.js/typescript, python e ia aplicada (llms, rag e agentes de ia em produção).",
        "estudando sistemas de informação na ufpe, uma das melhores escolas de cs do brasil.",
        "tenho muito interesse em conhecer pessoas novas e aprender sobre suas experiências. me chama se quiser conversar!",
      ],
    },
    contactPrompt: "Tem algo interessante pra dizer?",
    experience: [
      {
        slug: "extreme-group",
        company: "Extreme Group (Volund)",
        role: "AI Product Builder",
        period: "jun 2026 – atual",
        bullets: [
          "transformo projetos manuais em fluxos ai-native através da criação de agentes especializados, eliminando gargalos humanos em etapas repetitivas de desenvolvimento e operação.",
          "participei da construção do volund os, plataforma de criação de agentes para uso transversal (comercial, produto e c-levels), integrando claude code e o sdk do cursor para unificar modelos e integrações em toda a organização.",
          "integrei projeto legado do prodesp da prototipação ao deploy em gcp, reduzindo em 60% a interação humana no ciclo de desenvolvimento via automação com agentes de ia.",
        ],
        stats: [{ value: "−60%", label: "Interação humana" }],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Engenheiro de Software & Team Lead",
        period: "nov 2025 – mai 2026",
        bullets: [
          "liderei uma squad fintech, conduzindo decisões técnicas, planejamento de soluções e alinhamento de produto, sempre focado em ownership e entrega de impacto real no negócio.",
          "arquitetei api de integração com e-commerce (nestjs/typescript + redis) com impacto projetado de +30% em receita.",
          "arquitetei do zero o sistema de med (contestação de pix) em nodejs e angular, entregue em 1 semana com testes automatizados, webhooks e fluxo completo, atendendo exigência crítica do bacen — impacta 75% das transações mensais.",
          "liderei migração de pipeline crítico de node.js para go, reduzindo processamento para ~4s com 20.000 registros por execução.",
          "operei infraestrutura em nuvem na aws (ecs, s3, sqs, sns, lambda, cloudwatch) com autenticação, autorização e controle de acesso nas apis de pagamento.",
          "utilizei claude code diariamente como esteira agêntica para planejamento, implementação, revisão e debugging.",
        ],
        stats: [
          { value: "+30%", label: "Receita projetada" },
          { value: "1 semana", label: "Sistema MED entregue" },
          { value: "4s", label: "Pipeline de 20 mil registros" },
        ],
      },
      {
        slug: "amigo-tech",
        company: "Amigo Tech",
        role: "Engenheiro de Software",
        period: "set 2024 – nov 2025",
        bullets: [
          "desenvolvi e mantive apis e sistemas distribuídos de backend em nestjs/typescript e go para plataforma processando r$60m+/mês, com autenticação, autorização e boas práticas de segurança.",
          "desenvolvi bot de atendimento com ia em python usando rag + api openai — reduziu tempo de atendimento em 40% em produção.",
          "reduzi latência de consultas críticas no postgresql de 13s para 150ms (~85x) via otimização baseada em análise de dados e profiling.",
          "implementei observabilidade com grafana e datadog — métricas, logs e alertas — garantindo 99% de slo e suporte à análise de experimentos em produção.",
        ],
        stats: [
          { value: "R$60M+", label: "Processados por mês" },
          { value: "~85x", label: "Ganho em queries" },
          { value: "−40%", label: "Tempo de atendimento" },
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
      {
        name: "Reembolso AI",
        period: "2024",
        desc: "sistema de gestão de despesas com ia: parsing de recibos, fluxos de aprovação e insights financeiros em tempo real para melhor controle e reembolsos mais rápidos.",
      },
      {
        name: "Contract Automation API",
        period: "2024",
        desc: "backend em go para automação de geração de contratos. apliquei padrões idiomáticos de concorrência com goroutines e channels. containerizado com docker para paridade entre ambientes.",
      },
    ] as Project[],
    education: [
      {
        slug: "ufpe",
        title: "UFPE — Centro de Informática (CIn)",
        role: "Bacharelado em Sistemas de Informação",
        period: "2023 – atual, Recife, Brasil",
        bullets: [
          "um dos principais centros de ensino e pesquisa em cs do brasil e da américa latina.",
          "matérias-chave: algoritmos, estruturas de dados, sistemas operacionais, poo, engenharia de software, arquitetura de sistemas, ia, bancos de dados.",
        ],
      },
      {
        slug: "ufpe",
        title: "UFPE",
        role: "Monitor (Teaching Assistant)",
        period: "2023 – atual",
        bullets: [
          "algoritmos & estruturas de dados e lógica de programação.",
          "ajudei estudantes com resolução de problemas, análise de complexidade e pensamento computacional.",
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
        items: ["aws", "ecs", "s3", "sqs", "sns", "lambda", "cloudwatch", "gcp", "linux"],
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
    ],
    certifications: [
      "Getting into the Serverless Mindset",
      "AWS Lambda Foundations",
      "Introduction to AWS Lambda",
      "SQL Intermediate",
      "Nest: The Complete Developer's Guide",
      "SQL and PostgreSQL: The Complete Developer's Guide",
    ],
  },
} as const;
