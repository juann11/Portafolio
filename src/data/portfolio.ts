export const profile = {
  name: "Juan José Ospina",
  shortName: "Juan Ospina",
  role: "Ingeniero de Software · Web · Móvil · Datos · IA aplicada",
  tagline:
    "Resuelvo operación real con software: sistemas web, apps móviles, APIs con IA/OCR, datos y automatización. Del levantamiento al despliegue, con estructura que se puede mantener.",
  frentes: ["Sistemas web", "Apps móviles", "APIs + OCR/IA", "Datos y reportes", "Automatización"],
  location: "Medellín, Colombia",
  education: "Ingeniería de Sistemas · UPB Medellín",
  email: "juanjoospina2018@gmail.com",
  github: "https://github.com/juann11",
  linkedin: "https://www.linkedin.com/in/juan-jos%C3%A9-ospina-a5b771212",
  whatsapp: "https://wa.me/573019543555",
  availability: "Abierto a proyectos y posiciones de desarrollo",
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: "Full-Stack" | "Frontend" | "Sistemas" | "Backend" | "Móvil";
  github: string;
  featured?: boolean;
  highlights: string[];
  impact: string;
  cover: string;
  story: { label: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "gfac",
    title: "GFAC · Gestión de Facturas",
    subtitle: "API productiva + OCR + frontend React",
    description:
      "Sistema para digitalizar y automatizar facturación en PYMES: autenticación JWT, control de acceso por roles en 3 niveles, extracción automática de datos con OCR y dashboard financiero con reportes.",
    story: [
      { label: "Problema", text: "la facturación manual en PYMES consume horas y genera errores." },
      { label: "Decisión", text: "API async en FastAPI + SQLAlchemy 2.0 sobre Postgres, auth JWT con bcrypt y RBAC de 3 niveles con visibilidad filtrada a nivel de consulta. Carga de foto, PDF o DOCX con extracción Tesseract OCR + regex y pre-relleno revisable por humanos." },
      { label: "Estructura", text: "frontend React con dashboard por estados y filtro por proveedor, Docker Compose (API + DB + Nginx) y suite de ~84 pruebas." },
      { label: "Resultado", text: "facturación digitalizada de punta a punta, con suite de pruebas como evidencia." },
    ],
    tech: ["Python", "FastAPI", "Postgres 17", "React 18", "Tesseract OCR", "Docker", "JWT + RBAC"],
    category: "Full-Stack",
    github: "https://github.com/Emanuel684/gestion_de_facturas_gfac",
    featured: true,
    highlights: [
      "RBAC de 3 niveles con filtrado a nivel de consulta SQL",
      "OCR multi-formato con pre-relleno revisable",
      "Vencimientos automáticos por job (pendiente → vencida)",
      "Estados por organización: Kanban + elegibilidad",
      "~84 pruebas: auth, CRUD, permisos, upload, OCR",
    ],
    impact: "Facturación digitalizada de punta a punta, con evidencia testeada",
    cover: "from-[#0ea5e9] via-[#1e3a8a] to-[#060913]",
  },
  {
    slug: "helpdesk-upb",
    title: "Helpdesk UPB",
    subtitle: "Mesa de ayuda · tickets, SLA y KPIs",
    description:
      "Sistema de mesa de ayuda para centralizar y dar seguimiento a incidentes de soporte: tickets con prioridades y SLA automático, 3 roles de usuario, paneles de agente y administrador con métricas en tiempo real.",
    story: [
      { label: "Problema", text: "los incidentes de soporte se pierden entre chats y correos, sin responsables ni tiempos claros." },
      { label: "Decisión", text: "sistema de tickets con 3 roles (usuario, agente, administrador), cálculo automático de SLA por prioridad (crítica 2h, alta 8h, media 24h, baja 72h) y reportes con KPIs: por estado, por prioridad y cumplimiento de SLA." },
      { label: "Estructura", text: "frontend React + Vite + Tailwind (login, dashboard, paneles de agente y admin), backend Node + Express con JWT y sesión persistente, datos en Supabase/Postgres, gráficas con Recharts. Desarrollado con Scrum en sprints de 2 semanas." },
      { label: "Resultado", text: "soporte trazable con responsables, tiempos y comentarios por ticket." },
    ],
    tech: ["React + Vite", "Node + Express", "Supabase", "JWT", "Recharts", "Scrum"],
    category: "Sistemas",
    github: "https://github.com/juann11/helpdesk-upb",
    featured: true,
    highlights: [
      "SLA automático según prioridad del ticket",
      "3 roles con permisos diferenciados",
      "Panel admin con métricas en tiempo real",
      "Comentarios y trazabilidad por ticket",
    ],
    impact: "Soporte ordenado y medible en vez de chats sueltos",
    cover: "from-[#c8f04a] via-[#14532d] to-[#060913]",
  },
  {
    slug: "sipe-nativa",
    title: "SIPE · App Nativa",
    subtitle: "App Android · vida académica offline",
    description:
      "App nativa para organizar la vida académica: horario, tareas, notas con promedio ponderado y rachas de estudio. Funciona 100% sin internet, con datos en el dispositivo.",
    story: [
      { label: "Problema", text: "la vida académica vive en papeles y chats sueltos: horarios, entregas y notas sin un solo lugar." },
      { label: "Decisión", text: "app nativa en Kotlin + Jetpack Compose con arquitectura MVVM (ui / domain / data), datos locales en Room + DataStore sin backend y gamificación con rachas, niveles y mascotas para sostener el hábito." },
      { label: "Estructura", text: "agenda del día, calendario mensual, tareas con filtros, horario con profesores y salones, planificador con promedio ponderado; lógica de rachas como código puro con tests unitarios; wireframes en Figma y guía de publicación a Play Store." },
      { label: "Resultado", text: "app instalable y usable desde el primer día, con ruta a tienda documentada." },
    ],
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Material 3", "Offline-First"],
    category: "Móvil",
    github: "https://github.com/juann11/App_Nativa_SIPE",
    featured: true,
    highlights: [
      "100% offline: Room + DataStore, sin backend",
      "MVVM con capas ui / domain / data",
      "Rachas y niveles con tests unitarios",
      "Notas con peso porcentual y promedio",
    ],
    impact: "Toda la vida académica en una app que no necesita internet",
    cover: "from-[#8b7bff] via-[#4c1d95] to-[#060913]",
  },
  {
    slug: "football-maestro",
    title: "Football Maestro",
    subtitle: "Trivia + minijuegos · NestJS + React",
    description:
      "Plataforma de trivia y minijuegos de fútbol: 10 minijuegos, reto diario, noticias, tienda con créditos y panel administrativo. API modular y frontend de 21 pantallas.",
    story: [
      { label: "Problema", text: "un juego web con usuarios, créditos, noticias y administración necesita backend serio, no un prototipo." },
      { label: "Decisión", text: "monolito modular en NestJS + PostgreSQL (auth, users, games, credits, news, admin), login con Google y correo con recuperación, despliegue separado: frontend en Vercel, API en Render, datos en Supabase." },
      { label: "Estructura", text: "10 minijuegos + reto diario, tienda e insignias, panel admin, 21 pantallas en React + Vite + Tailwind, migraciones + seed idempotentes, pruebas unitarias y e2e, documentos de diseño en rama dedicada." },
      { label: "Resultado", text: "juego completo y desplegable con datos reales y administración." },
    ],
    tech: ["NestJS", "PostgreSQL", "React + Vite", "Docker", "Vercel + Render", "OAuth Google"],
    category: "Full-Stack",
    github: "https://github.com/Z3rks/Football-Maestro",
    highlights: [
      "Monolito modular: 6 dominios separados",
      "10 minijuegos + reto diario + tienda",
      "Auth con Google y recuperación por correo",
      "Deploy en 3 servicios con mismo dominio",
    ],
    impact: "Juego completo en equipo, con arquitectura de producto real",
    cover: "from-[#fb7185] via-[#7c2d12] to-[#060913]",
  },
  {
    slug: "check-stock",
    title: "Check Stock",
    subtitle: "Sistema de gestión de inventario",
    description:
      "Sistema completo de inventario con operación offline, módulos de productos, movimientos y reportes. Arquitectura SPA con persistencia local y cero dependencia de infraestructura.",
    story: [
      { label: "Problema", text: "un negocio pequeño necesita control de inventario sin pagar servidores ni depender de internet." },
      { label: "Decisión", text: "sistema offline-first con toda la lógica en cliente y modelo de datos normalizado en localStorage, organizado por dominios: inventario, movimientos y métricas." },
      { label: "Estructura", text: "navegación SPA sin recargas, validaciones y estados consistentes, reportes calculados desde movimientos reales." },
      { label: "Resultado", text: "sistema usable en tienda/bodega desde el primer día, con ruta de migración a base central." },
    ],
    tech: ["JavaScript", "SPA", "SCSS", "Modelo de datos local", "Offline-First"],
    category: "Full-Stack",
    github: "https://github.com/juann11/App_Hibrida_Check_Stock",
    featured: true,
    highlights: [
      "Levantamiento por dominios: productos, movimientos, métricas",
      "Integridad de datos sin backend: validaciones y estados",
      "Reportes calculados desde movimientos reales",
      "Ruta de evolución definida hacia Postgres/Supabase",
    ],
    impact: "Sistema operable sin infraestructura, listo para escalar a multi-sede",
    cover: "from-[#57e6ff] via-[#0e7490] to-[#060913]",
  },
];

