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
      title: "Para la reina de mi vida...",
      verse: "Hay personas que iluminan el mundo, pero tú, Ma, haces que la vida sea un lugar seguro, tibio y lleno de amor.",
      image: "/photos/foto2_cindy.jpg",
      subtext: "Hoy celebramos tu hermosa existencia, Cindy"
    },
    {
      id: "roots-scene",
      durationInFrames: 130, // ~4.3 segundos
      badge: "CAPÍTULO I • TUS CUIDADOS",
      title: "Tus brazos, mi primer refugio",
      verse: "Crecí sintiendo que nada malo podía pasarme porque tú estabas ahí. Aunque hoy esté grande y a veces sea el más peleón, para mí siempre serás mi lugar seguro.",
      image: "/photos/foto1_infancia.jpg",
      subtext: "Gracias por sostenerme desde niño, Ma"
    },
    {
      id: "strength-scene",
      durationInFrames: 130, // ~4.3 segundos
      badge: "CAPÍTULO II • TU LUZ Y FUERZA",
      title: "La mujer más valiente y hermosa",
      verse: "Miren esa sonrisa y esos ojos tan llenos de vida. Admiro tu fortaleza, tu temple y cómo transformas cualquier cansancio en amor para nosotros.",
      image: "/photos/foto2_cindy.jpg",
      subtext: "Orgulloso de la madre que Dios me dio"
    },
    {
      id: "smiles-scene",
      durationInFrames: 130, // ~4.3 segundos
      badge: "CAPÍTULO III • COMPLICIDAD",
      title: "Juntos en cada paso del camino",
      verse: "Compartir contigo, verte reír y saber que estamos juntos en las buenas y en las malas no tiene precio. Cada momento a tu lado vale oro.",
      image: "/photos/foto3_complicidad.jpg",
      subtext: "Mi compañera incondicional de vida"
    },
    {
      id: "gratitude-scene",
      durationInFrames: 140, // ~4.6 segundos
      badge: "CAPÍTULO IV • NUESTRO HOGAR",
      title: "El corazón de nuestra familia",
      verse: "Tú eres la que nos mantiene unidos, la alegría que llena cualquier mesa y la bendición más grande de nuestra casa.",
      image: "/photos/foto4_familia.jpg",
      subtext: "Tu felicidad es la de todos nosotros"
    },
    {
      id: "celebration-scene",
      durationInFrames: 150, // ~5 segundos
      badge: "¡A CELEBRAR TU VIDA! 🪗",
      title: "¡Feliz Cumpleaños, Ma!",
      verse: "¡Que Dios te bendiga hoy, mañana y siempre! Que este nuevo año te colme de salud de roble, paz infinita y mil motivos para sonreír.",
      image: "/photos/foto2_cindy.jpg",
      subtext: "Te amo con todas las fuerzas de mi alma ❤️"
    }
  ],

  letter: {
    envelopeHint: "Hay una carta sellada para ti... Toca el sobre dorado para desdoblarla 💌",
    title: "Una Carta Para Mi Reina Cindy",
    openingGreeting: "Mi querida Ma,",
    bodyParagraphs: [
      "Hoy que cumples un año más de vida, quiero escribirte estas líneas desde el fondo de mi corazón. A veces en el día a día se me olvida decirte lo más importante: que no pasa una sola mañana en que no le agradezca a Dios por tenerte como madre.",
      "Gracias por cada sacrificio que hiciste en silencio, por cuidarme con tanta paciencia desde que era ese niño que no te soltaba en las fotos, por tus palabras cuando me siento perdido y por ese abrazo tuyo que tiene el poder de calmar cualquier tormenta.",
      "Sé que a veces puedo ser tu hijo 'el más peleón', que tenemos nuestros momentos y que no siempre es fácil conmigo, pero quiero que tengas la certeza absoluta de que te adoro con mi vida entera y que todo lo que soy y lucho cada día lleva tu ejemplo y tu amor.",
      "Mírate en tus fotos: eres una mujer radiante, hermosa, trabajadora y el verdadero pilar que nos une a todos en la mesa. En este nuevo año de vida, solo te deseo salud infinita, tranquilidad en tu alma y muchas alegrías."
    ],
    closingPhrase: "Gracias por ser mi mamá, mi orgullo y mi mayor bendición.",
    signature: "Con todo mi amor infinito,",
    postScriptum: "P.D.: Mira más abajo, dejé nuestras fotos con anécdotas y recuerdos secretos para ti..."
  },

  memoriesGallery: [
    {
      id: "polaroid-1",
      image: "/photos/foto1_infancia.jpg",
      caption: "Donde Todo Empezó",
      backStory: "¿Te acuerdas de cuando me cargabas así? Crecí rápido, pero en mi corazón sigo siendo ese niño que siempre busca tu bendición y tu abrazo protector.",
      dateOrPlace: "Recuerdo Inolvidable"
    },
    {
      id: "polaroid-2",
      image: "/photos/foto2_cindy.jpg",
      caption: "Mi Ma Preciosa",
      backStory: "¡Miren qué hermosa estás aquí! Nunca pierdas esa chispa y esa sonrisa tan tuya que alegra a todos los que tenemos la dicha de estar a tu lado.",
      dateOrPlace: "Esa Sonrisa Que Ilumina"
    },
    {
      id: "polaroid-3",
      image: "/photos/foto3_complicidad.jpg",
      caption: "Juntos en el Camino",
      backStory: "Aunque sea tu hijo 'el más peleón', sabes que por ti doy la cara y la vida entera. Compartir un rato contigo siempre me llena el alma.",
      dateOrPlace: "Complicidad Pura"
    },
    {
      id: "polaroid-4",
      image: "/photos/foto4_familia.jpg",
      caption: "La Familia Que Creaste",
      backStory: "Verte rodeada de todos nosotros, comiendo y compartiendo risas, es mi mayor satisfacción. Eres el corazón y el pegamento de este hogar.",
      dateOrPlace: "Unidos Por Tu Amor"
    }
  ],

  wishSection: {
    title: "Pide un Deseo de Cumpleaños 🕯️",
    instructions: "Cierra los ojos, piensa en lo que más anhela tu corazón en este nuevo año... y toca la velita para encender tus bendiciones.",
    blownMessage: "¡Tu deseo ya está en camino al cielo! ✨ Que Dios te colme de bendiciones, salud y prosperidad.",
    finalHeartNote: "¡Te amo infinitamente, Cindy! ❤️"
  }
};
