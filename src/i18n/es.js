const es = {
  // NAV
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    location: 'Ubicación',
    events: 'Eventos',
    sacraments: 'Sacramentos',
    newsletter: 'Comunidad',
    members: 'Área de Miembros',
    membersSoon: 'Próximamente',
    toggleDark: 'Modo oscuro',
    toggleLight: 'Modo claro',
  },

  // HERO
  hero: {
    subtitle: 'Obispado Castrense de Colombia',
    title: 'Capellanía San Francisco de Asís',
    mission: '"Iglesia en estado permanente de Misión"',
    quotes: [
      '"El Señor te bendiga y te proteja." — Nm 6:24',
      '"Donde hay caridad y amor, allí está Dios." — San Francisco',
      '"Que la paz del Señor esté siempre con ustedes."',
      '"Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia." — Mt 5:7',
      '"Señor, hazme instrumento de tu paz." — Oración Franciscana',
    ],
    ctaPrimary: 'Conoce nuestra comunidad',
    ctaSecondary: 'Servicios y Sacramentos',
  },


  // PRAYER
  prayer: {
    label: 'Oración de San Francisco de Asís',
    verses: [
      'Señor, hazme un instrumento de tu paz.',
      'Donde haya odio, que yo lleve amor; donde haya ofensa, perdón; donde haya discordia, unión; donde haya duda, fe; donde haya error, verdad; donde haya desesperación, esperanza; donde haya tristeza, alegría; donde haya tinieblas, luz.',
      'Oh Maestro, que yo no busque tanto ser consolado como consolar; ser comprendido como comprender; ser amado como amar.',
      'Porque dando es como se recibe, perdonando es como se es perdonado, y muriendo es como se resucita a la vida eterna.',
    ],
    attribution: 'San Francisco de Asís',
  },

  // ABOUT
  about: {
    label: 'Sobre nosotros',
    title: 'Una comunidad forjada en fe',
    subtitle: 'Desde nuestros cimientos de ladrillo hasta el corazón de cada feligrés',
    history: [
      'La Capellanía San Francisco de Asís forma parte del Obispado Castrense de Colombia, institución que acompaña espiritualmente a las Fuerzas Militares y a la comunidad que las rodea.',
      'Inspirados en el carisma franciscano — la sencillez, el amor a la creación y el servicio al prójimo — nuestra comunidad vive la fe de manera cotidiana, celebrando los sacramentos, acompañando en los momentos de alegría y de dolor, y construyendo juntos el Reino de Dios.',
      'Nuestra capilla abierta es símbolo de una Iglesia que no cierra sus puertas: siempre en misión, siempre al servicio de quienes buscan a Dios.',
    ],
    spiritQuotes: [
      '"Empieza haciendo lo necesario, luego lo posible, y de repente estarás haciendo lo imposible." — San Francisco de Asís',
      '"La fe mueve montañas; el amor las convierte en jardines."',
      '"No hagas pequeños planes; no tienen el poder de agitar el corazón de los hombres."',
      '"Donde hay oscuridad, que yo lleve luz." — Oración Franciscana',
      '"La oración es la llave de la mañana y el cerrojo de la noche." — M. Gandhi',
    ],
    galleryLabel: 'Nuestra capilla',
    gallery: [
      { src: '/images/Altar.png', alt: 'Altar de la Capellanía San Francisco de Asís' },
      { src: '/images/incense-soldiers.jpg', alt: 'San Francisco de Asís — entrada de la capellanía' },
      { src: '/images/semana-santa.png', alt: 'Semana santa en la Capellanía' },
      { src: '/images/San-francisco.png', alt: 'San Francisco de Asís' },
      { src: '/images/entrada.png', alt: 'Entrada de la Capellanía' },
      { src: '/images/community-1.jpg', alt: 'Celebración comunitaria' },
      { src: '/images/mass-ceremony.jpg', alt: 'Celebración Semana Santa' },
    ],
  },

  // MAP
  map: {
    label: 'Visítanos',
    title: 'Encuéntranos',
    addressDisplay: 'Diagonal 57 #36-200, Batallón Gral. Pedro Nel Ospina, Bello, Antioquia',
    email: 'capellaniasanfrancisco@gmail.com',
    schedule: [
      { day: 'Miercoles', time: '8:00 am - 9:00 am' },
      { day: 'Domingo', time: '10:00 am - 11:00 am' },
    ],
    scheduleTitle: 'Horario de Misas',
    mapPlaceholder: 'Mapa de ubicación',
    schoolOfFaithTitle: 'Escuela de la Fe',
    schoolOfFaithSchedule: 'Sábados 10:00 AM - 11:00 AM',
  },

  // EVENTS
  events: {
    label: 'Agenda',
    title: 'Eventos',
    subtitle: 'Vive la fe junto a nuestra comunidad',
    tabUpcoming: 'Proximos',
    tabPast: 'Anteriores',
    tabCalendar: 'Calendario',
    noUpcoming: 'No hay eventos proximos registrados.',
    noPast: 'No hay eventos anteriores registrados.',
    upcoming: [
      { id: 1, title: 'San Francisco de Asis', date: '2026-10-04', time: '10:00 AM', description: 'Solemnidad del patron de nuestra capellania. Misa solemne en honor al Poverello de Asis.', category: 'Liturgia' },
      { id: 2, title: 'Todos los Santos', date: '2026-11-01', time: '10:00 AM', description: 'Solemnidad de Todos los Santos. Celebramos la comunion de los bienaventurados en la gloria.', category: 'Liturgia' },
      { id: 3, title: 'Cristo Rey', date: '2026-11-22', time: '10:00 AM', description: 'Solemnidad de Jesucristo Rey del Universo. Cierre del año liturgico ordinario.', category: 'Liturgia' },
      { id: 4, title: 'Inicio Novena de Aguinaldos', date: '2026-12-16', description: 'Inicio de la tradicional novena de Navidad colombiana. Nueve dias de oracion y alegria.', category: 'Liturgia' },
      { id: 5, title: 'Misa de Nochebuena', date: '2026-12-24', time: '8:00 PM', description: 'Vigilia de Navidad. Acogemos al Salvador del mundo con cantos y oracion comunitaria.', category: 'Liturgia' },
      { id: 6, title: 'Navidad del Señor', date: '2026-12-25', time: '10:00 AM', description: 'Solemnidad de la Natividad de Jesucristo. Misa solemne de Navidad.', category: 'Liturgia' },
      { id: 7, title: 'Fin de An¿ño', date: '2026-12-31', time: 'Por confirmar', description: 'Accion de gracias al Señor por el año que concluye..', category: 'Liturgia' },
    ],
    past: [
      { id: 10, title: 'Epifania del Señor', date: '2026-01-06', description: 'Solemnidad de la manifestacion de Jesus a los Magos de Oriente.', category: 'Liturgia' },
      { id: 11, title: 'Miercoles de Ceniza', date: '2026-02-18', description: 'Inicio de la Cuaresma. Imposicion de ceniza y llamado a la conversion.', category: 'Liturgia' },
      { id: 12, title: 'San Jose', date: '2026-03-19', description: 'Solemnidad de San Jose, esposo de la Virgen Maria y patrono de la Iglesia Universal.', category: 'Liturgia' },
      { id: 13, title: 'Domingo de Ramos', date: '2026-03-29', description: 'Inicio de la Semana Santa. Procesion de palmas y lectura del Evangelio de la Pasion.', category: 'Liturgia' },
      { id: 14, title: 'Jueves Santo', date: '2026-04-02', description: 'Cena del Senor. Lavatorio de pies y adoracion nocturna al Santisimo Sacramento.', category: 'Liturgia' },
      { id: 15, title: 'Viernes Santo', date: '2026-04-03', description: 'Pasion y Muerte del Senor. Via Crucis y adoracion a la Santa Cruz.', category: 'Liturgia' },
      { id: 16, title: 'Domingo de Resurreccion', date: '2026-04-05', description: 'Solemnidad de la Resurreccion. Vigilia Pascual y Misa de Gloria. Alleluia!', category: 'Liturgia' },
      { id: 17, title: 'Divina Misericordia', date: '2026-04-12', description: 'Segundo domingo de Pascua. Coronilla y devocion a la Divina Misericordia.', category: 'Liturgia' },
      { id: 18, title: 'Virgen de Fatima', date: '2026-05-13', description: 'Celebración en honor a Nuestra Señora de Fátima, recordando sus apariciones y su llamado a la oración, la conversión y la paz.', category: 'Liturgia' },
      { id: 19, title: 'Ascension del Señor', date: '2026-05-17', description: 'Solemnidad de la Ascension de Jesucristo al Padre.', category: 'Liturgia' },
      { id: 20, title: 'Pentecostes', date: '2026-05-24', description: 'Solemnidad de la venida del Espiritu Santo sobre los Apostoles.', category: 'Liturgia' },
      { id: 21, title: 'Corpus Christi', date: '2026-06-07', description: 'Solemnidad del Cuerpo y Sangre de Cristo. Procesion eucaristica por la capellania.', category: 'Liturgia' },
      { id: 22, title: 'Sagrado Corazon de Jesus', date: '2026-06-19', description: 'Solemnidad del Sagrado Corazon. Consagracion de la comunidad.', category: 'Liturgia' },
      { id: 23, title: 'San Pedro y San Pablo', date: '2026-06-29', description: 'Solemnidad de los Santos Apostoles Pedro y Pablo, pilares de la Iglesia.', category: 'Liturgia' },
    ],
    calendarFeasts: [
      { id: 30, title: 'Virgen del Carmen', date: '2026-07-16', time: 'Por confirmar', description: 'Patrona del Ejercito de Colombia. Misa especial para la comunidad militar.', category: 'Liturgia' },
      { id: 31, title: 'Transfiguracion del Senor', date: '2026-08-06', description: 'Fiesta de la Transfiguracion de Jesus en el monte Tabor.', category: 'Liturgia' },
      { id: 32, title: 'Asuncion de Maria', date: '2026-08-15', description: 'Solemnidad de la Asuncion de la Virgen Maria al cielo en cuerpo y alma.', category: 'Liturgia' },
      { id: 33, title: 'Natividad de la Virgen', date: '2026-09-08', description: 'Fiesta del nacimiento de la Santisima Virgen Maria.', category: 'Liturgia' },
      { id: 34, title: 'Virgen de las Mercedes', date: '2026-09-24', description: 'Patrona de las Fuerzas Militares de Colombia. Misa solemne castrense.', category: 'Liturgia' },
      { id: 35, title: 'Virgen del Rosario', date: '2026-10-07', description: 'Fiesta de Nuestra Senora del Rosario. Rezo comunitario del Santo Rosario.', category: 'Liturgia' },
      { id: 36, title: 'Fieles Difuntos', date: '2026-11-02', description: 'Conmemoracion de todos los fieles difuntos. Misa de sufragio por los fallecidos.', category: 'Liturgia' },
      { id: 37, title: 'Inmaculada Concepcion', date: '2026-12-08', description: 'Solemnidad de la Inmaculada Concepcion de la Virgen Maria.', category: 'Liturgia' },
    ],
    recurring: [
      { title: 'Santa Misa', time: '8:00 AM', description: 'Eucaristia de mitad de semana.', category: 'Liturgia', dayOfWeek: 3, startDate: '2026-01-01', endDate: '2026-12-31' },
      { title: 'Santa Misa Dominical', time: '10:00 AM', description: 'Eucaristia dominical. Todos son bienvenidos.', category: 'Liturgia', dayOfWeek: 0, startDate: '2026-01-01', endDate: '2026-12-31' },
      { title: 'Escuela de la Fe', time: '10:00 AM', description: 'Formacion en la fe para toda la comunidad.', category: 'Formacion', dayOfWeek: 6, startDate: '2026-07-11', endDate: '2026-11-28' },
    ],
    months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    days: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
    today: 'Hoy',
  },

  // SACRAMENTS
  sacraments: {
    label: 'Fe & Sacramentos',
    title: 'Sacramentos y Servicios',
    subtitle: 'Acompañamos los momentos más importantes de tu vida espiritual',
    formTitle: 'Solicitar un servicio',
    formSubtitle: 'Completa el formulario y nos comunicaremos contigo a la brevedad.',
    selectService: 'Selecciona el servicio',
    services: {
      bautismo: 'Bautismo',
      comunion: 'Primera Comunión',
      confirmacion: 'Confirmación',
      matrimonio: 'Matrimonio',
      asesoria: 'Asesoría Espiritual',
      otros: 'Otros',
    },
    fields: {
      nombre: 'Nombre',
      apellido: 'Apellido',
      email: 'Correo electrónico',
      telefono: 'Teléfono',
      mensaje: 'Mensaje adicional',
      submit: 'Enviar solicitud',
      // Bautismo
      esBautizado: '¿Usted ya está bautizado?',
      nombreBebe: 'Nombre del bebé / persona a bautizar',
      fechaTentativa: 'Fecha tentativa',
      // Comunión
      tieneBautismo: '¿Ha recibido el Bautismo?',
      // Confirmación
      tieneComunion: '¿Ha recibido Bautismo y Primera Comunión?',
      // Matrimonio
      ambosBautizados: '¿Ambos cónyuges están bautizados?',
      // Asesoría
      tipoAcompanamiento: 'Tipo de acompañamiento que busca',
      // Otros
      descripcionServicio: 'Describe el servicio que necesitas',
      si: 'Sí',
      no: 'No',
      placeholder: {
        nombre: 'Tu nombre',
        apellido: 'Tu apellido',
        email: 'correo@ejemplo.com',
        telefono: '+57 300 000 0000',
        mensaje: 'Cuéntanos algo más...',
        nombreBebe: 'Nombre completo',
        tipoAcompanamiento: 'Ej: duelo, discernimiento vocacional...',
        descripcionServicio: 'Describe qué necesitas...',
      },
    },
    successTitle: '¡Solicitud enviada!',
    successMsg: 'Hemos recibido tu solicitud. Un miembro de la capellanía se comunicará contigo pronto. Que Dios te bendiga.',
    successClose: 'Cerrar',
    requirementsTitle: 'Requisitos por Sacramento',
    requirementsSubtitle: 'Consulta los requisitos antes de presentar tu solicitud',
    requirements: [
      {
        id: 'bautismo',
        title: 'Bautismo',
        content: '<!Por confirmar>',
        contentDisplay: 'Los requisitos para el Bautismo serán publicados próximamente. Contáctanos para más información.',
      },
      {
        id: 'comunion',
        title: 'Primera Comunión',
        content: 'Por confirmar',
        contentDisplay: 'Los requisitos para la Primera Comunión serán publcados próximamente. Contáctanos para más información.',
      },
      {
        id: 'confirmacion',
        title: 'Confirmación',
        content: '<Por confirmar>',
        contentDisplay: 'Los requisitos para la Confirmación serán publicados próximamente. Contáctanos para más información.',
      },
      {
        id: 'matrimonio',
        title: 'Matrimonio',
        content: 'Contacto personal',
        contentDisplay: 'El Sacramento del Matrimonio requiere acompañamiento personalizado. Por favor escríbenos al correo para coordinar una cita con el capellán.',
      },
    ],
  },

  // NEWSLETTER
  newsletter: {
    label: 'Comunidad',
    title: 'Mantente conectado',
    subtitle: 'Recibe noticias, eventos y mensajes de fe directamente en tu correo.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo electrónico',
    interests: 'Me interesa recibir:',
    interestOptions: [
      { value: 'noticias', label: 'Noticias de la capilla' },
      { value: 'eventos', label: 'Próximos eventos' },
      { value: 'catequesis', label: 'Catequesis y formación' },
    ],
    submit: 'Suscribirme',
    successMsg: '¡Gracias! Te hemos añadido a nuestra comunidad digital. ¡Bienvenido!',
    privacy: 'Respetamos tu privacidad. Nunca compartiremos tus datos.',
  },

  // FOOTER
  footer: {
    tagline: 'Iglesia en estado permanente de Misión',
    quickLinks: 'Accesos rápidos',
    contact: 'Contacto',
    followUs: 'Síguenos',
    addressDisplay: 'Batallón Gral. Pedro Nel Ospina',
    email: 'capellaniasanfrancisco@gmail.com',
    copyright: '© 2026 Capellanía San Francisco de Asís — Obispado Castrense de Colombia',
    religiousQuotes: [
      '"La paz sea con vosotros." — Jn 20:21',
      '"Alabad al Señor porque Él es bueno." — Sal 106:1',
      '"Nada te turbe, nada te espante; quien a Dios tiene, nada le falta." — Santa Teresa',
      '"El amor de Dios ha sido derramado en nuestros corazones." — Rm 5:5',
      '"Yo soy el camino, la verdad y la vida." — Jn 14:6',
    ],
  },
}

export default es