export const archiveRepos = [
  { name: "Cartas · Next.js", url: "https://github.com/juann11/cartas", demo: "https://cartas-virid.vercel.app", note: "App Router + deploy continuo" },
  { name: "IngS Web Platform", url: "https://github.com/juann11/Ingenieria_softtt", demo: "https://ings-two.vercel.app", note: "Requerimientos → despliegue" },
  { name: "Front Lab", url: "https://github.com/juann11/Front", demo: "", note: "Patrones de interfaz reutilizables" },
  { name: "Cartass v2", url: "https://github.com/juann11/cartass", demo: "", note: "Refactor y evolución controlada" },
  { name: "Control de Acceso · Java", url: "https://github.com/juann11/Ingenier-a-Software", demo: "", note: "Reglas de negocio + POO" },
];

export const skills = [
  { group: "Frontend y Móvil", items: ["Next.js", "React + Vite", "TypeScript", "Tailwind", "Kotlin", "Jetpack Compose", "Figma"] },
  { group: "Backend y Datos", items: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "Postgres", "Supabase", "Firebase", "Room", "JWT + RBAC"] },
  { group: "Calidad y Entrega", items: ["Docker", "Vercel", "Render", "Git + GitHub", "Tests", "Scrum", "Trello"] },
  { group: "Integración e IA", items: ["APIs REST", "OAuth Google", "Tesseract OCR", "Recharts", "n8n", "Webhooks"] },
];

const ICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
export const skillIcons: Record<string, { icon: string; invert?: boolean }> = {
  "Next.js": { icon: `${ICON_CDN}/nextjs/nextjs-original.svg`, invert: true },
  "React + Vite": { icon: `${ICON_CDN}/react/react-original.svg` },
  TypeScript: { icon: `${ICON_CDN}/typescript/typescript-original.svg` },
  Tailwind: { icon: `${ICON_CDN}/tailwindcss/tailwindcss-original.svg` },
  Kotlin: { icon: `${ICON_CDN}/kotlin/kotlin-original.svg` },
  "Jetpack Compose": { icon: `${ICON_CDN}/jetpackcompose/jetpackcompose-original.svg` },
  Figma: { icon: `${ICON_CDN}/figma/figma-original.svg` },
  "Node.js": { icon: `${ICON_CDN}/nodejs/nodejs-original.svg` },
  Express: { icon: `${ICON_CDN}/express/express-original.svg`, invert: true },
  NestJS: { icon: `${ICON_CDN}/nestjs/nestjs-original.svg` },
  Python: { icon: `${ICON_CDN}/python/python-original.svg` },
  FastAPI: { icon: `${ICON_CDN}/fastapi/fastapi-original.svg` },
  Postgres: { icon: `${ICON_CDN}/postgresql/postgresql-original.svg` },
  Supabase: { icon: `${ICON_CDN}/supabase/supabase-original.svg` },
  Firebase: { icon: `${ICON_CDN}/firebase/firebase-plain.svg` },
  Docker: { icon: `${ICON_CDN}/docker/docker-original.svg` },
  Vercel: { icon: `${ICON_CDN}/vercel/vercel-original.svg`, invert: true },
  "Git + GitHub": { icon: `${ICON_CDN}/github/github-original.svg`, invert: true },
  Trello: { icon: `${ICON_CDN}/trello/trello-plain.svg` },
};

