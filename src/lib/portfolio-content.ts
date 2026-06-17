export type Lang = "en" | "pt";

export type ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

export type Project = {
  name: string;
  period: string;
  desc: string;
  media?: ProjectMedia;
};

export const content = {
  en: {
    nav: { about: "about", projects: "projects", certifications: "certifications" },
    name: "Mateus Ataide",
    location: "🇧🇷 recife, pernambuco, brasil",
    role: "ai product builder @ extreme group (volund) | information systems @ ufpe (cin)",
    bio: [
      "software engineer and ai product builder with 3+ years of experience delivering high-impact systems. currently building ai-native agentic pipelines at extreme group (volund), turning months-long projects into weeks. previously led a fintech squad at amigo tech, sustaining systems that process r$60m+/month. focused on golang, node.js/typescript, python, and applied ai (llms, rag and ai agents in production).",
      "studying information systems at ufpe, one of brazil's top cs schools.",
      "really interested in meeting new people and learning about their experiences. reach out if you want to chat!",
    ],
    reach: "reach out:",
    sections: {
      metrics: "key metrics",
      experience: "experience",
      projects: "projects",
      education: "education",
      skills: "skills",
      certifications: "certifications",
    },
    metrics: [
      "R$60M+/month processed",
      "60% reduction in human interaction via AI agents",
      "30% projected revenue increase via ecommerce integration API design and launch",
      "~85x query performance improvement (13s → 150ms)",
      "MED (Pix dispute) system delivered in 1 week",
      "4s processing with 20,000 records (Go pipeline migration)",
    ],
    experience: [
      {
        title: "extreme group (volund) — ai product builder",
        period: "jun 2026 – present",
        bullets: [
          "transform manual projects into ai-native workflows through specialized agents, eliminating human bottlenecks in repetitive development and operational steps.",
          "contributed to building volund os, an agent creation platform for cross-functional use (commercial, product, c-levels), integrating claude code and cursor sdk to unify models and integrations across the organization.",
          "integrated a legacy prodesp project from prototype to gcp deploy, reducing human interaction in the development cycle by 60% via ai agent automation.",
        ],
      },
      {
        title: "amigo tech — software engineer & team lead",
        period: "nov 2025 – may 2026",
        bullets: [
          "Led a fintech squad, driving technical decisions, solution planning and product alignment, always focused on ownership and delivering real business impact.",
          "architected e-commerce integration api (nestjs/typescript + redis) with projected +30% revenue impact",
          "architected the med (pix dispute) system from scratch in nodejs and angular, delivered in 1 week with automated tests, webhooks and full flow, meeting a critical bacen requirement — impacts 75% of monthly transactions.",
          "led migration of critical pipeline from NodeJS to Golang, reducing processing to ~4s with 20,000 records per execution.",
          "operated cloud infrastructure on aws (ecs, s3, sqs, sns, lambda, cloudwatch) with authentication, authorization and access control across payment apis.",
          "used claude code daily as an agentic pipeline for planning, implementation, review and debugging.",
        ],
      },
      {
        title: "amigo tech — software engineer",
        period: "sep 2024 – nov 2025",
        bullets: [
          "built and maintained backend apis and systems in nestjs/typescript and go for a platform processing r$60m+/month, with authentication, authorization and api security best practices.",
          "built ai customer support bot using python + rag + openai api — reduced response time by 40% in production.",
          "reduced critical postgresql query latency from 13s to 150ms (~85x) via data analysis and profiling-based optimization.",
          "implemented observability with grafana and datadog — metrics, logs and alerts — ensuring 99% slo and supporting production experiment analysis.",
        ],
      },
      {
        title: "brightlift — founding engineer",
        period: "2023 – 2026",
        bullets: [
          "built and maintained ai agents integrated with llm apis (openai, gemini), implementing rag, mcp, function calling and streaming with focus on maximizing value per token in automation workflows.",
          "built llm evaluation and benchmarking infrastructure for model comparison without altering the application layer — enabling data-driven decisions.",
          "developed backend with fastapi (python), scraping + nlp pipeline for large-scale data analysis in mongodb, containerized with docker + ci/cd on aws.",
        ],
      },
    ],
    projects: [
      {
        name: "gatewatch",
        period: "2025 – 2026",
        desc: "real-time market data platform in continuous development for 3+ years. focus on high-performance data ingestion, processing and visualization.",
      },
      {
        name: "brightlift",
        period: "2023 – 2026",
        desc: "ai-powered digital campaign automation platform. built with fastapi + llms and react + vite. features: ai agent orchestration for creative generation, social media scraping pipeline with nlp sentiment analysis for market signal classification by ticker, mongodb for raw data storage. integrated with google ads and meta.",
      },
      {
        name: "rekon",
        period: "2024",
        desc: "real-time tracking and analytics platform to monitor assets and events, with operational visibility and live insights.",
      },
      {
        name: "contract automation api",
        period: "2024",
        desc: "go backend for contract generation automation. applied idiomatic concurrency patterns with goroutines and channels. containerized with docker for environment parity.",
      },
    ] as Project[],
    education: [
      {
        title: "ufpe — centro de informática (cin), information systems",
        period: "2023 – present, recife, brasil",
        bullets: [
          "one of the top cs teaching and research centers in brazil and latin america.",
          "key subjects: algorithms, data structures, operating systems, oop, software engineering, systems architecture, ai, databases.",
        ],
      },
      {
        title: "ufpe — teaching assistant",
        period: "2023 – present",
        bullets: [
          "algorithms & data structures and programming logic",
          "helped students with problem solving, complexity analysis and computational thinking",
        ],
      },
    ],
    skills: [
      { label: "languages", items: "golang, node.js, typescript, python, sql" },
      { label: "frontend & mobile", items: "react, angular, react native" },
      { label: "architecture", items: "rest apis, distributed systems, microservices, async processing, api gateway" },
      { label: "ai & llms", items: "rag, ai agents, llm orchestration (openai, gemini, claude), mcp, function calling, streaming, nlp, claude code" },
      { label: "cloud", items: "aws (ecs, s3, sqs, sns, lambda, cloudwatch, parameter store), gcp, linux (ubuntu/debian)" },
      { label: "databases", items: "postgresql, mysql, mongodb, redis" },
      { label: "quality", items: "automated tests, jest, ci/cd, code review, git" },
      { label: "observability", items: "grafana, datadog, cloudwatch, structured logging, slos" },
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
    nav: { about: "sobre", projects: "projetos", certifications: "certificações" },
    name: "Mateus Ataide",
    location: "🇧🇷 recife, pernambuco, brasil",
    role: "ai product builder @ extreme group (volund) | sistemas de informação @ ufpe (cin)",
    bio: [
      "engenheiro de software e ai product builder com 3+ anos de experiência entregando sistemas de alto impacto. atualmente construindo pipelines agênticos ai-native na extreme group (volund), transformando projetos de meses em semanas. anteriormente liderei uma squad fintech na amigo tech, sustentando sistemas que processam r$60m+/mês. focado em golang, node.js/typescript, python e ia aplicada (llms, rag e agentes de ia em produção).",
      "estudando sistemas de informação na ufpe, uma das melhores escolas de cs do brasil.",
      "tenho muito interesse em conhecer pessoas novas e aprender sobre suas experiências. me chama se quiser conversar!",
    ],
    reach: "contato:",
    sections: {
      metrics: "métricas",
      experience: "experiência",
      projects: "projetos",
      education: "educação",
      skills: "habilidades",
      certifications: "certificações",
    },
    metrics: [
      "R$60M+/mês processados",
      "60% de redução na interação humana via agentes de IA",
      "30% de aumento de receita projetado via design e lançamento de API de integração com ecommerce",
      "~85x melhoria de performance em queries (13s → 150ms)",
      "sistema MED (contestação de Pix) entregue em 1 semana",
      "processamento em 4s com 20.000 registros (migração Go)",
    ],
    experience: [
      {
        title: "extreme group (volund) — ai product builder",
        period: "jun 2026 – atual",
        bullets: [
          "transformo projetos manuais em fluxos ai-native através da criação de agentes especializados, eliminando gargalos humanos em etapas repetitivas de desenvolvimento e operação.",
          "participei da construção do volund os, plataforma de criação de agentes para uso transversal (comercial, produto e c-levels), integrando claude code e o sdk do cursor para unificar modelos e integrações em toda a organização.",
          "integrei projeto legado do prodesp da prototipação ao deploy em gcp, reduzindo em 60% a interação humana no ciclo de desenvolvimento via automação com agentes de ia.",
        ],
      },
      {
        title: "amigo tech — engenheiro de software & team lead",
        period: "nov 2025 – mai 2026",
        bullets: [
          "Liderei uma squad fintech, conduzindo decisões técnicas, planejamento de soluções e alinhamento de produto, sempre focado em ownership e entrega de impacto real no negócio.",
          "arquitetei api de integração com e-commerce (nestjs/typescript + redis) com impacto projetado de +30% em receita",
          "arquitetei do zero o sistema de med (contestação de pix) em nodejs e angular, entregue em 1 semana com testes automatizados, webhooks e fluxo completo, atendendo exigência crítica do bacen — impacta 75% das transações mensais.",
          "liderei migração de pipeline crítico de node.js para go, reduzindo processamento para ~4s com 20.000 registros por execução.",
          "operei infraestrutura em nuvem na aws (ecs, s3, sqs, sns, lambda, cloudwatch) com autenticação, autorização e controle de acesso nas apis de pagamento.",
          "utilizei claude code diariamente como esteira agêntica para planejamento, implementação, revisão e debugging.",
        ],
      },
      {
        title: "amigo tech — engenheiro de software",
        period: "set 2024 – nov 2025",
        bullets: [
          "desenvolvi e mantive apis e sistemas distribuídos de backend em nestjs/typescript e go para plataforma processando r$60m+/mês, com autenticação, autorização e boas práticas de segurança.",
          "desenvolvi bot de atendimento com ia em python usando rag + api openai — reduziu tempo de atendimento em 40% em produção.",
          "reduzi latência de consultas críticas no postgresql de 13s para 150ms (~85x) via otimização baseada em análise de dados e profiling.",
          "implementei observabilidade com grafana e datadog — métricas, logs e alertas — garantindo 99% de slo e suporte à análise de experimentos em produção.",
        ],
      },
      {
        title: "brightlift — founding engineer",
        period: "2023 – 2026",
        bullets: [
          "desenvolvi e mantive agentes de ia integrados a apis de llms (openai, gemini), implementando rag, mcp, function calling e streaming com foco em maximizar valor por token em fluxos de automação.",
          "construí infraestrutura de avaliação e benchmarking de llms para comparação de modelos sem alterar a camada de aplicação — metodologia para decisões baseadas em dados.",
          "desenvolvi backend com fastapi (python), pipeline de scraping + nlp para análise de grandes volumes de dados em mongodb, containerizado com docker + ci/cd na aws.",
        ],
      },
    ],
    projects: [
      {
        name: "gatewatch",
        period: "2025 – 2026",
        desc: "plataforma de dados de mercado em tempo real em desenvolvimento contínuo há 3+ anos. foco em ingestão, processamento e visualização de dados de alta performance.",
      },
      {
        name: "brightlift",
        period: "2023 – 2026",
        desc: "plataforma de automação de campanhas digitais com ia. construída com fastapi + llms e react + vite. features: orquestração de agentes de ia para geração de criativos, pipeline de scraping de redes sociais com análise de sentimento via nlp para classificação de sinais de mercado por ticker, mongodb para armazenamento bruto. integrado com google ads e meta.",
      },
      {
        name: "rekon",
        period: "2024",
        desc: "criei uma plataforma de rastreamento e analytics em tempo real para monitorar ativos e eventos, com visibilidade operacional e insights ao vivo.",
      },
      {
        name: "reembolso ai",
        period: "2024",
        desc: "criei um sistema de gestão de despesas com ia: parsing de recibos, fluxos de aprovação e insights financeiros em tempo real para melhor controle e reembolsos mais rápidos.",
      },
      {
        name: "contract automation api",
        period: "2024",
        desc: "backend em go para automação de geração de contratos. apliquei padrões idiomáticos de concorrência com goroutines e channels. containerizado com docker para paridade entre ambientes.",
      },
    ] as Project[],
    education: [
      {
        title: "ufpe — centro de informática (cin), sistemas de informação",
        period: "2023 – atual, recife, brasil",
        bullets: [
          "um dos principais centros de ensino e pesquisa em cs do brasil e da américa latina.",
          "matérias-chave: algoritmos, estruturas de dados, sistemas operacionais, poo, engenharia de software, arquitetura de sistemas, ia, bancos de dados.",
        ],
      },
      {
        title: "ufpe — monitor (teaching assistant)",
        period: "2023 – atual",
        bullets: [
          "algoritmos & estruturas de dados e lógica de programação",
          "ajudei estudantes com resolução de problemas, análise de complexidade e pensamento computacional",
        ],
      },
    ],
    skills: [
      { label: "linguagens", items: "golang, node.js, typescript, python, sql" },
      { label: "frontend & mobile", items: "react, angular, react native" },
      { label: "arquitetura", items: "rest apis, sistemas distribuídos, microsserviços, processamento assíncrono, api gateway" },
      { label: "ia & llms", items: "rag, agentes de ia, orquestração de llm (openai, gemini, claude), mcp, function calling, streaming, nlp, claude code" },
      { label: "cloud", items: "aws (ecs, s3, sqs, sns, lambda, cloudwatch, parameter store), gcp, linux (ubuntu/debian)" },
      { label: "bancos de dados", items: "postgresql, mysql, mongodb, redis" },
      { label: "qualidade", items: "testes automatizados, jest, ci/cd, code review, git" },
      { label: "observabilidade", items: "grafana, datadog, cloudwatch, logs estruturados, slos" },
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
