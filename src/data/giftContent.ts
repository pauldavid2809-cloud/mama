/**
 * =====================================================================
 * ARCHIVO DE CONFIGURACIÓN Y CONTENIDO DEL REGALO DE MAMÁ ❤️
 * =====================================================================
 * Aquí puedes cambiar todos los textos, poesías, fotos y la música.
 * Todo lo que edites aquí se actualizará automáticamente en la página.
 */

export interface SceneConfig {
  id: string;
  durationInFrames: number; // A 30 fps: 90 frames = 3 seg, 120 frames = 4 seg, 150 frames = 5 seg
  badge: string;            // Etiqueta pequeña (ej: "Capítulo I • Raíces")
  title: string;            // Título de la escena
  verse: string;            // Poema / Dedicatoria que acompaña la foto
  image: string;            // Ruta local (ej: "/photos/mama1.jpg") o enlace web
  subtext?: string;         // Frase adicional o fecha
}

export interface PolaroidMemory {
  id: string;
  image: string;
  caption: string;
  backStory: string;        // Mensaje sorpresa que aparece al tocar/girar la polaroid
  dateOrPlace?: string;
}

export interface GiftConfig {
  // Datos principales
  momName: string;          // El nombre de tu mamá o cómo le dices con cariño
  senderName: string;       // Tu nombre o firma
  birthdayDate: string;     // Fecha para mostrar (ej: "13 de Septiembre")
  whatsappNumber?: string;  // Tu número de WhatsApp con código de país (ej: "+584121234567")
  
  // Música de fondo
  music: {
    youtubeVideoId?: string;// ID de YouTube (ej: "n9KdeA9KMGg")
    audioUrl: string;       // Ruta a archivo MP3 en public/ (ej: "/musica.mp3")
    fallbackUrl?: string;   // Melodía de respaldo si el archivo local aún no se ha copiado
    songTitle: string;
    artist: string;
  };

  // Mensaje en la portada inicial (antes de abrir el regalo)
  welcomeScreen: {
    badge: string;
    headline: string;
    subtitle: string;
    buttonText: string;
    note: string;
  };

  // Escenas del Video Cinematográfico en Remotion
  // (Puedes editar o agregar versos aquí)
  remotionScenes: SceneConfig[];

  // El Sobre y la Carta Secreta
  letter: {
    envelopeHint: string;
    title: string;
    openingGreeting: string;
    bodyParagraphs: string[];
    closingPhrase: string;
    signature: string;
    postScriptum: string;
  };

  // Galería de Recuerdos Interactivos (Polaroids que se voltean al tocar)
  memoriesGallery: PolaroidMemory[];

  // Deseo de Cumpleaños (Soplar la velita)
  wishSection: {
    title: string;
    instructions: string;
    blownMessage: string;
    finalHeartNote: string;
  };
}