export const services = [
  {
    icon: "Globe",
    title: "Sistemas web a medida",
    desc: "Del requerimiento al despliegue: alcance cerrado, arquitectura definida, datos bien modelados y entrega navegable. Sin improvisación.",
    tags: ["Alcance", "Arquitectura", "Deploy"],
  },
  {
    icon: "Package",
    title: "Sistemas internos y operativos",
    desc: "Inventarios, control y reportes que funcionan en la operación real, incluso sin internet, con ruta de crecimiento a multiusuario.",
    tags: ["Offline-First", "Reportes", "Operación"],
  },
  {
    icon: "Bot",
    title: "Automatización e integración",
    desc: "Conecto tus herramientas (formularios, WhatsApp, hojas, CRM) con flujos automáticos y datos centralizados. Menos trabajo manual.",
    tags: ["n8n", "APIs", "Datos"],
  },
  {
    icon: "Wrench",
    title: "Orden y evolución de sistemas",
    desc: "Tomo tu sistema actual, lo audito, corrijo estructura y rendimiento, y lo dejo documentado para que cualquiera lo mantenga.",
    tags: ["Auditoría", "Refactor"],
  },
];

export const method = [
  ["01 · Entiendo", "Qué necesita el negocio, qué está fuera del alcance y qué define que el proyecto quedó bien."],
  ["02 · Diseño", "Arquitectura, datos y flujos antes del código. Decisiones explícitas, no accidentes."],
  ["03 · Construyo", "Módulos con responsabilidad clara, validaciones y estados consistentes. Avances verificables."],
  ["04 · Entrego", "Despliegue, documentación y transferencia. El sistema debe sobrevivir sin mí."],
];

export const privateCases = [
  {
    slug: "bastion-core",
    title: "Bastion Core",
    subtitle: "Núcleo y sistema base · acceso restringido",
    description:
      "Núcleo compartido del ecosistema: base de estilos, tokens, componentes y criterios de estructura para que varios proyectos construyan sobre lo mismo sin divergir.",
    tech: ["Design System", "CSS", "Componentes base", "Estándares"],
    role: "Definición del núcleo, tokens y reglas de extensión",
    note: "Núcleo interno. Puedo mostrar la metodología y un sample sanitizado.",
  },
  {
    slug: "moviles-taller",
    title: "Apps Móviles · Taller y curso",
    subtitle: "Dos proyectos de aplicaciones móviles",
    description:
      "Aplicaciones móviles con navegación, consumo de APIs, manejo de estados y persistencia. Enfoque en arquitectura móvil: capas, errores y experiencia offline.",
    tech: ["Móvil", "Consumo de API", "Navegación", "Persistencia"],
    role: "Arquitectura de pantallas, datos y manejo de errores",
    note: "Proyectos de formación con estándar de entrega profesional.",
  },
];

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
export const techMarquee = [
  { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
  { name: "React", icon: `${CDN}/react/react-original.svg` },
  { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
  { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: "Python", icon: `${CDN}/python/python-original.svg` },
  { name: "Postgres", icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: "Supabase", icon: `${CDN}/supabase/supabase-original.svg` },
  { name: "Firebase", icon: `${CDN}/firebase/firebase-plain.svg` },
  { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
  { name: "Git", icon: `${CDN}/git/git-original.svg` },
  { name: "GitHub", icon: `${CDN}/github/github-original.svg`, invert: true },
  { name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
  { name: "Trello", icon: `${CDN}/trello/trello-plain.svg` },
  { name: "n8n", icon: "" },
];

export const stackMarquee = techMarquee.map((t) => t.name);

export const stats = [
  { value: "+19", label: "Proyectos en Git" },
  { value: "B2B", label: "Sistemas para empresas" },
  { value: "E2E", label: "Alcance → deploy" },
  { value: "+8", label: "Tecnologías en producción" },
];
