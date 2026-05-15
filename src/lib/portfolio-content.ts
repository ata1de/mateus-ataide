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
    nav: { about: "about", projects: "projects" },
    name: "Mateus Ataide",
    location: "🇧🇷 recife, pernambuco, brasil",
    role: "software engineer & team lead @ amigo tech | information systems @ ufpe (cin)",
    bio: [
      "backend engineer with 3+ years of experience building high-reliability fintech systems processing R$60M+/month. focused on golang, node.js/typescript and python, with growing expertise in applied ai — llms, rag and ai agents in production.",
      "currently leading a fintech squad at amigo tech and studying information systems at ufpe, one of brazil's top cs schools.",
      "really interested in meeting new people and learning about their experiences. reach out if you want to chat!",
    ],
    reach: "reach out:",
    sections: {
      metrics: "key metrics",
      experience: "experience",
      projects: "projects",
      education: "education",
      skills: "skills",
    },
    metrics: [
      "R$60M+/month processed",
      "99% SLO across all APIs",
      "40% reduction in customer response time",
      "100ms boleto generation (from 2 min)",
      "~85x query performance improvement (13s → 150ms)",
    ],
    experience: [
      {
        title: "amigo tech — software engineer & team lead",
        period: "nov 2025 – present",
        bullets: [
          "led fintech payment squad sustaining 17% monthly transaction growth",
          "architected e-commerce integration api (nestjs/typescript + redis) with projected +30% revenue impact",
          "reduced boleto generation time from 2 minutes to 100ms via async processing",
          "reduced critical postgresql query latency from 13s to ~350ms via index redesign",
          "deployed automated tests with jest and ci/cd on the main payments api",
          "managed aws infrastructure: ecs, s3, cloudwatch, parameter store (ssm)",
          "conducted code reviews, 1:1s and technical mentoring",
        ],
      },
      {
        title: "amigo tech — software engineer",
        period: "sep 2024 – nov 2025",
        bullets: [
          "built features for payment system processing R$60M+/month (pix, credit card, pos)",
          "architected master user system and otp validation with feature flags for provider routing — sustained R$35M in payments with zero downtime",
          "implemented observability with grafana and datadog — 99% slo across all apis",
          "built ai customer support bot using python + rag + llms — reduced response time by 40%",
          "integrated google gemini into react native app for medical record generation — 1,000+ records/day",
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
        name: "reembolso ai",
        period: "2024",
        desc: "ai-powered expense management system: receipt parsing, approval flows and real-time financial insights for better control and faster reimbursements.",
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
      { label: "architecture", items: "rest apis, distributed systems, microservices, async processing, api gateway" },
      { label: "ai & llms", items: "rag, ai agents, llm orchestration (openai, gemini, claude), nlp, claude code, mcps" },
      { label: "cloud", items: "aws (ecs, s3, cloudwatch, parameter store), linux (ubuntu/debian)" },
      { label: "databases", items: "postgresql, mysql, mongodb, redis" },
      { label: "quality", items: "automated tests, jest, ci/cd, code review, git" },
      { label: "observability", items: "grafana, datadog, cloudwatch, structured logging, slos" },
    ],
  },
  pt: {
    nav: { about: "sobre", projects: "projetos" },
    name: "Mateus Ataide",
    location: "🇧🇷 recife, pernambuco, brasil",
    role: "engenheiro de software & team lead @ amigo tech | sistemas de informação @ ufpe (cin)",
    bio: [
      "engenheiro de backend com 3+ anos de experiência construindo sistemas fintech de alta confiabilidade que processam R$60M+/mês. focado em golang, node.js/typescript e python, com expertise crescente em ia aplicada — llms, rag e agentes de ia em produção.",
      "atualmente liderando uma squad fintech na amigo tech e estudando sistemas de informação na ufpe, uma das melhores escolas de cs do brasil.",
      "tenho muito interesse em conhecer pessoas novas e aprender sobre suas experiências. me chama se quiser conversar!",
    ],
    reach: "contato:",
    sections: {
      metrics: "métricas",
      experience: "experiência",
      projects: "projetos",
      education: "educação",
      skills: "habilidades",
    },
    metrics: [
      "R$60M+/mês processados",
      "99% SLO em todas as APIs",
      "40% de redução no tempo de resposta ao cliente",
      "geração de boleto em 100ms (antes 2 min)",
      "~85x melhoria de performance em queries (13s → 150ms)",
    ],
    experience: [
      {
        title: "amigo tech — engenheiro de software & team lead",
        period: "nov 2025 – atual",
        bullets: [
          "liderança da squad de pagamentos sustentando 17% de crescimento mensal de transações",
          "arquitetei api de integração com e-commerce (nestjs/typescript + redis) com impacto projetado de +30% em receita",
          "reduzi o tempo de geração de boletos de 2 minutos para 100ms via processamento assíncrono",
          "reduzi latência crítica de query postgresql de 13s para ~350ms via redesign de índices",
          "implementei testes automatizados com jest e ci/cd na principal api de pagamentos",
          "gerencio infraestrutura aws: ecs, s3, cloudwatch, parameter store (ssm)",
          "conduzo code reviews, 1:1s e mentoria técnica",
        ],
      },
      {
        title: "amigo tech — engenheiro de software",
        period: "set 2024 – nov 2025",
        bullets: [
          "desenvolvi features para sistema de pagamentos processando R$60M+/mês (pix, cartão de crédito, pos)",
          "arquitetei sistema de master user e validação otp com feature flags para roteamento de providers — sustentei R$35M em pagamentos sem downtime",
          "implementei observabilidade com grafana e datadog — 99% slo em todas as apis",
          "construí bot de atendimento com python + rag + llms — reduziu tempo de resposta em 40%",
          "integrei google gemini em app react native para geração de prontuários médicos — 1.000+ registros/dia",
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
      { label: "arquitetura", items: "rest apis, sistemas distribuídos, microsserviços, processamento assíncrono, api gateway" },
      { label: "ia & llms", items: "rag, agentes de ia, orquestração de llm (openai, gemini, claude), nlp, claude code, mcps" },
      { label: "cloud", items: "aws (ecs, s3, cloudwatch, parameter store), linux (ubuntu/debian)" },
      { label: "bancos de dados", items: "postgresql, mysql, mongodb, redis" },
      { label: "qualidade", items: "testes automatizados, jest, ci/cd, code review, git" },
      { label: "observabilidade", items: "grafana, datadog, cloudwatch, logs estruturados, slos" },
    ],
  },
} as const;
