import type { LucideIcon } from "lucide-react";
import { Handshake, Scale, Users, Home, FileText, HeartHandshake, ShieldCheck } from "lucide-react";

export type Subtopic = {
  title: string;
  text: string;
};

export type CardSection = {
  icon: LucideIcon;
  title: string;
  text: string;
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
  /** Image shown next to the intro paragraph on cardSections pages.
   * Defaults to equipo-consulta.jpg when not set. */
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
    title: "Guarda y Custodia en Las Palmas de Gran Canaria",
    metaTitle: "Guarda y Custodia en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal en procesos de guarda y custodia de menores en Las Palmas de Gran Canaria. Te ayudamos a proteger el bienestar de tus hijos en cada etapa.",
    intro: [
      "Decidir cómo se organizará el cuidado de los hijos tras una separación es, casi siempre, la parte más delicada del proceso. Una **abogada especializada en guarda y custodia** puede ayudarte a plantear una propuesta realista y a defenderla si no hay acuerdo con la otra parte.",
      "En Curia Abogados trabajamos para que la solución final tenga siempre presente el bienestar de los menores, buscando acuerdos estables y, cuando es necesario, defendiendo tu posición ante el juzgado en Las Palmas de Gran Canaria.",
    ],
    sectionTitle: "Modalidades de custodia",
    subtopics: [
      {
        title: "Custodia individual",
        text: "Uno de los progenitores asume el día a día de los hijos, mientras que el otro mantiene un **régimen de visitas y comunicación** regular.",
      },
      {
        title: "Custodia compartida",
        text: "Ambos progenitores se turnan el cuidado de los hijos en periodos alternos y participan de forma **igualitaria en las decisiones** que les afectan.",
      },
      {
        title: "Custodia atribuida a un tercero",
        text: "En circunstancias excepcionales, cuando ninguno de los progenitores puede garantizar el bienestar del menor, la custodia puede recaer en un familiar cercano u otra figura designada por el juzgado.",
      },
    ],
    processParagraphs: [
      "No existe una fórmula única: lo que funciona para una familia puede no ser lo más adecuado para otra. Por eso, antes de proponer un modelo de custodia, es importante analizar la rutina de los menores, la disponibilidad de cada progenitor y la relación entre ambos.",
      "Cuando hay acuerdo, el proceso suele ser más ágil. Cuando no lo hay, **el respaldo de un abogado con experiencia en derecho de familia** resulta clave para presentar tu propuesta de la manera más sólida posible ante el juzgado.",
      "Te acompañamos en cada paso, desde la primera conversación hasta la resolución final, cuidando que el proceso sea lo menos traumático posible para ti y para tus hijos.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO PARA LA CUSTODIA DE TUS HIJOS",
    advantages: [
      "Una propuesta de custodia adaptada a la realidad de tu familia.",
      "Asesoramiento sobre cómo comunicarte y actuar durante el proceso.",
      "Representación ante el juzgado si no hay acuerdo con la otra parte.",
      "Un acompañamiento centrado en minimizar el impacto emocional en los menores.",
    ],
  },

  despidos: {
    slug: "despidos",
    navLabel: "Despidos",
    title: "Despidos en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Despidos en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Te asesoramos si has sido despedido en Las Palmas de Gran Canaria. Revisamos tu caso y te acompañamos para defender tus derechos como trabajador afectado.",
    intro: [
      "Recibir una carta de despido genera muchas dudas: si es justificado, si la indemnización es correcta o si merece la pena impugnarlo. Un **abogado especializado en despidos** puede revisar tu situación y decirte con claridad qué opciones tienes.",
      "Desde Curia Abogados ayudamos a trabajadores en Las Palmas de Gran Canaria a entender su situación laboral y a actuar dentro de los plazos adecuados, ya sea para negociar una salida más favorable o para impugnar un despido que consideras injusto.",
    ],
    sectionTitle: "Tipos de despido",
    subtopics: [
      {
        title: "Despido disciplinario",
        text: "La empresa alega un incumplimiento grave por parte del trabajador. Es importante revisar si los motivos alegados están **bien fundamentados y documentados**.",
      },
      {
        title: "Despido por causas objetivas",
        text: "Se produce por motivos organizativos, técnicos o económicos de la empresa. Suele conllevar un preaviso y una indemnización, cuyo cálculo conviene **revisar cuidadosamente**.",
      },
      {
        title: "Despido colectivo",
        text: "Afecta a varios trabajadores a la vez dentro de un proceso regulado que la empresa debe seguir con especial cuidado en cuanto a plazos y procedimiento.",
      },
    ],
    processParagraphs: [
      "Si te encuentras ante un despido, lo primero es no firmar nada a la ligera: puedes solicitar una copia de la carta y, si no estás de acuerdo, dejar constancia de ello antes de firmar. **Guardar toda la documentación de tu relación laboral** te ayudará a que podamos valorar tu caso con la mayor información posible.",
      "El plazo para actuar tras un despido es limitado, así que cuanto antes recibas asesoramiento, más opciones tendrás disponibles. El proceso puede variar según el tipo de despido y las circunstancias de tu empresa, por lo que cada caso requiere un análisis propio.",
      "Nuestro objetivo es que entiendas tu situación con claridad y que, si decides impugnar el despido, cuentes con una defensa sólida desde el primer momento.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO PARA TU DESPIDO",
    advantages: [
      "Revisión de la carta de despido y de la indemnización ofrecida.",
      "Asesoramiento sobre los plazos para impugnar el despido.",
      "Negociación con la empresa cuando existe margen para un acuerdo.",
      "Representación en la vía judicial si es necesario.",
    ],
  },

  "robos-o-hurtos": {
    slug: "robos-o-hurtos",
    navLabel: "Robos o Hurtos",
    title: "Robos y Hurtos en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Robos y Hurtos en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Defensa y asesoramiento legal en casos de robos y hurtos en Las Palmas de Gran Canaria, tanto si eres víctima como si necesitas representación penal experta.",
    intro: [
      "Ser víctima de un robo o un hurto genera inseguridad, además de las gestiones legales que hay que afrontar después. Un **abogado especializado en delitos contra el patrimonio** puede ayudarte a presentar la denuncia correctamente y a defender tus intereses a lo largo del proceso.",
      "En Curia Abogados atendemos casos de robo y hurto en Las Palmas de Gran Canaria, tanto para víctimas que buscan que se reconozcan sus derechos, como para personas que necesitan una defensa penal sólida.",
    ],
    sectionTitle: "Diferencias entre robo y hurto",
    subtopics: [
      {
        title: "Robo",
        text: "Implica el uso de **fuerza en las cosas o violencia e intimidación** sobre las personas para apoderarse de un bien ajeno.",
      },
      {
        title: "Hurto",
        text: "Se produce el apoderamiento de un bien ajeno **sin necesidad de fuerza ni violencia**, lo que a efectos legales lo diferencia claramente del robo.",
      },
    ],
    processParagraphs: [
      "Si has sido víctima de un robo o hurto, es recomendable denunciar cuanto antes y **recopilar cualquier prueba disponible**: testigos, grabaciones, objetos afectados o cualquier documento que acredite la propiedad de lo sustraído.",
      "El proceso puede variar según la gravedad de los hechos y las circunstancias del caso, por lo que es importante contar con asesoramiento desde el principio para saber qué esperar en cada fase, ya sea como víctima o como persona investigada.",
      "Nuestro equipo te acompaña tanto en la fase de denuncia como durante todo el procedimiento penal, cuidando que tus derechos queden protegidos en todo momento.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO EN CASOS DE ROBO O HURTO",
    advantages: [
      "Ayuda para presentar la denuncia con toda la información necesaria.",
      "Asesoramiento sobre qué pruebas conviene reunir y conservar.",
      "Representación como acusación particular o como defensa, según tu situación.",
      "Acompañamiento durante todo el procedimiento penal.",
    ],
  },

  estafas: {
    slug: "estafas",
    navLabel: "Estafas",
    title: "Estafas en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Estafas en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal si has sido víctima de una estafa en Las Palmas de Gran Canaria. Te ayudamos a reunir pruebas y a defender tus derechos ante la justicia.",
    intro: [
      "Una estafa se produce cuando alguien utiliza el engaño para conseguir que otra persona actúe en su propio perjuicio, normalmente de tipo económico. Puede darse en una compraventa, en una transferencia o a través de internet. Un **abogado especializado en estafas** puede ayudarte a valorar si lo ocurrido tiene encaje penal y cómo proceder.",
      "En Curia Abogados asesoramos a personas y empresas en Las Palmas de Gran Canaria que han sido víctimas de una estafa, ayudándoles a reunir la documentación necesaria y a defender sus intereses ante la justicia.",
    ],
    sectionTitle: "Formas habituales de estafa",
    subtopics: [
      {
        title: "Estafas comerciales",
        text: "Se producen en el marco de una compraventa o relación comercial, cuando una de las partes **engaña deliberadamente a la otra** sobre el producto, servicio o condiciones acordadas.",
      },
      {
        title: "Estafas informáticas",
        text: "Cada vez más frecuentes, se aprovechan de plataformas digitales y medios de pago electrónicos para realizar operaciones **sin el consentimiento real del afectado**.",
      },
      {
        title: "Estafas con medios de pago",
        text: "Consisten en el uso indebido de tarjetas u otros instrumentos de pago de una persona sin su autorización.",
      },
    ],
    processParagraphs: [
      "Si crees que has sido víctima de una estafa, lo primero es **conservar toda la documentación** relacionada: mensajes, correos, justificantes de pago o cualquier comunicación con la otra parte. Cuanta más información aportes, más fácil será valorar tu caso.",
      "El proceso puede variar mucho según el tipo de estafa y las circunstancias en las que se produjo, por lo que es recomendable contar con asesoramiento desde el principio antes de dar cualquier paso legal.",
      "Nuestro equipo te ayuda a entender si tu caso tiene recorrido legal y te acompaña en todo el proceso, ya sea presentando la denuncia o representándote si el caso llega a juicio.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO SI HAS SUFRIDO UNA ESTAFA",
    advantages: [
      "Valoración inicial de si los hechos pueden constituir un delito de estafa.",
      "Asesoramiento sobre qué pruebas y documentación reunir.",
      "Representación como acusación particular durante el procedimiento.",
      "Acompañamiento cercano durante todo el proceso.",
    ],
  },

  lesiones: {
    slug: "lesiones",
    navLabel: "Lesiones",
    title: "Lesiones en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Lesiones en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Defendemos tus derechos si has sufrido lesiones por negligencia o agresión en Las Palmas de Gran Canaria. Asesoramiento legal cercano, profesional y humano.",
    intro: [
      "Cuando una persona sufre un daño físico por la acción o negligencia de otra, es importante contar con asesoramiento para entender qué opciones legales existen y cómo defender tus derechos. Un **abogado especializado en lesiones** puede ayudarte a valorar tu situación desde el primer momento.",
      "En Curia Abogados acompañamos a víctimas de lesiones en Las Palmas de Gran Canaria, ya sea por accidentes, agresiones o negligencias, ayudándoles a reunir la documentación necesaria y a defender sus intereses.",
    ],
    sectionTitle: "Aspectos a tener en cuenta",
    subtopics: [
      {
        title: "Lesiones por negligencia",
        text: "Se producen cuando el daño es consecuencia de una **falta de cuidado o diligencia** por parte de un tercero, sin que exista intención de causar el daño.",
      },
      {
        title: "Lesiones intencionadas",
        text: "Se producen cuando el daño es causado de forma **deliberada** por otra persona, lo que suele conllevar una respuesta penal más severa.",
      },
    ],
    processParagraphs: [
      "Si has sufrido una lesión, es importante que acudas cuanto antes a un servicio médico para que quede constancia del daño sufrido, y que **conserves todos los informes y partes médicos** relacionados con tu recuperación.",
      "El proceso puede variar según el origen de la lesión y su gravedad, por lo que cada caso requiere un análisis individual antes de decidir cómo proceder legalmente.",
      "Nuestro trabajo es ayudarte a entender tus opciones y a defender tu posición, ya sea negociando con la otra parte o representándote ante el juzgado si es necesario.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO SI HAS SUFRIDO LESIONES",
    advantages: [
      "Asesoramiento sobre qué informes y pruebas médicas conservar.",
      "Valoración de tu situación desde una perspectiva legal clara.",
      "Representación ante el juzgado para defender tus derechos.",
      "Acompañamiento durante todo tu proceso de recuperación legal.",
    ],
  },

  "areas-de-derecho": {
    slug: "areas-de-derecho",
    navLabel: "Áreas de Derecho",
    title: "Áreas de Derecho en Las Palmas de Gran Canaria",
    metaTitle: "Áreas de Derecho en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Conoce las áreas de derecho en las que trabajamos en Las Palmas de Gran Canaria: civil, penal, laboral y mercantil, con trato cercano y personalizado.",
    intro: [
      "El derecho abarca muchos ámbitos distintos de la vida cotidiana, y no siempre es fácil saber a qué especialista acudir cuando surge un problema legal. En Curia Abogados trabajamos varias **áreas de derecho** para poder ofrecerte una atención completa, sin tener que buscar un despacho distinto para cada situación.",
      "Nuestro equipo en Las Palmas de Gran Canaria combina experiencia en distintas ramas del derecho para darte una visión completa de tu caso, sea cual sea su naturaleza.",
    ],
    sectionTitle: "Nuestras áreas de trabajo",
    subtopics: [
      {
        title: "Derecho civil",
        text: "Abarca conflictos entre particulares como **divorcios, herencias, desahucios o incumplimientos de contratos**.",
      },
      {
        title: "Derecho penal",
        text: "Incluye la defensa o acusación en delitos como estafas, lesiones, robos o hurtos, siempre **velando por tus derechos** en cada fase del proceso.",
      },
      {
        title: "Derecho laboral",
        text: "Relacionado con conflictos entre empresa y trabajador, como **despidos o reclamaciones de cantidad**.",
      },
      {
        title: "Derecho mercantil",
        text: "Centrado en las relaciones y conflictos entre empresas, así como en cuestiones societarias y contractuales.",
      },
    ],
    processParagraphs: [
      "Cuando un problema legal no encaja claramente en una sola categoría, contar con un despacho que trabaje distintas áreas de derecho facilita mucho las cosas: **no tienes que explicar tu caso varias veces** ni coordinar a distintos profesionales por tu cuenta.",
      "El primer paso siempre es entender bien tu situación, para poder orientarte hacia la vía legal más adecuada, ya sea civil, penal, laboral o mercantil.",
      "Nuestro objetivo es que, sea cual sea tu problema, tengas un único punto de contacto de confianza que te acompañe de principio a fin.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN DESPACHO MULTIDISCIPLINAR",
    advantages: [
      "Un mismo equipo puede atender distintos aspectos de un mismo problema.",
      "Visión completa de tu situación legal, sin puntos ciegos entre áreas.",
      "Ahorro de tiempo al no tener que buscar varios despachos distintos.",
      "Trato cercano y de confianza durante todo el proceso.",
    ],
  },

  "administradores-de-fincas": {
    slug: "administradores-de-fincas",
    navLabel: "Administradores de Fincas",
    title: "Administradores de Fincas en Las Palmas de Gran Canaria",
    metaTitle: "Administradores de Fincas en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Gestión profesional de comunidades de propietarios en Las Palmas de Gran Canaria: cuentas, morosidad, juntas y asesoramiento legal en un mismo despacho.",
    intro: [
      "Gestionar una comunidad de propietarios implica mucho más que cobrar las cuotas: hay cuentas que llevar, proveedores que coordinar, juntas que convocar y, en ocasiones, conflictos entre vecinos que resolver. Contar con un **administrador de fincas profesional** ayuda a que todo funcione con orden y transparencia.",
      "En Curia Abogados ofrecemos un servicio de administración de fincas en Las Palmas de Gran Canaria con la ventaja añadida de contar con respaldo jurídico propio para cualquier incidencia legal que surja en la comunidad.",
    ],
    sectionTitle: "Qué incluye nuestra gestión",
    subtopics: [
      {
        title: "Gestión económica",
        text: "Llevanza de cuentas, cobro de cuotas y **gestión de la morosidad** de la comunidad.",
      },
      {
        title: "Gestión administrativa",
        text: "Convocatoria de juntas, custodia de documentación y coordinación de proveedores y personal de la comunidad.",
      },
      {
        title: "Asesoramiento legal",
        text: "Al formar parte de un despacho de abogados, cualquier conflicto vecinal o incidencia legal se gestiona **sin necesidad de acudir a un tercero**.",
      },
    ],
    processParagraphs: [
      "Cada comunidad tiene sus propias particularidades: número de vecinos, estado del edificio, servicios contratados. Por eso, antes de asumir la gestión, dedicamos tiempo a **entender cómo funciona tu comunidad** y qué necesita para funcionar mejor.",
      "El día a día de una comunidad puede generar situaciones muy distintas, desde una incidencia técnica urgente hasta un vecino que no paga sus cuotas. Nuestro trabajo es anticiparnos a esos problemas y resolverlos con agilidad.",
      "Al final, nuestro objetivo es que la comunidad funcione con la máxima transparencia y que los propietarios puedan despreocuparse de la gestión del día a día.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON CURIA ABOGADOS PARA TU COMUNIDAD",
    advantages: [
      "Gestión económica y administrativa transparente y ordenada.",
      "Respaldo legal propio para cualquier conflicto vecinal o incidencia.",
      "Gestión ágil de la morosidad dentro del propio despacho.",
      "Un único equipo de confianza para toda la gestión de tu comunidad.",
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
