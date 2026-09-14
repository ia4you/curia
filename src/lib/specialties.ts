import type { LucideIcon } from "lucide-react";
import {
  Handshake,
  Gavel,
  Briefcase,
  Scale,
  Users,
  Home,
  FileText,
  HeartHandshake,
  ShieldCheck,
  User,
  UsersRound,
  Calendar,
  FileWarning,
  FileCheck,
  Building2,
  Clock,
  AlertTriangle,
  Search,
  Shield,
  Landmark,
  ClipboardCheck,
  UserX,
  Laptop,
  ShoppingBag,
  CreditCard,
  AlertCircle,
  Car,
  Stethoscope,
  Calculator,
  Receipt,
  FileSpreadsheet,
  Wrench,
  KeyRound,
} from "lucide-react";

export type Subtopic = {
  title: string;
  text: string;
};

export type CardSection = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type PracticeArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export type SpecialtyContent = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** The following three are only used by the long-form layout (no cardSections). */
  sectionTitle?: string;
  subtopics?: Subtopic[];
  processParagraphs?: string[];
  advantagesTitle: string;
  advantages: string[];
  /** Optional short-card layout (icon + title + text) used instead of the
   * long-form sectionTitle/subtopics/processParagraphs blocks when present. */
  cardSections?: CardSection[];
  /** Optional grouped layout (icon + title + description + item checklist),
   * used for areas-de-derecho. Takes precedence over cardSections when present. */
  practiceAreas?: PracticeArea[];
  /** Image shown next to the intro paragraph on cardSections/practiceAreas pages.
   * Defaults to equipo-consulta.webp when not set. */
  introImage?: string;
  introImageAlt?: string;
};

