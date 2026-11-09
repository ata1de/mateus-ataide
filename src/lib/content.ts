export type Lang = "en" | "pt";

export const contact = {
  email: "mateusataide.contact@gmail.com",
  github: "https://github.com/ata1de",
  linkedin: "https://linkedin.com/in/mateus-ataide",
  medium: "https://medium.com/@mateusataide05",
} as const;

/** A number worth remembering from a stint, read as "value — what it measures". */
export type Figure = { value: string; label: string };

export type Role = { title: string; period: string; bullets: string[] };

export type Kind = "work" | "school";

/** Everything that gets its own page at /<slug>. */
export type Entry = {
  slug: string;
  kind: Kind;
  name: string;
  /** Short range shown next to the name in the home lists. */
  years: string;
  site?: string;
  /** One line on what the place or thing is. */
  blurb: string;
  /** A few sentences in first person — the part of the page about me, not the metrics. */
  story: string[];
  roles?: Role[];
  figures?: Figure[];
  image?: Shot;
  /** Press coverage, newest first — outside proof of where the company is heading. */
  news?: News[];
};

export type News = { title: string; source: string; date: string; url: string };

/**
 * A picture of the company's product, from its own site. `contain` images are
 * cut-outs shown on a backdrop in the brand's colour; `cover` ones fill the frame.
 */
export type Shot = {
  src: string;
  alt: string;
  fit: "contain" | "cover";
  /** Backdrop behind a cut-out. */
  backdrop?: string;
};

type Copy = {
  greeting: (day: number) => string;
  headline: { before: string; mark: string; after: string };
  about: string[];
  aboutLast: { before: string; link: string; after: string };
  lists: { work: string; school: string; writing: string; reading: string };
  reads: { title: string; author: string; cover: string; url: string }[];
  allWriting: string;
  back: string;
  next: string;
  visit: string;
  figures: string;
  news: string;
  footer: string;
  notFound: { title: string; body: string; home: string };
  theme: { light: string; dark: string };
  entries: Entry[];
};

const DAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAYS_PT = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

