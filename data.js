// ===== Cortexa Labs — data + translations (EN/TR) =====

window.SITE_DATA = {
  company: {
    name: "Cortexa Labs",
    tagline: "We design & ship robust products.",
    email: "hello@cortexaai.net",
    location: "Istanbul / Remote",
  },

  // Numbers are language-agnostic; labels come from TRANSLATIONS
  metrics: [
    { k: "14",  v: "Clients" },
    { k: "32+", v: "Projects delivered" },
    { k: "7",   v: "Team size" },
    { k: "6–10", v: "Avg delivery (weeks)" },
  ],

  // Logos not used; just name & note
  clients: [
    { name: "Delta Retail",    note: "Web platform rebuild" },
    { name: "Orion Logistics", note: "iOS & Android MVP" },
    { name: "Apex SaaS",       note: "Backend & API" },
    { name: "Helix Travel",    note: "Admin dashboard" },
  ],

  projects: [
    {
      title: "B2B SaaS Admin Panel",
      desc: "Role-based access, analytics, and multi-tenant management.",
      tags: ["HTML/CSS/JS", "Node", "Postgres"],
    },
    {
      title: "E-commerce Dashboard",
      desc: "Inventory, orders, and payments with exportable reports.",
      tags: ["Vanilla JS", "REST API", "S3"],
    },
    {
      title: "Booking Platform",
      desc: "Calendar, availability, notifications, and invoicing.",
      tags: ["JS", "WebSockets", "Redis"],
    },
    {
      title: "Delivery Mobile App",
      desc: "Courier tracking, push alerts, and offline support.",
      tags: ["Swift", "Kotlin", "JWT"],
    },
  ],

  // Tech names are universal; keep notes in English for consistency.
  stack: [
    {
      area: "Frontend",
      items: [
        "React 18",
        "Next.js 14 (App Router)",
        "TypeScript 5",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Web Components"
      ],
      note: "Accessible UI, SSR/SSG, islands, hydration strategies."
    },
    {
      area: "Backend",
      items: [
        "Node.js 20",
        "Bun",
        "Deno",
        "Python (FastAPI)",
        "GraphQL (Yoga/Apollo)",
        "tRPC",
        "WebSockets/SSE"
      ],
      note: "API-first, typed contracts, real-time updates."
    },
    {
      area: "Data & Storage",
      items: [
        "PostgreSQL 16",
        "MySQL",
        "SQLite",
        "Redis",
        "Prisma/Drizzle ORM",
        "S3/Cloudflare R2",
        "CQRS patterns"
      ],
      note: "Migrations, seeders, multi-tenant ready."
    },
    {
      area: "Mobile",
      items: [
        "SwiftUI (iOS)",
        "Kotlin & Jetpack Compose (Android)",
        "React Native",
        "Offline-first",
        "Push Notifications"
      ],
      note: "Native UX, secure auth, store pipelines."
    },
    {
      area: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "AWS/GCP/Azure",
        "Vercel",
        "Cloudflare",
        "Fly.io"
      ],
      note: "Preview apps, blue/green, cost/perf baselines."
    },
    {
      area: "Quality & Observability",
      items: [
        "Playwright",
        "Vitest/Jest",
        "Cypress",
        "ESLint/Prettier",
        "OpenTelemetry",
        "Prometheus/Grafana",
        "Sentry"
      ],
      note: "E2E/visual tests, tracing, error budgets."
    },
    {
      area: "Security & Integrations",
      items: [
        "OAuth2/OIDC",
        "JWT/Session",
        "Zod/Valibot validation",
        "Stripe",
        "Clerk/Auth0",
        "reCAPTCHA",
        "Rate limiting"
      ],
      note: "Least privilege, audit logs, compliance-friendly."
    }
  ],

  blog: [
    {
      title: "From Idea to MVP in 8 Weeks",
      date: "2025-08-20",
      excerpt: "Our checklist to ship MVPs with predictable scope, weekly demos and clean APIs.",
      url: "#",
      tags: ["MVP", "Process", "Roadmap"]
    },
    {
      title: "Design System Basics for SaaS",
      date: "2025-07-16",
      excerpt: "How tokens, accessible components and theming reduce delivery time.",
      url: "#",
      tags: ["Design System", "Frontend", "Accessibility"]
    },
    {
      title: "Choosing the Right Data Layer",
      date: "2025-06-05",
      excerpt: "Postgres, Redis and object storage patterns we use in production.",
      url: "#",
      tags: ["Database", "Backend", "Scalability"]
    }
  ],

  // Pricing — hidden numbers; CTA labels come from TRANSLATIONS
  pricing: [
    {
      plan: "Discovery Sprint",
      price: "Custom quote",
      bestFor: "Great to start",
      features: [
        "Goals & scope",
        "UX flows + API contracts",
        "Roadmap with cost & timeline"
      ],
      cta: "Request Quote"
    },
    {
      plan: "Fixed-Price MVP",
      price: "Custom quote",
      bestFor: "Ship fast",
      features: ["Scoped features", "Weekly demos", "Launch support"],
      cta: "Request Quote"
    },
    {
      plan: "Dedicated Squad",
      price: "Custom quote",
      bestFor: "Scale",
      features: ["Full-time engineers", "Flexible backlog", "SLAs & on-call"],
      cta: "Request Quote"
    }
  ],

  testimonials: [
    {
      author: "M. Kaya — Founder, Delta Retail",
      quote:
        "They shipped on time, communicated clearly, and the quality was great."
    },
    {
      author: "S. Demir — CTO, Orion Logistics",
      quote:
        "The new backend/API simplified our roadmap and reduced incidents."
    }
  ],

  faq: [
    {
      q: "Do you take maintenance work?",
      a: "Yes. We handle ongoing improvements, bug fixes, and performance work alongside new features."
    },
    {
      q: "How do we start fastest?",
      a: "A 1–2 week Discovery Sprint. We align goals, define the MVP, and provide timeline/cost with clickable UX flows."
    },
    {
      q: "What stacks do you support?",
      a: "HTML/CSS/JS for FE; Node/Express or Python/FastAPI for APIs; Postgres/Redis/S3; plus iOS (Swift) and Android (Kotlin)."
    },
    {
      q: "Do you offer SLAs?",
      a: "On dedicated squads we provide SLAs, on-call coverage, and incident response playbooks."
    }
  ]
};

