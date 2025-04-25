const ExperienceData = [
    {
      id: 1,
      jobtitle: "Desarrolladora Front-End",
      companyname: "Escala Pixel SAC",
      worktype: "Full-time",
      duration: "Abril 2024 - Marzo 2025",
      location: "Lima, Perú",
      responsibility: [
        `Implementé una solución hacia el módulo administrativo mejorando la interfaz de usuario.`,
        `Reduje errores de inserción de datos en el módulo de pagos.`,
        `Desarrollé nuevos módulos para la gestión del área de Marketing.`,
        `TECNOLOGÍAS APLICADAS: JavaScript, TypeScript, React JS, React Native, Redux, HTML, CSS, Docker, Jira, WebApi.
`,
      ],
    },
    {
      id: 2,
      jobtitle: "Desarrolladora Front-End",
      companyname: "Crivant S.A.C",
      worktype: "Full-time",
      duration: "Agosto 2023 - Febrero 2024",
      location: "Lima, Perú",
      responsibility: [
        `Diseñé la interfaz de usuario para un sistema de votación como PWA.`,
        `Implementé un módulo de boletas de pago en un sistema de recursos humanos.`,
        `Desarrollé un sistema de asistencia de personal bajo el patrón MVVM.`,
        `TECNOLOGÍAS APLICADAS: React JS, React Native, Redux, JavaScript, TypeScript, Git, GitHub, Docker, SonarQube.`,
      ],
    },
    {
      id: 3,
      jobtitle: "Desarrolladora Front-End",
      companyname: "TrinetSoft",
      worktype: "Full-time",
      duration: "Agosto 2022 - Junio 2023",
      location: "Lima, Perú",
      responsibility: [
        `Automatización del registro de asistencia mediante integración con sistema biométrico(huella dactilar).`,
        `Mejora de flujos internos del área de soporte técnico.`,
        `Desarrollo de módulos para un sistema de gestión de restaurantes.`,
        `TECNOLOGÍAS APLICADAS: Bootstrap, HTML, CSS, JavaScript, FullCalendar, WebApi.`,
      ],
    },
  ];
  
  const EducationData = [
    {
      name: "Universidad Tecnológica del Perú | Lima, Perú",
      status: "Desarrollo de Software",
      year: "Actualidad",
    },    
    {
      name: "Laboratoria | Lima, Perú",
      status: "Desarrollo Front-End",
      year: "Enero 2022 - Julio 2022",
    },
    {
      name: "SISE | Lima, Perú",
      status: "Software y Sistemas",
      year: "Enero 2021 - Marzo 2024",
    },
  ];
  
  const CertificationData = [
    {
      name: "Curso de React.js",
      source: "Platzi",
      date: "Expedición Abril 2025 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/11887-course/diploma/detalle/",
    },
    {
      name: "Curso de Fundamentos de JavaScript",
      source: "Platzi",
      date: "Expedición Abril 2025 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/10266-course/diploma/detalle/",
    },
    {
      name: "Reto Alexa Skill Mujeres en Tecnología",
      source: "Amazon Alexa Developers y Laboratoria",
      date: "Expedición Diciembre 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://drive.google.com/file/d/1ibGoU6WUf_L0yvZec7lihtj-Sg9K1LAg/view?usp=sharing",
    },
    {
      name: "Hackathon del Talent Fest LATAM 2022",
      source: "Laboratoria",
      date: "Expedición Septiembre 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://www.credential.net/cd5ce875-5955-4a64-a881-3bb75dc61235#acc.WcgkuBR8",
    },
    {
      name: "Curso de ECMAScript 6+",
      source: "Platzi",
      date: "Expedición Agosto 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/1815-course/diploma/detalle/",
    },
    {
      name: "Curso de Diseño para Developers",
      source: "Platzi",
      date: "Expedición Agosto 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/1906-course/diploma/detalle/",
    },
    {
      name: "Curso de Responsive Design: Maquetación Mobile First",
      source: "Platzi",
      date: "Expedición Agosto 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/2030-course/diploma/detalle/",
    },
    {
      name: "Curso Profesional de Git y GitHub",
      source: "Platzi",
      date: "Expedición Julio 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/1557-course/diploma/detalle/",
    },
    {
      name: "Curso Práctico de HTML y CSS",
      source: "Platzi",
      date: "Expedición Julio 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/1758-course/diploma/detalle/",
    },
    {
      name: "Curso de Ingles Básico A1 para Principiante",
      source: "Platzi",
      date: "Expedición Julio 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/3093-course/diploma/detalle/",
    },
    {
      name: "Fundamentos de Ingeniería de Software",
      source: "Platzi",
      date: "Expedición Junio 2022 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/1098-course/diploma/detalle/",
    },
    {
      name: "Curso Práctico de Frontend Developer",
      source: "Platzi",
      date: "Expedición Diciembre 2021 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/2477-course/diploma/detalle/",
    },
    {
      name: "Curso Práctico de JavaScript",
      source: "Platzi",
      date: "Expedición Diciembre 2021 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/2327-course/diploma/detalle/",
    },
    {
      name: "Curso Práctico de Maquetación en CSS",
      source: "Platzi",
      date: "Expedición Diciembre 2021 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/1744-course/diploma/detalle/",
    },
    {
      name: "Curso de Frontend Developer",
      source: "Platzi",
      date: "Expedición Diciembre 2021 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/2467-frontend-developer/diploma/detalle/",
    },
    {
      name: "Curso de Diseño Web con CSS Grid y Flexbox",
      source: "Platzi",
      date: "Expedición Diciembre 2021 · Sin fecha de vencimiento",
      creditUrl:
        "https://platzi.com/p/carmen.herrera.anicama/curso/2229-course/diploma/detalle/",
    },
  ];
  
  export { ExperienceData, EducationData, CertificationData };