export const copy: Record<Lang, Copy> = {
  en: {
    greeting: (day) => `Happy ${DAYS_EN[day]}`,
    headline: { before: "Hi, I'm ", mark: "Mateus", after: "" },
    about: [
      "I'm a software engineer from Brazil, building payments at Stone.",
      "I'm deeply ambitious. I want to build big things and be close to the people who do. I'm on my way to becoming a polyglot, and I want to see as many countries as I can, keeping each one in photographs.",
      "I'm afraid of the sea and still dream of sailing it, far. Hypocritical, I know. Someday I'll have a long-haired dachshund and a cat.",
    ],
    aboutLast: {
      before: "If you want to chat, ",
      link: "write to me",
      after: ".",
    },
    lists: { work: "Work", school: "School", writing: "Writing", reading: "Recent reads" },
    reads: [
      {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        cover: "/images/books/steve-jobs.webp",
        url: "https://www.goodreads.com/book/show/11084145",
      },
      {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        cover: "/images/books/dorian-gray.webp",
        url: "https://www.goodreads.com/book/show/5297",
      },
      {
        title: "Ikigai",
        author: "Héctor García & Francesc Miralles",
        cover: "/images/books/ikigai.webp",
        url: "https://www.goodreads.com/book/show/40534545",
      },
    ],
    allWriting: "Everything on Medium",
    back: "Mateus",
    next: "Next",
    visit: "Visit",
    figures: "In numbers",
    news: "In the news",
    footer: "Made in Brazil, highlighter in hand.",
    notFound: {
      title: "Nothing here",
      body: "This page doesn't exist. It may have moved, or the link has a typo.",
      home: "Go to the home page",
    },
    theme: { light: "Switch to light theme", dark: "Switch to dark theme" },
    entries: [
      {
        slug: "stone",
        kind: "work",
        name: "Stone",
        years: "2026 –",
        site: "https://www.stone.com.br",
        blurb: "Brazilian fintech — payments, banking and credit for merchants.",
        image: {
          src: "/images/stone.webp",
          alt: "Stone's card machine",
          fit: "contain",
          backdrop: "#0b4a32",
        },
        news: [
          {
            title: "Retail grew 6.3% in Q3, according to the Stone Retail Index",
            source: "Poder360",
            date: "2026-10-13",
            url: "https://www.poder360.com.br/poder-economia/varejo-sobe-63-no-3o-trimestre-ante-2025-diz-stone/",
          },
          {
            title: "Adjusted net income of R$549.1M in Q1, up 3.5% year on year",
            source: "InfoMoney",
            date: "2026-05-14",
            url: "https://www.infomoney.com.br/mercados/stone-stoc34-resultados-primeiro-trimestre-2026/",
          },
        ],
        story: [
          "Stone is one of the largest fintechs in Brazil. I joined in September 2026 as a software engineer, working on payment systems that run across roughly 5 million POS terminals and reach more than 5 million clients.",
          "It's early days. This page will fill up as the work does.",
        ],
        roles: [{ title: "Software Engineer", period: "Sep 2026 – present", bullets: [] }],
        figures: [
          { value: "~5M", label: "POS terminals" },
          { value: "5M+", label: "clients reached" },
        ],
      },
      {
        slug: "robbin",
        kind: "work",
        name: "Robbin",
        years: "2026",
        site: "https://robbin.com.br",
        blurb: "Private-label B2B credit infrastructure for industries and distributors.",
        image: { src: "/images/robbin.webp", alt: "The Robbin logo over clouds", fit: "cover" },
        news: [
          {
            title: "Launches a credit MCP that brings credit limits into Claude and ChatGPT",
            source: "Mundo das Fintechs",
            date: "2026-10-26",
            url: "https://mundodasfintechs.com/robbin-mcp-credito-claude-chatgpt-leonardo-moura-fidc-100-milhoes.html",
          },
          {
            title: "Raises US$108M to digitise B2B credit",
            source: "Startupi",
            date: "2026-05-22",
            url: "https://startupi.com.br/robbin-capta-us-108-milhoes/",
          },
        ],
        story: [
          "Robbin lets industries and distributors offer credit under their own brand. My time there was short and dense, and most of it went into taking developers out of loops they never needed to be in.",
        ],
        roles: [
          {
            title: "Software Engineer",
            period: "Jul – Sep 2026",
            bullets: [
              "Helped build an agentic Slack tool for payment reprocessing: from 30–60 min with a developer to under 2 min, run by ops alone.",
              "Scoped a 50%+ cut in AWS spend (~R$30k a year) via S3 log retention and right-sized ECS.",
              "Moved database migrations into CI/CD, removing 70%+ of manual AWS work.",
            ],
          },
        ],
        figures: [
          { value: "< 2 min", label: "payment reprocessing, down from 30–60 min" },
          { value: "−50%", label: "projected AWS spend, about R$30k a year" },
          { value: "−70%", label: "manual migration work" },
        ],
      },
      {
        slug: "amigo-tech",
        kind: "work",
        name: "Amigo Tech",
        years: "2024 – 2026",
        site: "https://amigotech.com.br",
        blurb: "Software and payments for clinics and healthcare professionals.",
        image: {
          src: "/images/amigo-tech.webp",
          alt: "The Amigo Pay card machine taking a payment",
          fit: "contain",
          backdrop: "#e6f0fd",
        },
        news: [
          {
            title: "Raises R$160M from Riverwood Capital to launch its fintech",
            source: "Exame",
            date: "2024-08-01",
            url: "https://exame.com/bussola/com-aporte-de-r-160-mi-amigo-tech-quer-ser-o-proximo-unicornio-da-saude-ou-melhor-o-proximo-bode/",
          },
          {
            title: "Riverwood injects capital into Brazilian healthtech",
            source: "Latin Lawyer",
            date: "2024-02-02",
            url: "https://latinlawyer.com/article/riverwood-injects-capital-brazilian-healthtech",
          },
        ],
        story: [
          "Amigo Pay is the payments side of Amigo's clinic software. I joined as an engineer and ended up leading its fintech squad.",
        ],
        roles: [
          {
            title: "Team Leader",
            period: "Sep 2025 – May 2026",
            bullets: [
              "Led the fintech squad: technical decisions, planning and mentoring through reviews and 1:1s.",
              "Launched a partner checkout API (Pix and card installments) with rate limiting. Projected +30% revenue.",
              "Cut boleto generation from 2+ minutes to 100ms with async installments.",
              "Built the Pix dispute (MED) system in one week, a Central Bank requirement touching 75% of transactions.",
            ],
          },
          {
            title: "Software Engineer",
            period: "Sep 2024 – May 2026",
            bullets: [
              "Evolved Amigo Pay in NestJS and Go, on a platform with 100M+ in TPV.",
              "Took an accounts-receivable query from 13s to 150ms (~85x) in PostgreSQL.",
              "Built the OTP API that guards R$35M+ a month in payment operations.",
            ],
          },
        ],
        figures: [
          { value: "R$60M+", label: "processed every month" },
          { value: "13s → 150ms", label: "accounts-receivable query" },
          { value: "2 min → 100ms", label: "boleto generation" },
          { value: "R$35M+", label: "a month behind the OTP layer" },
          { value: "1 week", label: "to ship the Pix dispute system" },
        ],
      },
      {
        slug: "ufpe",
        kind: "school",
        name: "UFPE",
        years: "2023 – 2027",
        site: "https://portal.cin.ufpe.br",
        blurb:
          "Centro de Informática — one of the leading computer science schools in Latin America.",
        story: [
          "I study computer technology at CIn, UFPE's computer science centre. Algorithms, data structures, operating systems, systems architecture, databases and AI.",
          "Since 2023 I've been a teaching assistant for algorithms & data structures and programming logic, helping students with problem solving, complexity analysis and computational thinking.",
        ],
      },
    ],
  },

  pt: {
    greeting: (day) => (day === 0 || day === 6 ? `Bom ${DAYS_PT[day]}` : `Boa ${DAYS_PT[day]}`),
    headline: { before: "Oi, eu sou o ", mark: "Mateus", after: "" },
    about: [
      "Sou engenheiro de software, do Brasil, e construo pagamentos na Stone.",
      "Sou extremamente ambicioso. Quero construir coisas grandes e estar perto de quem faz o mesmo. Estou no caminho para ser poliglota e quero conhecer o máximo de países que conseguir, guardando cada um em fotografia.",
      "Tenho medo do mar e, mesmo assim, sonho em velejar bem longe. Hipócrita, eu sei. Um dia vou ter um salsicha peludo e um gato.",
    ],
    aboutLast: {
      before: "Se quiser conversar, ",
      link: "me escreve",
      after: ".",
    },
    lists: { work: "Trabalho", school: "Estudo", writing: "Escrita", reading: "Leituras recentes" },
    reads: [
      {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        cover: "/images/books/steve-jobs.webp",
        url: "https://www.goodreads.com/book/show/11084145",
      },
      {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        cover: "/images/books/dorian-gray.webp",
        url: "https://www.goodreads.com/book/show/5297",
      },
      {
        title: "Ikigai",
        author: "Héctor García & Francesc Miralles",
        cover: "/images/books/ikigai.webp",
        url: "https://www.goodreads.com/book/show/40534545",
      },
    ],
    allWriting: "Tudo no Medium",
    back: "Mateus",
    next: "Próximo",
    visit: "Visitar",
    figures: "Em números",
    news: "Na mídia",
    footer: "Feito no Brasil, com marca-texto na mão.",
    notFound: {
      title: "Nada por aqui",
      body: "Essa página não existe. Ela pode ter mudado de lugar, ou o link tem um erro de digitação.",
      home: "Ir para a página inicial",
    },
    theme: { light: "Mudar para o tema claro", dark: "Mudar para o tema escuro" },
    entries: [
      {
        slug: "stone",
        kind: "work",
        name: "Stone",
        years: "2026 –",
        site: "https://www.stone.com.br",
        blurb: "Fintech brasileira — pagamentos, conta PJ e crédito para quem empreende.",
        image: {
          src: "/images/stone.webp",
          alt: "A maquininha da Stone",
          fit: "contain",
          backdrop: "#0b4a32",
        },
        news: [
          {
            title: "Varejo sobe 6,3% no 3º trimestre, segundo o Índice do Varejo Stone",
            source: "Poder360",
            date: "2026-10-13",
            url: "https://www.poder360.com.br/poder-economia/varejo-sobe-63-no-3o-trimestre-ante-2025-diz-stone/",
          },
          {
            title: "Lucro líquido ajustado de R$ 549,1 milhões no 1º trimestre, alta de 3,5%",
            source: "InfoMoney",
            date: "2026-05-14",
            url: "https://www.infomoney.com.br/mercados/stone-stoc34-resultados-primeiro-trimestre-2026/",
          },
        ],
        story: [
          "A Stone é uma das maiores fintechs do Brasil. Entrei em setembro de 2026 como engenheiro de software, trabalhando em sistemas de pagamento que rodam em cerca de 5 milhões de maquininhas e alcançam mais de 5 milhões de clientes.",
          "Ainda é o começo. Essa página vai crescendo junto com o trabalho.",
        ],
        roles: [{ title: "Engenheiro de Software", period: "set 2026 – atual", bullets: [] }],
        figures: [
          { value: "~5M", label: "maquininhas" },
          { value: "5M+", label: "clientes alcançados" },
        ],
      },
      {
        slug: "robbin",
        kind: "work",
        name: "Robbin",
        years: "2026",
        site: "https://robbin.com.br",
        blurb: "Infraestrutura de crédito private label para indústrias e distribuidores.",
        image: { src: "/images/robbin.webp", alt: "O logo da Robbin sobre nuvens", fit: "cover" },
        news: [
          {
            title: "Lança MCP que entrega limite de crédito dentro do Claude e do ChatGPT",
            source: "Mundo das Fintechs",
            date: "2026-10-26",
            url: "https://mundodasfintechs.com/robbin-mcp-credito-claude-chatgpt-leonardo-moura-fidc-100-milhoes.html",
          },
          {
            title: "Capta US$ 108 milhões para digitalizar o crédito B2B",
            source: "Startupi",
            date: "2026-05-22",
            url: "https://startupi.com.br/robbin-capta-us-108-milhoes/",
          },
        ],
        story: [
          "A Robbin permite que indústrias e distribuidores ofereçam crédito com a própria marca. Fiquei pouco tempo, mas foi intenso — e a maior parte dele foi tirando desenvolvedores de processos dos quais eles nunca precisaram participar.",
        ],
        roles: [
          {
            title: "Engenheiro de Software",
            period: "jul – set 2026",
            bullets: [
              "Ajudei a construir uma tool agêntica no Slack para reprocessar pagamentos: de 30–60 min com um dev para menos de 2 min, feito pelo operacional sozinho.",
              "Mapeei um corte de 50%+ nos custos da AWS (~R$30 mil por ano) com retenção de logs no S3 e ajuste do ECS.",
              "Levei as migrations de banco para o CI/CD, eliminando 70%+ do trabalho manual na AWS.",
            ],
          },
        ],
        figures: [
          { value: "< 2 min", label: "reprocessamento de pagamento, antes 30–60 min" },
          { value: "−50%", label: "gasto projetado na AWS, cerca de R$30 mil por ano" },
          { value: "−70%", label: "trabalho manual com migrations" },
        ],
      },
      {
        slug: "amigo-tech",
        kind: "work",
        name: "Amigo Tech",
        years: "2024 – 2026",
        site: "https://amigotech.com.br",
        blurb: "Software e pagamentos para clínicas e profissionais de saúde.",
        image: {
          src: "/images/amigo-tech.webp",
          alt: "A maquininha do Amigo Pay recebendo um pagamento",
          fit: "contain",
          backdrop: "#e6f0fd",
        },
        news: [
          {
            title: "Recebe R$ 160 milhões da Riverwood para lançar sua fintech",
            source: "Exame",
            date: "2024-08-01",
            url: "https://exame.com/bussola/com-aporte-de-r-160-mi-amigo-tech-quer-ser-o-proximo-unicornio-da-saude-ou-melhor-o-proximo-bode/",
          },
          {
            title: "Riverwood investe em healthtech brasileira",
            source: "Latin Lawyer",
            date: "2024-02-02",
            url: "https://latinlawyer.com/article/riverwood-injects-capital-brazilian-healthtech",
          },
        ],
        story: [
          "O Amigo Pay é o lado de pagamentos do software de clínicas da Amigo. Entrei como engenheiro e acabei liderando a squad de fintech.",
        ],
        roles: [
          {
            title: "Team Leader",
            period: "set 2025 – mai 2026",
            bullets: [
              "Liderei a squad de fintech: decisões técnicas, planejamento e mentoria via code review e 1:1s.",
              "Lancei uma API de checkout para parceiros (Pix e cartão parcelado) com rate limiting. Receita projetada de +30%.",
              "Reduzi a geração de boleto de 2+ minutos para 100ms com parcelas assíncronas.",
              "Construí o sistema de MED (contestação de Pix) em uma semana, exigência do Bacen que afeta 75% das transações.",
            ],
          },
          {
            title: "Engenheiro de Software",
            period: "set 2024 – mai 2026",
            bullets: [
              "Evoluí o Amigo Pay em NestJS e Go, numa plataforma com 100M+ de TPV.",
              "Levei uma consulta de contas a receber de 13s para 150ms (~85x) no PostgreSQL.",
              "Construí a API de OTP que protege R$35M+ por mês em operações de pagamento.",
            ],
          },
        ],
        figures: [
          { value: "R$60M+", label: "processados por mês" },
          { value: "13s → 150ms", label: "consulta de contas a receber" },
          { value: "2 min → 100ms", label: "geração de boleto" },
          { value: "R$35M+", label: "por mês protegidos pela camada de OTP" },
          { value: "1 semana", label: "para entregar o sistema de MED" },
        ],
      },
      {
        slug: "ufpe",
        kind: "school",
        name: "UFPE",
        years: "2023 – 2027",
        site: "https://portal.cin.ufpe.br",
        blurb:
          "Centro de Informática — uma das principais escolas de computação da América Latina.",
        story: [
          "Estudo tecnologia da computação no CIn, o centro de computação da UFPE. Algoritmos, estruturas de dados, sistemas operacionais, arquitetura de sistemas, bancos de dados e IA.",
          "Desde 2023 sou monitor de algoritmos & estruturas de dados e lógica de programação, ajudando a turma com resolução de problemas, análise de complexidade e pensamento computacional.",
        ],
      },
    ],
  },
};