// ===== UI strings (EN/TR) =====
window.TRANSLATIONS = {
  en: {
    nav: {
      metrics: "Metrics",
      clients: "Clients",
      projects: "Projects",
      stack: "Tech Stack",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Get in touch"
    },
    hero: {
      kicker: "Design • Build • Launch",
      titlePrefix: "Full-Stack",
      titleGradient: "Web",
      titleSuffix: "Mobile & Backend",
      lead:
        "We’re a growing product team delivering end-to-end software — modern websites, iOS/Android apps, and reliable backends with clean APIs.",
      cta1: "Start a Project",
      cta2: "See Projects"
    },
    sections: {
      metrics: "Proof we deliver",
      servicesTitle: "What we do",
      servicesSub:
        "Product delivery end-to-end: web, mobile, backend, and cloud.",
      clients: "Clients",
      projects: "Selected Projects",
      stackTitle: "Tech we use",
      stackSub: "Modern, proven, maintainable — without vendor lock-in.",
      pricing: "Engagement Models",
      testimonials: "What partners say",
      process: "How we work",
      faq: "FAQ",
      contactTitle: "Let’s build together",
      contactSub:
        "Tell us about your web, mobile, or backend needs. We’ll reply fast.",
      blog: "Blog & Updates"
    },
    services: {
      webTitle: "Web Platforms",
      webDesc: "Modern, responsive sites and dashboards with accessible UX.",
      webLi2: "Dashboards, portals, admin panels",
      webLi3: "SSR or static builds",
      mobTitle: "Mobile Apps",
      mobDesc: "Native iOS & Android with secure auth and offline-first data.",
      mobLi2: "Push notifications & analytics",
      mobLi3: "Store publishing & crash reports",
      backTitle: "Backend & APIs",
      backDesc: "Clean architecture, observability, and robust integrations.",
      backLi3: "Auth, roles, audit logs",
      cloudTitle: "Cloud & DevOps",
      cloudDesc:
        "CI/CD, environments, monitoring, and cost/reliability baselines.",
      cloudLi3: "Metrics & alerts"
    },
    steps: [
      { b: "Discovery", p: "Goals, constraints, success metrics." },
      { b: "Design", p: "UX flows, API contracts, roadmap." },
      { b: "Build", p: "Short iterations; working software weekly." },
      { b: "Test", p: "Automation, performance, and security." },
      { b: "Launch", p: "Production rollout, monitoring, playbooks." },
      { b: "Scale", p: "KPIs, A/Bs, perf/cost tuning." }
    ],
    pricingCtas: [
      { plan: "Discovery Sprint", label: "Request Quote" },
      { plan: "Fixed-Price MVP", label: "Request Quote" },
      { plan: "Dedicated Squad", label: "Request Quote" }
    ],
    form: {
      name: "Your name",
      email: "Email",
      company: "Company (optional)",
      message: "Your project / idea",
      send: "Send",
      sending: "Sending...",
      thanks: "Thanks! We will get back to you shortly."
    }
  },

  tr: {
    nav: {
      metrics: "Metrikler",
      clients: "Müşteriler",
      projects: "Projeler",
      stack: "Teknoloji",
      pricing: "Fiyatlandırma",
      faq: "SSS",
      contact: "İletişim"
    },
    hero: {
      kicker: "Tasarım • Geliştir • Yayına Al",
      titlePrefix: "Tam Yığın",
      titleGradient: "Web",
      titleSuffix: "Mobil & Backend",
      lead:
        "Modern web siteleri, iOS/Android uygulamaları ve güvenilir API’lerle uçtan uca yazılım geliştiriyoruz.",
      cta1: "Proje Başlat",
      cta2: "Projeleri Gör"
    },
    sections: {
      metrics: "Teslim gücümüz",
      servicesTitle: "Ne yapıyoruz",
      servicesSub: "Uçtan uca teslim: web, mobil, backend ve bulut.",
      clients: "Müşteriler",
      projects: "Seçili Projeler",
      stackTitle: "Kullandığımız Teknolojiler",
      stackSub: "Modern, kanıtlanmış ve sürdürülebilir — vendor bağımsız.",
      pricing: "Çalışma Modelleri",
      testimonials: "İş ortaklarımız ne diyor",
      process: "Nasıl çalışıyoruz",
      faq: "SSS",
      contactTitle: "Birlikte geliştirelim",
      contactSub:
        "Web, mobil veya backend ihtiyacınızı anlatın. Hızlı dönüş yaparız.",
      blog: "Blog & Güncellemeler"
    },
    services: {
      webTitle: "Web Platformları",
      webDesc: "Erişilebilir UX ile modern, duyarlı siteler ve paneller.",
      webLi2: "Paneller, portallar, yönetim ekranları",
      webLi3: "SSR veya statik yayın",
      mobTitle: "Mobil Uygulamalar",
      mobDesc: "Güvenli kimlik doğrulama ve offline destekli iOS & Android.",
      mobLi2: "Bildirimler & analitik",
      mobLi3: "Store yayınlama & crash raporları",
      backTitle: "Backend & API’ler",
      backDesc: "Temiz mimari, gözlemlenebilirlik ve güçlü entegrasyonlar.",
      backLi3: "Yetkilendirme, roller, denetim kayıtları",
      cloudTitle: "Bulut & DevOps",
      cloudDesc: "CI/CD, ortamlar, izleme ve maliyet/güvenilirlik bazları.",
      cloudLi3: "Metrikler & uyarılar"
    },
    steps: [
      { b: "Keşif", p: "Hedefler, kısıtlar, başarı ölçütleri." },
      { b: "Tasarım", p: "UX akışları, API kontratları, yol haritası." },
      { b: "Geliştirme", p: "Kısa iterasyonlar; haftalık çalışan yazılım." },
      { b: "Test", p: "Otomasyon, performans ve güvenlik." },
      { b: "Yayın", p: "Prod dağıtım, izleme, playbook’lar." },
      { b: "Büyütme", p: "KPI’lar, A/B, performans/maliyet ayarı." }
    ],
    pricingCtas: [
      { plan: "Keşif Sprinti", label: "Teklif İste" },
      { plan: "Sabit Fiyatlı MVP", label: "Teklif İste" },
      { plan: "Adanmış Ekip", label: "Teklif İste" }
    ],
    form: {
      name: "Adınız",
      email: "E-posta",
      company: "Şirket (opsiyonel)",
      message: "Proje / Fikir",
      send: "Gönder",
      sending: "Gönderiliyor...",
      thanks: "Teşekkürler! En kısa sürede dönüş yapacağız."
    }
  }
};

// Default language
window.LANG = "en";