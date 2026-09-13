# 🎂 Web de Regalo de Cumpleaños para Mamá ❤️

Una experiencia interactiva y poética desarrollada con **React**, **Vite**, **Remotion** y **Tailwind CSS**.
Diseñada *mobile-first* para que tu mamá pueda abrirla desde un enlace en **WhatsApp** y emocionarse con cada detalle.

---

## ✨ Características

1. **Pantalla de Bienvenida con Desbloqueo de Audio:**
   - Previene bloqueos del navegador en iPhone y Android al iniciar con el toque en "Abrir tu regalo 🎁".
   - Explosión de confeti y música de fondo suave (fade-in).

2. **Video Cinematográfico en Remotion (`@remotion/player`):**
   - Escenas secuenciales animadas con efecto *Ken Burns* (zoom lento en fotos), partículas doradas, destellos de luz e interpolación suave.
   - Formato vertical 9:16 adaptable y optimizado para pantallas móviles.

3. **Sobre Interactivo con Carta Personalizada:**
   - Un sobre 3D con sello de lacre dorado y corazón.
   - Al tocarlo, el sobre se abre y despliega una carta en textura de pergamino con versos y dedicatoria personal.

4. **Galería de Recuerdos Polaroid (Efecto 3D Flip):**
   - Fotos estilo polaroid que giran 180° al tocarlas para revelar una anécdota o mensaje cariñoso secreto en su reverso.

5. **Interacción Mágica "Pide un Deseo" 🕯️:**
   - Velita de cumpleaños encendida con animación de llama.
   - Al tocarla, la velita se apaga con animación de humo y una lluvia de fuegos artificiales/confeti.
   - Botón directo para que mamá te envíe un mensaje a tu WhatsApp agradeciéndote.

---

## 🎨 Cómo Personalizar Fotos, Poemas y Música

Todo el contenido está centralizado en un solo archivo:
👉 **`src/data/giftContent.ts`**

### 1. Cambiar el Nombre de tu Mamá y tu Firma
```typescript
momName: "Mamá", // o "Mami", "Luz Marina", etc.
senderName: "Tu hijo [Tu Nombre]",
birthdayDate: "13 de Septiembre",
```

### 2. Cambiar las Fotos y Versos del Video (Remotion)
En el arreglo `remotionScenes`, cada escena tiene:
- `badge`: El capítulo (ej. "CAPÍTULO I • TUS CUIDADOS").
- `title`: Título de la escena.
- `verse`: El verso poético o dedicatoria.
- `image`: Puedes colocar un enlace de internet o guardar tus fotos en la carpeta `public/photos/` y poner `/photos/foto1.jpg`.

### 3. Cambiar la Carta
En la sección `letter`:
- Puedes redactar los párrafos que quieras en el arreglo `bodyParagraphs`.

### 4. Cambiar la Canción de Fondo
En la sección `music`:
- Coloca tu archivo `.mp3` en la carpeta `public/` y pon `audioUrl: "/tu-cancion.mp3"`.

---

## 🚀 Cómo Probar Localmente

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre tu navegador en el enlace mostrado (usualmente `http://localhost:5173`).

---

## 🌐 Cómo Publicarlo Gratis para Enviárselo por WhatsApp

### Opción A: Vercel (Recomendado, tarda 1 minuto)
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"** e importa tu repositorio `mama`.
3. Haz clic en **"Deploy"**.
4. ¡Listo! Vercel te dará un enlace (ej: `https://mama-cumple.vercel.app`) que puedes copiar y pegar en WhatsApp.

### Opción B: Netlify
1. Entra a [netlify.com](https://netlify.com).
2. Conecta tu repositorio de GitHub `mama` y despliega con un clic.
