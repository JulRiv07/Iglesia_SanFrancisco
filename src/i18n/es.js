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
    scrollDown: 'Desliza para explorar',
  },

  // ABOUT
  about: {
    label: 'Nuestra Historia',
    title: 'Una comunidad forjada en fe',
    subtitle: 'Desde nuestros cimientos de ladrillo hasta el corazón de cada feligrés',
    history: [
      'La Capellanía San Francisco de Asís forma parte del Obispado Castrense de Colombia, institución que acompaña espiritualmente a las Fuerzas Militares y a la comunidad que las rodea.',
      'Inspirados en el carisma franciscano — la sencillez, el amor a la creación y el servicio al prójimo — nuestra comunidad vive la fe de manera cotidiana, celebrando los sacramentos, acompañando en los momentos de alegría y de dolor, y construyendo juntos el Reino de Dios.',
      'Nuestra capilla abierta al cielo es símbolo de una Iglesia que no cierra sus puertas: siempre en misión, siempre al servicio de quienes buscan a Dios.',
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
      { src: '/images/hero.jpg', alt: 'Altar mayor de la capilla' },
      { src: '/images/exterior.jpg', alt: 'San Francisco de Asís — entrada principal' },
      { src: '/images/mass-priest.jpg', alt: 'Celebración de la Eucaristía' },
      { src: '/images/mass-community.jpg', alt: 'Comunidad reunida en misa' },
      { src: '/images/community-1.jpg', alt: 'Celebración comunitaria' },
      { src: '/images/community-2.jpg', alt: 'Asamblea de la comunidad' },
    ],
  },

  // MAP
  map: {
    label: 'Visítanos',
    title: 'Encuéntranos',
    address: '<!-- LLENAR: Dirección completa de la capilla -->',
    addressDisplay: 'Dirección por confirmar — Insertar aquí',
    phone: '<!-- LLENAR: Teléfono de contacto -->',
    phoneDisplay: 'Tel: Por confirmar',
    email: 'capellaniasanfrancisco@gmail.com',
    schedule: [
      { day: 'Lunes – Viernes', time: '<!-- LLENAR hora de misas -->' },
      { day: 'Sábado', time: '<!-- LLENAR hora de misas -->' },
      { day: 'Domingo', time: '<!-- LLENAR hora de misas -->' },
    ],
    scheduleTitle: 'Horario de Misas',
    schoolOfFaithTitle: 'Escuela de la Fe',
    schoolOfFaithSchedule: 'Sabados 10:00 AM - 11:00 AM',
    mapPlaceholder: 'Mapa de ubicación',
  },

  // EVENTS
  events: {
    label: 'Agenda',
    title: 'Eventos',
    subtitle: 'Vive la fe junto a nuestra comunidad',
    tabUpcoming: 'Próximos',
    tabPast: 'Anteriores',
    tabCalendar: 'Calendario',
    noUpcoming: 'No hay eventos próximos registrados.',
    noPast: 'No hay eventos anteriores registrados.',
    upcoming: [
      {
        id: 1,
        title: 'Misa Dominical Especial',
        date: '2026-07-06',
        time: '10:00 AM',
        description: 'Celebración especial con coro comunitario. Todos los feligreses están invitados.',
        category: 'Liturgia',
      },
      {
        id: 2,
        title: 'Catequesis de Primera Comunión',
        date: '2026-07-12',
        time: '3:00 PM',
        description: 'Inicio del ciclo de preparación para niños entre 7 y 10 años.',
        category: 'Catequesis',
      },
      {
        id: 3,
        title: 'Retiro Espiritual',
        date: '2026-07-19',
        time: '8:00 AM',
        description: 'Día de reflexión y oración para toda la comunidad.',
        category: 'Formación',
      },
    ],
    past: [
      {
        id: 10,
        title: 'Corpus Christi',
        date: '2026-06-19',
        description: 'Procesión eucarística por los alrededores de la capilla.',
        category: 'Liturgia',
      },
      {
        id: 11,
        title: 'Encuentro de Jóvenes',
        date: '2026-06-07',
        description: 'Jornada de evangelización y fraternidad juvenil.',
        category: 'Pastoral',
      },
    ],
    months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    days: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
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
        icon: '💧',
        content: '<!-- LLENAR: Lista de requisitos para el sacramento del Bautismo (ej: acta de nacimiento, partida de bautismo de los padres, certificado de matrimonio si aplica, charla prebautismal, etc.) -->',
        contentDisplay: 'Los requisitos para el Bautismo serán publicados próximamente. Contáctanos para más información.',
      },
      {
        id: 'comunion',
        title: 'Primera Comunión',
        icon: '🍞',
        content: '<!-- LLENAR: Requisitos para Primera Comunión -->',
        contentDisplay: 'Los requisitos para la Primera Comunión serán publicados próximamente. Contáctanos para más información.',
      },
      {
        id: 'confirmacion',
        title: 'Confirmación',
        icon: '🕊️',
        content: '<!-- LLENAR: Requisitos para Confirmación -->',
        contentDisplay: 'Los requisitos para la Confirmación serán publicados próximamente. Contáctanos para más información.',
      },
      {
        id: 'matrimonio',
        title: 'Matrimonio',
        icon: '💍',
        content: '<!-- LLENAR: Requisitos para Matrimonio -->',
        contentDisplay: 'Los requisitos para el Matrimonio serán publicados próximamente. Contáctanos para más información.',
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
    address: '<!-- LLENAR: Dirección completa -->',
    addressDisplay: 'Dirección por confirmar',
    phone: '<!-- LLENAR: Teléfono -->',
    phoneDisplay: 'Tel: Por confirmar',
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
