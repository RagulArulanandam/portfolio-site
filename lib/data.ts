export type Category = "AI and LLM" | "Full-stack" | "Data";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  categories: Category[];
  stack: string[];
  repo: string;
  images: { src: string; alt: string }[];
  objective: string;
  approach: string[];
  results: string[];
  featured?: boolean;
};

export const profile = {
  name: "Ragul Arulanandam",
  role: "Software Engineer and AI/Data Engineer",
  location: "Liverpool, United Kingdom",
  email: "ragularulanandam@gmail.com",
  github: "https://github.com/RagulArulanandam",
  linkedin: "https://www.linkedin.com/in/ragul-a-295b02148",
  headline: "Where clean code meets curious data.",
  roles: ["Software Engineer", "Full-stack Developer", "Python Developer", "Data Scientist", "Data Engineer", "Data Analyst"],
  seeking:
    "Hunting for roles where I can build products, shape data pipelines and teach models to be genuinely useful.",
  intro:
    "Software engineer with 3+ years of commercial experience in C#, ASP.NET Core, Angular and React, and an MSc in Data Science and AI (Merit) from the University of Liverpool. I enjoy turning ideas into working systems, from data pipelines and models to APIs and polished interfaces.",
  visa: "Graduate Visa to Dec 2028. Open to Skilled Worker sponsorship.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["C#", "ASP.NET Core", ".NET 6/8/10", "Entity Framework Core", "Clean Architecture", "Microservices", "Java"] },
  { group: "Frontend", items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3 and SCSS"] },
  { group: "Data and AI", items: ["Python", "Polars", "Pandas", "NumPy", "TensorFlow", "LLM integration", "Power BI", "DAX"] },
  { group: "Databases", items: ["SQL Server", "PostgreSQL", "T-SQL", "Star schema", "Query optimisation"] },
  { group: "Cloud and DevOps", items: ["Azure", "Azure DevOps", "Service Bus", "Redis", "Docker", "GitHub Actions", "Git"] },
  { group: "Practice", items: ["xUnit", "pytest", "TDD", "Agile Scrum", "Code review"] },
];

export const experience = {
  company: "HCL Technologies",
  title: "Software Engineer",
  period: "Dec 2021 to Jan 2025",
  points: [
    "Built 5-6 enterprise web applications end to end with Angular, ASP.NET Core Web API, C# and SQL Server.",
    "Migrated a monolith to microservices and a PWA, adding OAuth2/OpenID Connect and event-driven integration over Azure Service Bus.",
    "Redesigned SQL Server schemas, stored procedures and EF Core migrations, cutting query times from minutes to seconds.",
    "Optimised Azure DevOps CI/CD pipelines, reducing deployment downtime by 30%.",
    "Used Azure Redis Cache and SignalR to cut database hits by 40-60% across several services.",
    "Built Power BI dashboards and led a cross-functional Agile Scrum team.",
  ],
};

export const education = [
  { title: "MSc Data Science and Artificial Intelligence (Merit)", place: "University of Liverpool", period: "2025 to 2026" },
  { title: "BE Electronics and Communication Engineering", place: "Chennai Institute of Technology", period: "2017 to 2021" },
];

export const certs = ["Microsoft Azure Fundamentals (AZ-900)", "HCL Technologies Champion Award, 2022 to 2024"];

const list: Project[] = [
  {
    slug: "hirelens",
    title: "HireLens",
    tagline: "An LLM pipeline that scores CVs against a job description, with an explainable result.",
    categories: ["AI and LLM", "Full-stack"],
    stack: ["Angular", "ASP.NET Core", "EF Core", "SQL Server", "LLM API", "xUnit"],
    repo: "https://github.com/RagulArulanandam/hirelens",
    images: [
      { src: "/projects/hirelens/results.png", alt: "HireLens results page with score rings and gaps" },
      { src: "/projects/hirelens/history.png", alt: "HireLens analysis history" },
      { src: "/projects/hirelens/results-dark.png", alt: "HireLens results in dark mode" },
    ],
    objective:
      "Explore how to combine deterministic logic with an LLM so that scoring stays cheap, repeatable and explainable instead of relying on a model for everything.",
    approach: [
      "Text is extracted locally from PDF, DOCX and TXT, normalised and length-capped before any model call.",
      "The ATS score is computed deterministically in C# (keyword coverage, sections, contact, dates, format); the LLM only judges what keywords cannot.",
      "One LLM call per CV with a compact system prompt and strict JSON output, validated with a single retry on malformed output.",
      "Results are cached in SQL by a SHA-256 hash of job description, CV and model, so repeat runs cost nothing.",
      "Provider abstraction (ICvAnalysisProvider) with a real LLM provider and a deterministic mock for tests.",
      "Clean Architecture, JWT roles, hand-written middleware (correlation ID, ProblemDetails, rate limiting) and PDF export.",
    ],
    results: [
      "Per-analysis token usage is logged and CV content is never logged.",
      "Uploaded files are removed automatically after a configurable retention period.",
      "Unit and API integration tests run against an in-memory database.",
    ],
  },
  {
    slug: "cassava-guard",
    title: "Cassava Guard",
    tagline: "MSc dissertation: a CNN classifier paired with a guardrailed LLM assistant.",
    categories: ["AI and LLM", "Data"],
    stack: ["Python", "TensorFlow", "MobileNetV2", "Gemini API", "Gradio"],
    repo: "https://github.com/RagulArulanandam/MSC_DISSERTATION_2025",
    images: [],
    objective:
      "Combine computer vision with a conversational LLM so that a diagnosis comes with context-aware follow-up, while keeping the model on topic.",
    approach: [
      "Trained a MobileNetV2 CNN on 20,000+ cassava leaf images across 5 disease categories, from preprocessing through training and evaluation.",
      "Integrated the Gemini API for conversational follow-up on the predicted class.",
      "Added domain guardrails to constrain the LLM to the subject and compared it against an unguarded baseline.",
      "Wrapped the system in a Gradio interface for image upload and chat.",
    ],
    results: [
      "97% classification accuracy.",
      "40%+ improvement in response accuracy with guardrails versus the unguarded baseline.",
      "Dissertation mark: 77 (distinction level).",
    ],
  },
  {
    slug: "ai-product-poc",
    title: "AI Modules Platform",
    tagline: "Exploring AI engineering: a multi-tenant platform where LLM modules plug in through a manifest.",
    categories: ["AI and LLM", "Full-stack"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL RLS", "LLM API", "n8n"],
    repo: "https://github.com/RagulArulanandam/AI_Product_POC",
    images: [],
    objective:
      "A hands-on exploration of what an AI engineer builds around a model: tenancy, queues, safe conversation rules and observability.",
    approach: [
      "Multi-tenant Next.js app with row-level security in PostgreSQL for tenant isolation.",
      "Product registry: each AI module is registered through a manifest and enabled per tenant.",
      "Automation engine with a queue, retrying runner, scheduled worker and idempotent webhook handling.",
      "LLM conversation agent that answers inside strict rules and hands over to a person on defined triggers such as complaints, urgent questions or unusable answers.",
      "Encrypted OAuth tokens, rate limits, payload caps, security headers and an admin panel with an audit log.",
    ],
    results: [
      "Tested with scripted models and fake integrations, plus a documented security review.",
      "Verification script runs lint, typecheck, tests and a secret scan.",
    ],
  },
  {
    slug: "nyc-taxi-etl",
    title: "NYC Taxi ETL Pipeline",
    tagline: "A tested pipeline that turns about 100M trip records into analytics-ready tables.",
    categories: ["Data"],
    stack: ["Python", "Polars", "PostgreSQL", "Power BI", "Airflow", "Docker", "pytest"],
    repo: "https://github.com/RagulArulanandam/nyc-taxi-etl",
    images: [],
    objective: "Build a reliable end-to-end pipeline and measure the performance choices rather than assume them.",
    approach: [
      "Automated extraction of 24 monthly Parquet files (2023 to 2024), about 4 GB raw.",
      "Polars transformations for type casting, null handling and feature engineering.",
      "PostgreSQL bulk loading with COPY and in-memory buffers, plus materialized views for analytics.",
      "Idempotent loads tracked in a load_log table, orchestrated with Airflow, packaged with Docker and checked in GitHub Actions.",
    ],
    results: [
      "200K to 500K rows per second ingestion, about 50x faster than row-by-row inserts.",
      "Polars transformations 5-8x faster than equivalent Pandas.",
      "15 pytest cases covering extract, transform and load consistency.",
    ],
  },
  {
    slug: "uk-retail-warehouse",
    title: "UK Retail Data Warehouse",
    tagline: "Star-schema warehouse with SCD Type 2 and window-function analytics.",
    categories: ["Data"],
    stack: ["Python", "SQL Server", "T-SQL", "Power BI"],
    repo: "https://github.com/RagulArulanandam/uk-retail-warehouse",
    images: [],
    objective: "Practise dimensional modelling and analytical SQL on a real transactional dataset.",
    approach: [
      "Cleaned and investigated the UCI Online Retail II dataset, then loaded it into SQL Server staging.",
      "Built a star schema warehouse with an SCD Type 2 customer dimension.",
      "Wrote analytical queries using window functions (RFM, rankings, trends) and tuned them.",
      "Visualised the results in a Power BI dashboard.",
    ],
    results: ["Repeatable load scripts from staging to warehouse.", "Analytics layer ready for Power BI."],
  },
  {
    slug: "platera",
    title: "Platera",
    tagline: "A community recipe book with a custom Angular design system and a Clean Architecture API.",
    categories: ["Full-stack"],
    stack: ["Angular", "ASP.NET Core (.NET 10)", "EF Core", "SQL Server", "Serilog", "xUnit"],
    repo: "https://github.com/RagulArulanandam/platera",
    images: [
      { src: "/projects/platera/home.png", alt: "Platera home page" },
      { src: "/projects/platera/browse.png", alt: "Platera browse page with filters" },
      { src: "/projects/platera/recipe.png", alt: "Platera recipe detail page" },
      { src: "/projects/platera/admin.png", alt: "Platera admin dashboard" },
    ],
    objective: "Build a complete full-stack product with production-style concerns: auth, validation, logging, tests and accessibility.",
    approach: [
      "ASP.NET Core Web API with Domain, Application, Infrastructure and Api layers.",
      "JWT access tokens with rotating hashed refresh tokens, ASP.NET Identity roles and FluentValidation.",
      "Hand-written middleware for correlation IDs, RFC 7807 errors, request timing and rate limiting; Serilog logging.",
      "Angular with standalone components, signals, lazy routes, guards, interceptors and a custom SCSS design system with dark mode.",
      "Search, filters, sorting, ratings, likes, comments, image uploads and an admin dashboard.",
    ],
    results: ["Application unit tests and WebApplicationFactory integration tests.", "Responsive, keyboard accessible and AA contrast."],
  },
];

const order = ["platera", "hirelens", "cassava-guard", "ai-product-poc", "nyc-taxi-etl", "uk-retail-warehouse"];
export const projects: Project[] = order.map((s) => list.find((p) => p.slug === s)!);

export const categories: ("All" | Category)[] = ["All", "AI and LLM", "Full-stack", "Data"];