export const giftContent: GiftConfig = {
  momName: "Ma",
  senderName: "Tu hijo, Paul, el más peleón",
  birthdayDate: "Hoy en tu día especial",
  whatsappNumber: "584120308674",

  music: {
    youtubeVideoId: "n9KdeA9KMGg", // Diomedes Díaz - Tu Cumpleaños
    audioUrl: "/musica.mp3",
    fallbackUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",
    songTitle: "Tu Cumpleaños 🪗",
    artist: "Diomedes Díaz"
  },

  welcomeScreen: {
    badge: "UN DETALLE DESDE EL CORAZÓN 💌",
    headline: "Para la mujer más maravillosa del universo",
    subtitle: "Cada recuerdo a tu lado es un tesoro que guardo con gratitud eterna. Hoy quiero regalarte una pequeña parte de todo lo que significas para mí.",
    buttonText: "Toca para abrir tu regalo ✨",
    note: "Sube el volumen de tu teléfono para vivir la experiencia completa 🎵"
  },

  remotionScenes: [
    {
      id: "intro-scene",
      durationInFrames: 110, // ~3.6 segundos
      badge: "PRÓLOGO DE GRATITUD",
      title: "Hay personas que iluminan el mundo...",
      verse: "Pero tú, mamá, no solo lo iluminas: tú haces que la vida sea un lugar seguro, tibio y lleno de amor sincero.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1080&auto=format&fit=crop",
      subtext: "Hoy celebramos tu hermosa existencia"
    },
    {
      id: "roots-scene",
      durationInFrames: 130, // ~4.3 segundos
      badge: "CAPÍTULO I • TUS CUIDADOS",
      title: "La ternura de tus brazos",
      verse: "Desde mis primeros pasos hasta mis mayores caídas, tu mano siempre estuvo ahí, sosteniéndome en silencio y con la fe más inquebrantable.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1080&auto=format&fit=crop",
      subtext: "Gracias por ser mi primer y más puro refugio"
    },
    {
      id: "strength-scene",
      durationInFrames: 130, // ~4.3 segundos
      badge: "CAPÍTULO II • TU VALENTÍA",
      title: "La fuerza detrás de tu sonrisa",
      verse: "Te he visto transformar días difíciles en caricias y cansancio en abrazos. Tu fortaleza es el faro que guía mis pasos en cada tormenta.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1080&auto=format&fit=crop",
      subtext: "Mi mayor ejemplo de coraje y perseverancia"
    },
    {
      id: "smiles-scene",
      durationInFrames: 130, // ~4.3 segundos
      badge: "CAPÍTULO III • NUESTRA COMPLICIDAD",
      title: "Tus risas que sanan el alma",
      verse: "No hay nada más reconfortante que escuchar tu risa. Esos momentos sencillos, las charlas cotidianas y tu café compartido son mi verdadera riqueza.",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1080&auto=format&fit=crop",
      subtext: "Cada segundo a tu lado vale una vida entera"
    },
    {
      id: "gratitude-scene",
      durationInFrames: 140, // ~4.6 segundos
      badge: "CAPÍTULO IV • AMOR INCONDICIONAL",
      title: "El milagro de tenerte como madre",
      verse: "Si volviera a nacer mil veces, en las mil pediría ser tu hijo. Gracias por amarme tal como soy y por enseñarme el verdadero valor de la bondad.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1080&auto=format&fit=crop",
      subtext: "Mi corazón siempre será tu hogar"
    },
    {
      id: "celebration-scene",
      durationInFrames: 150, // ~5 segundos
      badge: "¡GRACIAS POR EXISTIR!",
      title: "¡Feliz Cumpleaños, Ma!",
      verse: "Que este nuevo año de vida te devuelva multiplicado cada rayo de amor, paz y salud que le has regalado a todos los que te rodean.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1080&auto=format&fit=crop",
      subtext: "Te amo con todas las fuerzas de mi ser ❤️"
    }
  ],

  letter: {
    envelopeHint: "Hay una carta sellada para ti... Toca el sobre dorado para desdoblarla 💌",
    title: "Una Carta Para Mi Reina Cindy",
    openingGreeting: "Mi querida Ma,",
    bodyParagraphs: [
      "Hoy que cumples un año más de vida, me detengo a pensar en todo lo que has hecho por mí, y las palabras se quedan cortas. A veces en el ajetreo de los días olvidamos decir lo más importante: que no pasa un solo día en que no me sienta orgulloso y afortunado de que tú seas mi madre.",
      "Gracias por cada sacrificio que hiciste en silencio, por levantarte temprano para velar por mí, por tus palabras de aliento cuando sentí que no podía más, y por ese abrazo que cura cualquier dolor del mundo exterior.",
      "Eres una mujer admirable: dulce, sabia, incansable y con un corazón tan grande que no te cabe en el pecho. Todo lo bueno que hay en mí lleva tu huella y tus enseñanzas.",
      "En este nuevo año de vida, te deseo paz en tu mente, alegría desbordante en tu mirada y salud infinita. Mereces ser inmensamente feliz todos los días de tu existencia."
    ],
    closingPhrase: "Gracias por existir y por ser mi bendición más grande.",
    signature: "Con todo mi amor infinito,",
    postScriptum: "P.D.: Mira más abajo, dejé unas fotos especiales con recuerdos secretos para ti..."
  },

  memoriesGallery: [
    {
      id: "polaroid-1",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
      caption: "Tus Abrazos Mágicos",
      backStory: "Sin importar los años que pasen, el mejor lugar del mundo siempre será entre tus brazos. Gracias por protegerme siempre.",
      dateOrPlace: "Recuerdo Inolvidable"
    },
    {
      id: "polaroid-2",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
      caption: "Tus Risas Compartidas",
      backStory: "Verte sonreír alegra cualquier día gris. Prometo seguir buscando mil motivos para verte reír así toda la vida.",
      dateOrPlace: "Días Felices"
    },
    {
      id: "polaroid-3",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
      caption: "Siempre Juntos",
      backStory: "En las buenas y en las malas, tu compañía me da la seguridad para seguir adelante. Eres mi mayor tesoro.",
      dateOrPlace: "De la Mano"
    },
    {
      id: "polaroid-4",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
      caption: "¡A Celebrarte Hoy y Siempre!",
      backStory: "Hoy no solo festejamos tus años, festejamos la dicha de tenerte. ¡Que se cumplan todos tus anhelos!",
      dateOrPlace: "Tu Día Especial"
    }
  ],

  wishSection: {
    title: "Pide un Deseo de Cumpleaños 🕯️",
    instructions: "Cierra los ojos, piensa en lo que más anhela tu corazón en este nuevo año... y toca la velita para encender tus bendiciones.",
    blownMessage: "¡Tu deseo ya está en camino al universo! ✨ Que Dios y la vida te colmen de salud, abundancia y sonrisas.",
    finalHeartNote: "Te amo infinitamente, Mamá ❤️"
  }
};