export const specialties: Record<string, SpecialtyContent> = {
  divorcio: {
    slug: "divorcio",
    navLabel: "Divorcio",
    title: "Abogados especializados en divorcio",
    metaTitle: "Abogados de Divorcio en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal en divorcios de mutuo acuerdo y contenciosos en Las Palmas de Gran Canaria. Más de 15 años ayudando a familias a resolver su separación con cercanía y seguridad jurídica.",
    intro: [
      "Un divorcio implica decisiones que van a marcar tu vida durante años: la custodia y manutención de los hijos, el reparto de bienes, el futuro de la vivienda familiar. Contar con una abogada especializada en divorcios no solo te da seguridad jurídica, también te ayuda a atravesar un proceso que suele ser emocionalmente difícil, con alguien que gestiona los plazos y la documentación por ti. En Curia Abogados acompañamos a nuestros clientes en Las Palmas de Gran Canaria en cada tipo de divorcio, cuidando que el proceso sea lo más ágil y claro posible.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO PARA TU DIVORCIO",
    advantages: [
      "Orientación clara sobre qué documentación necesitas y cómo prepararla.",
      "Negociación del convenio regulador velando por tus intereses y los de tus hijos.",
      "Representación en el juzgado si el proceso se convierte en contencioso.",
      "Acompañamiento cercano en un momento personal difícil.",
    ],
    cardSections: [
      {
        icon: Handshake,
        title: "Divorcio de mutuo acuerdo",
        text: "Cuando ambos cónyuges están de acuerdo, basta con 3 meses de matrimonio y un convenio regulador. Es el proceso más rápido y económico.",
      },
      {
        icon: Scale,
        title: "Divorcio contencioso",
        text: "Sin acuerdo entre las partes, cualquier cónyuge puede solicitar el divorcio igualmente, sin alegar causa. Es el juez quien resuelve custodia y bienes.",
      },
      {
        icon: Users,
        title: "Custodia de los hijos",
        text: "Te asesoramos en todo lo relativo a la guarda, custodia y régimen de visitas, priorizando siempre el bienestar de los menores.",
      },
      {
        icon: Home,
        title: "Reparto de bienes",
        text: "Gestionamos el convenio regulador y la liquidación del patrimonio común de forma clara y justa para ambas partes.",
      },
      {
        icon: FileText,
        title: "Coordinación de plazos y documentación",
        text: "Nos encargamos de preparar y presentar toda la documentación ante el juzgado, agilizando cada paso del proceso.",
      },
      {
        icon: HeartHandshake,
        title: "Acompañamiento cercano",
        text: "Sabemos que es un momento emocionalmente difícil. Te acompañamos con trato honesto y cercano en cada decisión.",
      },
      {
        icon: ShieldCheck,
        title: "Defensa de tus intereses",
        text: "Ya sea de mutuo acuerdo o contencioso, velamos por tus intereses y los de tus hijos en cada fase del proceso.",
      },
    ],
  },

  "guarda-y-custodia": {
    slug: "guarda-y-custodia",
    navLabel: "Guarda y Custodia",
    title: "Abogados especializados en guarda y custodia",
    metaTitle: "Abogados de Guarda y Custodia en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal en custodia de hijos: individual, compartida o distribuida. Más de 15 años ayudando a familias en Las Palmas de Gran Canaria.",
    intro: [
      "La custodia de los hijos es una de las decisiones más importantes tras la ruptura de una pareja. Cuando hay acuerdo entre ambos progenitores, el proceso suele ser sencillo; cuando no lo hay, es el juez quien debe decidir qué régimen protege mejor el bienestar de los menores. Contar con un abogado especializado en derecho de familia te ayuda a entender qué opciones existen y a defender tu relación con tus hijos durante todo el proceso.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO PARA LA CUSTODIA DE TUS HIJOS",
    advantages: [
      "Una propuesta de custodia adaptada a la realidad de tu familia.",
      "Asesoramiento sobre cómo comunicarte y actuar durante el proceso.",
      "Representación ante el juzgado si no hay acuerdo con la otra parte.",
      "Un acompañamiento centrado en minimizar el impacto emocional en los menores.",
    ],
    cardSections: [
      {
        icon: User,
        title: "Custodia individual",
        text: "Uno de los progenitores convive con los hijos y se encarga del día a día, manteniendo el otro un régimen de visitas y comunicación.",
      },
      {
        icon: Users,
        title: "Custodia compartida",
        text: "Ambos progenitores se alternan periodos de convivencia con los hijos y comparten las decisiones sobre su cuidado.",
      },
      {
        icon: UsersRound,
        title: "Custodia distribuida",
        text: "Cuando hay varios hijos, en casos justificados el juez puede repartir la convivencia entre ambos progenitores, cuidando siempre no separar a los hermanos.",
      },
      {
        icon: ShieldCheck,
        title: "Custodia a cargo de terceros",
        text: "En situaciones excepcionales, la custodia puede atribuirse a un familiar cercano cuando el bienestar del menor lo requiere.",
      },
      {
        icon: Calendar,
        title: "Régimen de visitas",
        text: "Te asesoramos para establecer un régimen de visitas claro que proteja el vínculo con tus hijos.",
      },
      {
        icon: HeartHandshake,
        title: "Acompañamiento legal",
        text: "Te guiamos en cada paso, desde el convenio regulador hasta la representación ante el juzgado si es necesario.",
      },
      {
        icon: Scale,
        title: "Defensa de tus derechos",
        text: "Conocemos el derecho de familia y sabemos cómo presentar tu caso para proteger tu relación con tus hijos.",
      },
    ],
  },

  despidos: {
    slug: "despidos",
    navLabel: "Despidos",
    title: "Abogados especializados en despidos",
    metaTitle: "Abogados Laboralistas: Despidos en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal ante despidos disciplinarios, objetivos o colectivos. Defendemos tus derechos como trabajador en Las Palmas de Gran Canaria.",
    intro: [
      "Sufrir un despido no es fácil, y no todos son justificados. Conocer el tipo de despido que has recibido y actuar dentro de los plazos legales es clave para defender tus derechos. En Curia Abogados te ayudamos a entender tu situación y a decidir los siguientes pasos con seguridad.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO PARA TU DESPIDO",
    advantages: [
      "Revisión de la carta de despido y de la indemnización ofrecida.",
      "Asesoramiento sobre los plazos para impugnar el despido.",
      "Negociación con la empresa cuando existe margen para un acuerdo.",
      "Representación en la vía judicial si es necesario.",
    ],
    cardSections: [
      {
        icon: FileWarning,
        title: "Despido disciplinario",
        text: "Se produce cuando la empresa alega un incumplimiento grave por parte del trabajador. Es importante revisar si está bien justificado.",
      },
      {
        icon: Building2,
        title: "Despido objetivo",
        text: "Motivado por causas económicas, técnicas o de organización de la empresa, con derecho a preaviso o indemnización según el caso.",
      },
      {
        icon: Users,
        title: "Despido colectivo (ERE)",
        text: "Afecta a varios trabajadores de la empresa y sigue un procedimiento específico que conviene revisar con detalle.",
      },
      {
        icon: FileCheck,
        title: "Revisión del finiquito",
        text: "Comprobamos que la indemnización y el finiquito recibidos correspondan realmente a lo que te corresponde.",
      },
      {
        icon: Clock,
        title: "Plazos para reclamar",
        text: "Los plazos para impugnar un despido son limitados. Te ayudamos a actuar a tiempo, sin firmar nada de forma precipitada.",
      },
      {
        icon: Handshake,
        title: "Representación ante el SMAC",
        text: "Te acompañamos en el proceso de mediación y conciliación previo a la vía judicial.",
      },
      {
        icon: Scale,
        title: "Defensa de tus derechos laborales",
        text: "Analizamos tu caso y te representamos para conseguir el mejor resultado posible.",
      },
    ],
  },

  "robos-o-hurtos": {
    slug: "robos-o-hurtos",
    navLabel: "Robos o Hurtos",
    title: "Abogados especializados en robos y hurtos",
    metaTitle: "Abogados Penalistas: Robos y Hurtos en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Defensa legal en casos de robo y hurto. Te orientamos sobre tus derechos como víctima o acusado en Las Palmas de Gran Canaria.",
    intro: [
      "Robo y hurto no son lo mismo ante la ley: la diferencia está en si hubo fuerza o intimidación. Sea cual sea tu situación, contar con asesoramiento legal desde el primer momento es clave para proteger tus derechos, tanto si has sido víctima como si te enfrentas a una acusación.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO EN CASOS DE ROBO O HURTO",
    advantages: [
      "Ayuda para presentar la denuncia con toda la información necesaria.",
      "Asesoramiento sobre qué pruebas conviene reunir y conservar.",
      "Representación como acusación particular o como defensa, según tu situación.",
      "Acompañamiento durante todo el procedimiento penal.",
    ],
    cardSections: [
      {
        icon: AlertTriangle,
        title: "Qué es un robo",
        text: "Implica el uso de fuerza o intimidación para apoderarse de algo ajeno. Las consecuencias legales dependen de las circunstancias de cada caso.",
      },
      {
        icon: Search,
        title: "Qué es un hurto",
        text: "A diferencia del robo, no implica fuerza ni intimidación, aunque sigue siendo un delito contra la propiedad.",
      },
      {
        icon: FileText,
        title: "Si has sido víctima",
        text: "Te ayudamos a interponer la denuncia correctamente y a reunir las pruebas necesarias para tu caso.",
      },
      {
        icon: Shield,
        title: "Si te enfrentas a una acusación",
        text: "Analizamos tu situación y preparamos tu defensa desde el primer momento.",
      },
      {
        icon: Landmark,
        title: "Asistencia en comisaría y juzgado",
        text: "Te acompañamos en cada trámite, desde la denuncia hasta el juicio si llega a producirse.",
      },
      {
        icon: ClipboardCheck,
        title: "Valoración de pruebas",
        text: "Revisamos qué pruebas son relevantes y cómo presentarlas de forma efectiva ante el juez.",
      },
      {
        icon: Scale,
        title: "Defensa de tus intereses",
        text: "Ya seas víctima o parte acusada, velamos por que se respeten tus derechos en todo el proceso.",
      },
    ],
  },

  estafas: {
    slug: "estafas",
    navLabel: "Estafas",
    title: "Abogados especializados en estafas",
    metaTitle: "Abogados Penalistas: Estafas en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal en casos de estafa y apropiación indebida. Te ayudamos a defender tus derechos en Las Palmas de Gran Canaria.",
    intro: [
      "Una estafa se produce cuando alguien te engaña para que actúes en tu propio perjuicio o el de un tercero. Es uno de los delitos más habituales, y puede presentarse de muchas formas: desde un engaño tradicional hasta un fraude informático o comercial. En Curia Abogados te ayudamos a entender tu situación y a actuar con seguridad.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO SI HAS SUFRIDO UNA ESTAFA",
    advantages: [
      "Valoración inicial de si los hechos pueden constituir un delito de estafa.",
      "Asesoramiento sobre qué pruebas y documentación reunir.",
      "Representación como acusación particular durante el procedimiento.",
      "Acompañamiento cercano durante todo el proceso.",
    ],
    cardSections: [
      {
        icon: UserX,
        title: "Estafas comunes",
        text: "Basadas en el engaño directo para conseguir que la víctima actúe en su propio perjuicio.",
      },
      {
        icon: Laptop,
        title: "Estafas informáticas",
        text: "Cada vez más frecuentes, implican el uso de medios digitales para acceder a fondos sin consentimiento.",
      },
      {
        icon: ShoppingBag,
        title: "Estafas comerciales",
        text: "Se dan cuando un vendedor engaña sobre las características reales de un producto o servicio.",
      },
      {
        icon: CreditCard,
        title: "Estafas con medios de pago",
        text: "El uso indebido de tarjetas u otros medios de pago ajenos también constituye una estafa.",
      },
      {
        icon: FileText,
        title: "Cómo actuar si has sido estafado",
        text: "Te ayudamos a reunir pruebas y a interponer la denuncia correspondiente cuanto antes.",
      },
      {
        icon: Search,
        title: "Valoración de tu caso",
        text: "Cada estafa es distinta; analizamos las circunstancias concretas de la tuya para orientarte correctamente.",
      },
      {
        icon: Scale,
        title: "Defensa de tus derechos",
        text: "Te representamos para intentar recuperar lo perdido y que el responsable asuma sus consecuencias legales.",
      },
    ],
  },

  lesiones: {
    slug: "lesiones",
    navLabel: "Lesiones",
    title: "Abogados especializados en lesiones",
    metaTitle: "Abogados en Casos de Lesiones en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Defendemos tus derechos si has sufrido lesiones por acción de un tercero. Asesoramiento legal en Las Palmas de Gran Canaria.",
    intro: [
      "Sufrir una lesión causada por otra persona, ya sea de forma intencionada o por imprudencia, afecta tu salud y tu día a día. La ley protege tu derecho a la integridad física, y contar con asesoramiento legal te ayuda a que el responsable asuma las consecuencias y a que recibas la compensación que te corresponde.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO SI HAS SUFRIDO LESIONES",
    advantages: [
      "Asesoramiento sobre qué informes y pruebas médicas conservar.",
      "Valoración de tu situación desde una perspectiva legal clara.",
      "Representación ante el juzgado para defender tus derechos.",
      "Acompañamiento durante todo tu proceso de recuperación legal.",
    ],
    cardSections: [
      {
        icon: AlertCircle,
        title: "Lesiones intencionadas",
        text: "Cuando el daño ha sido causado de forma deliberada por un tercero.",
      },
      {
        icon: Car,
        title: "Lesiones por imprudencia",
        text: "Se dan cuando el daño no fue intencionado pero sí resultado de un comportamiento negligente, por ejemplo en accidentes de tráfico.",
      },
      {
        icon: Stethoscope,
        title: "Asistencia médica y pruebas",
        text: "Te orientamos sobre cómo documentar correctamente tus lesiones para respaldar tu caso.",
      },
      {
        icon: FileText,
        title: "Reclamación de indemnización",
        text: "Te ayudamos a reclamar la compensación que te corresponde por el daño sufrido.",
      },
      {
        icon: Landmark,
        title: "Representación ante el juzgado",
        text: "Te acompañamos en todo el proceso legal, defendiendo tus derechos en cada fase.",
      },
      {
        icon: Search,
        title: "Valoración de tu caso",
        text: "Analizamos las circunstancias concretas de tu situación para orientarte con claridad.",
      },
      {
        icon: Scale,
        title: "Defensa de tus intereses",
        text: "Trabajamos para que el responsable de tus lesiones asuma las consecuencias legales que le correspondan.",
      },
    ],
  },

  "areas-de-derecho": {
    slug: "areas-de-derecho",
    navLabel: "Áreas de Derecho",
    title: "Áreas de derecho",
    metaTitle: "Áreas de Derecho en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Derecho penal, laboral, civil y mercantil en un único despacho en Las Palmas de Gran Canaria. Asesoramiento y representación legal especializada.",
    intro: [
      "El Derecho regula la convivencia en sociedad y se divide en ramas especializadas. En Curia Abogados contamos con profesionales especializados en las principales áreas del derecho, para ofrecerte un servicio completo y personalizado ante cualquier problema legal que se te presente en Las Palmas de Gran Canaria.",
    ],
    advantagesTitle: "POR QUÉ CONTAR CON NUESTROS SERVICIOS",
    advantages: [
      "Asesoramiento en un área del derecho tan extensa como cambiante.",
      "Representación que evita sanciones por desconocimiento legal.",
      "Un único despacho para necesidades legales muy distintas.",
      "Defensa de tus intereses en cada proceso.",
    ],
    practiceAreas: [
      {
        icon: Gavel,
        title: "Derecho Penal",
        description:
          "Te asesoramos y representamos ante cualquier conducta que la ley considere delictiva, con experiencia en asesoramiento, gestión y juicios.",
        items: [
          "Amenazas y coacciones",
          "Estafas",
          "Falsedad documental",
          "Apropiación indebida",
          "Impago de pensiones de alimentos",
          "Agresiones y abusos sexuales",
          "Acoso sexual",
          "Lesiones",
          "Delitos contra la propiedad intelectual e industrial",
          "Delitos informáticos",
          "Delitos contra la seguridad vial",
          "Calumnias e injurias",
          "Hurtos y robos",
          "Allanamiento de morada y usurpación",
          "Denuncias y querellas",
          "Asistencia a comisaría y juzgados",
          "Juicios rápidos y delitos leves",
        ],
      },
      {
        icon: Briefcase,
        title: "Derecho Laboral",
        description:
          "Protegemos los derechos y deberes entre empleador y trabajador, en todo tipo de conflictos laborales y prestaciones de la Seguridad Social.",
        items: [
          "Despidos",
          "Reclamaciones de cantidad",
          "Sanciones",
          "Modificación de condiciones de trabajo",
          "Vacaciones",
          "Clasificación profesional",
          "Movilidad geográfica",
          "Acoso laboral",
          "Incapacidad permanente",
          "Impugnación de alta médica",
          "Desempleo",
          "Jubilación",
          "Viudedad y orfandad",
        ],
      },
      {
        icon: Scale,
        title: "Derecho Civil",
        description:
          "Regulamos las relaciones entre personas para proteger sus derechos y bienes: familia, herencias, contratos y procedimientos bancarios.",
        items: [
          "Guarda y custodia",
          "Divorcios y separaciones",
          "Herencias y testamentos",
          "Redacción de contratos",
          "Incumplimientos contractuales",
          "Responsabilidad civil",
          "Desahucios",
          "Arrendamientos",
          "Accidentes de tráfico",
          "Cláusulas abusivas y gastos hipotecarios",
          "Reclamaciones de tarjetas revolving",
          "Ejecuciones hipotecarias",
          "Procedimientos monitorios",
        ],
      },
      {
        icon: Building2,
        title: "Derecho Mercantil",
        description:
          "Regulamos las actividades comerciales, contratos y actos de comercio, incluyendo concurso de acreedores y ley de segunda oportunidad.",
        items: ["Contratos mercantiles", "Concurso de acreedores", "Ley de Segunda Oportunidad", "Actos de comercio"],
      },
    ],
  },

  "administradores-de-fincas": {
    slug: "administradores-de-fincas",
    navLabel: "Administradores de Fincas",
    title: "Administradores de fincas",
    metaTitle: "Administradores de Fincas en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Gestión integral de comunidades de propietarios en Las Palmas de Gran Canaria: contabilidad, cuotas, morosidad y asesoría jurídica en un solo despacho.",
    intro: [
      "Gestionar una comunidad de propietarios implica mucho más que cobrar cuotas: contabilidad, obligaciones fiscales, mantenimiento, juntas de vecinos y, en ocasiones, conflictos que requieren respaldo legal. Como despacho de abogados, en Curia Abogados unimos la administración de fincas con la asesoría jurídica, para que tu comunidad esté en manos de un único equipo que conoce tanto la gestión diaria como la ley que la regula.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON CURIA ABOGADOS PARA TU COMUNIDAD",
    advantages: [
      "Gestión económica y administrativa transparente y ordenada.",
      "Respaldo legal propio para cualquier conflicto vecinal o incidencia.",
      "Gestión ágil de la morosidad dentro del propio despacho.",
      "Un único equipo de confianza para toda la gestión de tu comunidad.",
    ],
    cardSections: [
      {
        icon: Calculator,
        title: "Contabilidad y cuentas",
        text: "Llevanza de libros contables, gestión de cuentas bancarias y control de ingresos y gastos de la comunidad.",
      },
      {
        icon: Receipt,
        title: "Cuotas y morosidad",
        text: "Cobro de cuotas y gestión de impagos, iniciando si es necesario los procedimientos judiciales oportunos desde el propio despacho.",
      },
      {
        icon: FileSpreadsheet,
        title: "Obligaciones fiscales",
        text: "Nos encargamos de que tu comunidad cumpla con todas sus obligaciones fiscales en tiempo y forma.",
      },
      {
        icon: Wrench,
        title: "Personal y servicios",
        text: "Búsqueda de personal cualificado y gestión de los servicios que necesite el edificio, incluidas las urgencias.",
      },
      {
        icon: Users,
        title: "Juntas de propietarios",
        text: "Convocamos y organizamos las juntas ordinarias y extraordinarias, buscando la máxima participación vecinal.",
      },
      {
        icon: KeyRound,
        title: "Gestión documental y llaves",
        text: "Custodia de llaves de la comunidad y gestión de toda la documentación administrativa.",
      },
      {
        icon: Scale,
        title: "Asesoría jurídica integrada",
        text: "Al ser un despacho de abogados, resolvemos con respaldo legal cualquier incidencia o conflicto que surja en la comunidad.",
      },
      {
        icon: HeartHandshake,
        title: "Mediación de conflictos vecinales",
        text: "Te ayudamos a solucionar y mediar en los conflictos entre vecinos, manteniendo el buen funcionamiento de la comunidad.",
      },
    ],
  },

};

export const specialtySlugs = Object.keys(specialties);

export const dropdownSpecialties = [
  "divorcio",
  "guarda-y-custodia",
  "despidos",
  "robos-o-hurtos",
  "estafas",
  "lesiones",
].map((slug) => specialties[slug]);
