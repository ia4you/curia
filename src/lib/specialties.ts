import type { LucideIcon } from "lucide-react";
import { ShieldAlert, Briefcase, GraduationCap, Smartphone, FileCheck, HeartHandshake } from "lucide-react";

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
  sectionTitle: string;
  subtopics: Subtopic[];
  processParagraphs: string[];
  advantagesTitle: string;
  advantages: string[];
  /** Optional short-card layout (icon + title + text) used instead of the
   * long-form intro/subtopics/processParagraphs blocks when present. */
  cardSections?: CardSection[];
};

export const specialties: Record<string, SpecialtyContent> = {
  divorcio: {
    slug: "divorcio",
    navLabel: "Divorcio",
    title: "Divorcio en Las Palmas de Gran Canaria",
    metaTitle: "Divorcio en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Abogadas especializadas en divorcios de mutuo acuerdo y contenciosos en Las Palmas de Gran Canaria. Te acompañamos en cada etapa con trato cercano y directo.",
    intro: [
      "Afrontar un divorcio implica tomar decisiones que van a marcar el día a día de toda la familia: la custodia de los hijos, el reparto de bienes o el uso de la vivienda son solo algunos de los aspectos que hay que resolver. Contar con una **abogada especializada en divorcios** desde el primer momento ayuda a que el proceso avance con orden y con la tranquilidad de saber que tus intereses están protegidos.",
      "En Curia Abogados acompañamos a nuestros clientes en Las Palmas de Gran Canaria en todo tipo de procesos de separación y divorcio, adaptando la estrategia a la situación particular de cada familia y buscando siempre la solución más ágil posible.",
    ],
    sectionTitle: "Tipos de divorcio",
    subtopics: [
      {
        title: "Divorcio de mutuo acuerdo",
        text: "Se produce cuando ambos cónyuges están de acuerdo en poner fin al matrimonio y en las condiciones que regularán la nueva situación familiar. Suele ser la vía **más rápida y menos desgastante emocionalmente**, siempre que exista un buen convenio regulador.",
      },
      {
        title: "Divorcio contencioso",
        text: "Cuando no hay acuerdo entre las partes, es un juez quien debe resolver las cuestiones pendientes. Es un proceso que **requiere más tiempo y una defensa sólida**, por lo que contar con representación legal experimentada es especialmente importante.",
      },
    ],
    processParagraphs: [
      "Cada divorcio es distinto, pero casi todos comparten preguntas similares: qué pasará con la custodia de los hijos, cómo se repartirán los bienes comunes y quién se quedará en la vivienda familiar. Antes de dar cualquier paso, es recomendable **reunir la documentación relevante** y tener una primera conversación con tu abogada para entender qué opciones tienes.",
      "El proceso puede variar según cada caso, especialmente si hay hijos menores o patrimonio complejo de por medio. Nuestro trabajo es explicarte con claridad qué esperar en cada fase, para que tomes decisiones informadas y sin más estrés del necesario.",
      "Buscamos siempre la vía que mejor proteja tanto tu situación personal como la de tus hijos, priorizando acuerdos cuando es posible y defendiendo tu posición con firmeza cuando no lo es.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO PARA TU DIVORCIO",
    advantages: [
      "Orientación clara sobre qué documentación necesitas y cómo prepararla.",
      "Negociación del convenio regulador velando por tus intereses y los de tus hijos.",
      "Representación en el juzgado si el proceso se convierte en contencioso.",
      "Acompañamiento cercano en un momento personal difícil.",
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

  acoso: {
    slug: "acoso",
    navLabel: "Acoso",
    title: "Acoso en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Acoso en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal en casos de acoso laboral, escolar o personal en Las Palmas de Gran Canaria. Te ayudamos a defender tus derechos con cercanía y discreción.",
    intro: [
      "El acoso puede darse en distintos ámbitos de la vida —en el trabajo, en el entorno escolar o en las relaciones personales— y en todos los casos supone una situación que afecta profundamente al bienestar de quien lo sufre. Un **abogado especializado en casos de acoso** puede ayudarte a entender si lo que estás viviendo tiene una vía legal y cómo actuar.",
      "En Curia Abogados atendemos a personas en Las Palmas de Gran Canaria que se encuentran en esta situación, ofreciendo un acompañamiento cercano desde el primer momento.",
    ],
    sectionTitle: "Ámbitos donde puede darse el acoso",
    subtopics: [
      {
        title: "Acoso laboral",
        text: "Se produce en el entorno de trabajo, a través de un **trato hostil y reiterado** que puede afectar tanto al desempeño como a la salud de quien lo sufre.",
      },
      {
        title: "Acoso escolar",
        text: "Afecta a menores en el entorno educativo y requiere una actuación coordinada entre familia, centro escolar y, si es necesario, asesoramiento legal.",
      },
      {
        title: "Otras formas de acoso",
        text: "Incluye situaciones de acoso en el entorno personal o a través de medios digitales, que también pueden tener **consecuencias legales**.",
      },
    ],
    processParagraphs: [
      "Si estás sufriendo una situación de acoso, es importante **documentar lo ocurrido** desde el primer momento: mensajes, correos, testigos o cualquier prueba que ayude a acreditar la situación.",
      "El proceso puede variar mucho según el ámbito en el que se produzca el acoso y la gravedad de los hechos, por lo que es recomendable contar con asesoramiento cuanto antes para saber qué pasos dar.",
      "Te acompañamos para que puedas actuar con seguridad, ya sea a través de la vía laboral, penal o civil, según corresponda a tu situación.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO EN CASOS DE ACOSO",
    advantages: [
      "Orientación sobre qué pruebas conviene reunir desde el principio.",
      "Valoración de las distintas vías legales disponibles en tu caso.",
      "Representación y defensa de tus derechos en cada fase del proceso.",
      "Acompañamiento cercano en una situación personalmente difícil.",
    ],
    cardSections: [
      {
        icon: ShieldAlert,
        title: "Qué se considera acoso",
        text: "Un trato hostil y reiterado que afecta al bienestar de una persona, ya sea en el trabajo, en el entorno escolar o en las relaciones personales.",
      },
      {
        icon: Briefcase,
        title: "Acoso laboral",
        text: "Trato hostil y reiterado en el entorno de trabajo que puede afectar tanto al desempeño como a la salud de quien lo sufre.",
      },
      {
        icon: GraduationCap,
        title: "Acoso escolar",
        text: "Afecta a menores en el entorno educativo y requiere una actuación coordinada entre familia, centro escolar y asesoramiento legal.",
      },
      {
        icon: Smartphone,
        title: "Otras formas de acoso",
        text: "Incluye el acoso en el entorno personal o a través de medios digitales, que también puede tener consecuencias legales.",
      },
      {
        icon: FileCheck,
        title: "Cómo actuar si lo sufres",
        text: "Documenta lo ocurrido desde el primer momento: mensajes, correos, testigos o cualquier prueba que ayude a acreditar la situación.",
      },
      {
        icon: HeartHandshake,
        title: "Qué hacemos por ti",
        text: "Te acompañamos desde el primer momento y te orientamos para actuar con seguridad, ya sea por la vía laboral, penal o civil.",
      },
    ],
  },

  desahucios: {
    slug: "desahucios",
    navLabel: "Desahucios",
    title: "Desahucios en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Desahucios en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Asesoramiento legal en procesos de desahucio en Las Palmas de Gran Canaria, tanto para propietarios como para inquilinos, con un trato cercano y directo.",
    intro: [
      "Un desahucio es un proceso que puede generar mucha tensión, tanto para el propietario que necesita recuperar su vivienda o local, como para el inquilino que se enfrenta a la posibilidad de perder su hogar. Un **abogado especializado en desahucios** puede ayudarte a entender el proceso y a defender tu posición, sea cual sea tu papel en él.",
      "En Curia Abogados asesoramos tanto a propietarios como a inquilinos en Las Palmas de Gran Canaria, buscando siempre la solución más rápida y menos conflictiva posible.",
    ],
    sectionTitle: "Situaciones habituales",
    subtopics: [
      {
        title: "Falta de pago de la renta",
        text: "Es la causa más frecuente de desahucio, cuando el inquilino **deja de abonar la renta** acordada en el contrato de arrendamiento.",
      },
      {
        title: "Finalización del contrato",
        text: "Se produce cuando el contrato de arrendamiento llega a su fin y el inquilino no abandona la vivienda o el local.",
      },
      {
        title: "Ocupación sin título",
        text: "Afecta a inmuebles ocupados sin el consentimiento del propietario, una situación que requiere una **actuación legal específica**.",
      },
    ],
    processParagraphs: [
      "Si eres propietario y te encuentras en esta situación, es importante **reunir toda la documentación** del contrato de arrendamiento y de los pagos realizados, para poder iniciar el proceso con la mayor solidez posible.",
      "Si eres inquilino, contar con asesoramiento cuanto antes te ayudará a entender tus opciones y los plazos con los que cuentas para responder a la situación.",
      "El proceso puede variar según las circunstancias del caso, por lo que es recomendable valorar tu situación concreta con un profesional antes de tomar cualquier decisión.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO EN UN DESAHUCIO",
    advantages: [
      "Asesoramiento adaptado según seas propietario o inquilino.",
      "Orientación sobre la documentación necesaria para iniciar o responder al proceso.",
      "Búsqueda de acuerdos que eviten un proceso judicial más largo.",
      "Representación legal durante todo el procedimiento.",
    ],
  },

  "violencia-de-genero": {
    slug: "violencia-de-genero",
    navLabel: "Violencia de Género",
    title: "Violencia de Género en Las Palmas de Gran Canaria",
    metaTitle: "Abogada de Violencia de Género en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Acompañamiento legal especializado en casos de violencia de género en Las Palmas de Gran Canaria. Atención cercana, confidencial y profesional en todo momento.",
    intro: [
      "La violencia de género es una situación que requiere una respuesta legal firme, pero también un acompañamiento humano y cercano. Si estás viviendo o has vivido esta situación, contar con una **abogada especializada en violencia de género** puede ayudarte a sentirte más segura y acompañada durante todo el proceso.",
      "En Curia Abogados atendemos a mujeres en Las Palmas de Gran Canaria que se encuentran en esta situación, ofreciendo asesoramiento confidencial desde el primer contacto.",
    ],
    sectionTitle: "Cómo podemos ayudarte",
    subtopics: [
      {
        title: "Denuncia y medidas de protección",
        text: "Te acompañamos en el proceso de denuncia y en la solicitud de **medidas de protección** que puedan corresponder a tu situación.",
      },
      {
        title: "Procedimiento penal",
        text: "Te representamos durante todo el procedimiento penal, velando por que tus derechos queden protegidos en cada fase.",
      },
      {
        title: "Aspectos civiles asociados",
        text: "Cuando hay hijos en común, también te asesoramos en cuestiones de custodia, régimen de visitas o uso de la vivienda familiar.",
      },
    ],
    processParagraphs: [
      "Dar el paso de denunciar no es fácil, y por eso es importante sentirte acompañada desde el primer momento. **Contar con la información adecuada** sobre tus derechos y las medidas de protección disponibles te ayudará a tomar decisiones con mayor seguridad.",
      "El proceso puede variar según cada situación particular, por lo que es fundamental que tu caso sea valorado de forma individual y con la máxima confidencialidad.",
      "Nuestro compromiso es ofrecerte un acompañamiento cercano y profesional en cada paso, tanto en el ámbito penal como en cualquier cuestión civil relacionada, como la custodia de los hijos.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UNA ABOGADA ESPECIALIZADA EN VIOLENCIA DE GÉNERO",
    advantages: [
      "Atención cercana, confidencial y sin juicios.",
      "Asesoramiento sobre las medidas de protección disponibles.",
      "Representación legal durante todo el procedimiento penal.",
      "Acompañamiento también en los aspectos civiles relacionados, como la custodia de los hijos.",
    ],
  },

  "incumplimientos-contractuales": {
    slug: "incumplimientos-contractuales",
    navLabel: "Incumplimientos Contractuales",
    title: "Incumplimientos Contractuales en Las Palmas de Gran Canaria",
    metaTitle:
      "Abogado de Incumplimientos Contractuales en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Reclamamos incumplimientos de contratos entre particulares y empresas en Las Palmas de Gran Canaria, con un asesoramiento legal claro, directo y efectivo.",
    intro: [
      "Cuando una de las partes de un contrato no cumple con lo acordado, la otra parte puede sufrir un perjuicio real, ya sea económico o de otro tipo. Un **abogado especializado en incumplimientos contractuales** puede ayudarte a valorar qué opciones tienes para reclamar lo que te corresponde.",
      "En Curia Abogados asesoramos a particulares y empresas en Las Palmas de Gran Canaria ante todo tipo de incumplimientos de contrato, buscando siempre la solución más eficaz para tus intereses.",
    ],
    sectionTitle: "Situaciones habituales",
    subtopics: [
      {
        title: "Incumplimiento total",
        text: "Una de las partes **no cumple en absoluto** con las obligaciones asumidas en el contrato.",
      },
      {
        title: "Cumplimiento defectuoso",
        text: "El contrato se cumple, pero no en los términos, plazos o condiciones de calidad **acordados originalmente**.",
      },
      {
        title: "Retraso en el cumplimiento",
        text: "Las obligaciones se cumplen, pero fuera del plazo pactado, generando un perjuicio para la otra parte.",
      },
    ],
    processParagraphs: [
      "Antes de reclamar, es importante **revisar bien el contrato** y reunir toda la documentación relacionada: comunicaciones, facturas, presupuestos o cualquier prueba del incumplimiento.",
      "En muchos casos, una reclamación extrajudicial bien planteada puede resolver la situación sin necesidad de acudir a juicio, lo que ahorra tiempo y costes a ambas partes.",
      "Cuando no es posible llegar a un acuerdo, te representamos para reclamar por la vía judicial, defendiendo tu posición con la documentación y los argumentos necesarios.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO ANTE UN INCUMPLIMIENTO CONTRACTUAL",
    advantages: [
      "Revisión detallada del contrato y de la documentación disponible.",
      "Intento de resolución extrajudicial antes de llegar a juicio.",
      "Reclamación judicial cuando no es posible un acuerdo.",
      "Defensa de tus intereses frente a particulares o empresas.",
    ],
  },

  "accidentes-de-trafico": {
    slug: "accidentes-de-trafico",
    navLabel: "Accidentes de Tráfico",
    title: "Accidentes de Tráfico en Las Palmas de Gran Canaria",
    metaTitle: "Abogado de Accidentes de Tráfico en Las Palmas de Gran Canaria | Curia Abogados",
    metaDescription:
      "Reclamamos los daños derivados de accidentes de tráfico en Las Palmas de Gran Canaria. Te ayudamos a obtener la indemnización justa que te corresponde.",
    intro: [
      "Un accidente de tráfico puede tener consecuencias físicas, materiales y económicas que conviene gestionar con el respaldo adecuado. Un **abogado especializado en accidentes de tráfico** puede ayudarte a reclamar frente a la compañía de seguros los daños que hayas sufrido.",
      "En Curia Abogados acompañamos a personas en Las Palmas de Gran Canaria que han sufrido un accidente de tráfico, ayudándoles a reclamar tanto los daños materiales como los personales.",
    ],
    sectionTitle: "Qué se puede reclamar",
    subtopics: [
      {
        title: "Daños materiales",
        text: "Incluyen los desperfectos en el vehículo y otros bienes afectados por el accidente.",
      },
      {
        title: "Daños personales",
        text: "Se refieren a las lesiones sufridas y su impacto en tu vida diaria, que deben quedar **debidamente acreditados** con informes médicos.",
      },
      {
        title: "Otros perjuicios",
        text: "En determinados casos también pueden reclamarse otros perjuicios derivados del accidente, según las circunstancias concretas.",
      },
    ],
    processParagraphs: [
      "Tras un accidente, es fundamental **acudir a un servicio médico** aunque los síntomas parezcan leves, y conservar todos los informes y partes de asistencia relacionados con el accidente.",
      "El proceso de reclamación puede variar según la compañía aseguradora y las circunstancias del accidente, por lo que conviene contar con asesoramiento antes de aceptar cualquier oferta de indemnización.",
      "Nuestro trabajo es revisar tu caso, reunir la documentación necesaria y negociar con la aseguradora para que la indemnización refleje el daño real que has sufrido.",
    ],
    advantagesTitle: "VENTAJAS DE CONTAR CON UN ABOGADO TRAS UN ACCIDENTE DE TRÁFICO",
    advantages: [
      "Revisión de tu caso y de la documentación médica y del accidente.",
      "Negociación con la compañía aseguradora en tu nombre.",
      "Defensa de tus intereses si la oferta de indemnización no es adecuada.",
      "Acompañamiento durante todo el proceso de recuperación y reclamación.",
    ],
  },
};

export const specialtySlugs = Object.keys(specialties);

export const dropdownSpecialties = [
  "accidentes-de-trafico",
  "acoso",
  "desahucios",
  "despidos",
  "divorcio",
  "estafas",
  "guarda-y-custodia",
  "incumplimientos-contractuales",
  "lesiones",
  "robos-o-hurtos",
  "violencia-de-genero",
].map((slug) => specialties[slug]);
