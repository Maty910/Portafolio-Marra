import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: { home: 'HOME', projects: 'PROJECTS', images: 'IMAGES', experience: 'EXPERIENCE', contact: 'CONTACT' },
    home: {
      scrollDown: 'Scroll Down',
      selectedWork: '— Selected Work —',
      latestProjects: 'LATEST PROJECTS',
      viewAll: 'View All Projects',
      profileKicker: '— Profile —',
      aboutMe: 'ABOUT ME',
      letsTalk: "Let's Talk",
      aboutLines: [
        'I am Joaquín Marraccini, a photographer passionate about visual storytelling based in Buenos Aires, Argentina.',
        'I specialize in using different types of framing, lighting, and compositions to deepen the message of each project.',
        'With experience in advertising, music videos, and fiction, I always seek the best aesthetic and technical quality in every project.'
      ],
      projectCategories: {
        commercial: 'Commercial',
        musicVideo: 'Music Video',
        fiction: 'Fiction',
        documentary: 'Documentary',
        film: 'Feature Film',
      }
    },
    contact: {
      kicker: '— Get in Touch —',
      title: 'CONTACT & ABOUT',
      aboutTitle: 'About Me',
      aboutLines: [
        'I am Joaquín Marraccini, director of photography and photographer. I graduated from the National School of Filmmaking and Cinematic Experimentation in Argentina and have been working in the field since 2016.',
        'I have always been fascinated by visual arts and their various techniques, and as a director of photography, I am open to exploring all kinds of worlds and stories.'
      ],
      available: 'Available for freelance projects',
      emailLabel: 'Email Me',
      follow: 'Follow My Work',
      based: 'Based in Buenos Aires, Argentina 🇦🇷',
      location: 'Location'
    }
  },
  es: {
    nav: { home: 'INICIO', projects: 'PROYECTOS', images: 'IMÁGENES', experience: 'EXPERIENCIA', contact: 'CONTACTO' },
    home: {
      scrollDown: 'Bajá para ver',
      selectedWork: '— Trabajos Seleccionados —',
      latestProjects: 'ÚLTIMOS PROYECTOS',
      viewAll: 'Ver todos los proyectos',
      profileKicker: '— Perfil —',
      aboutMe: 'SOBRE MÍ',
      letsTalk: 'Hablemos',
      aboutLines: [
        'Soy Joaquín Marraccini, fotógrafo apasionado por contar historias a través de lo visual.',
        'Me especializo en utilizar diferentes tipos de encuadres, iluminación y composiciones para profundizar en el mensaje de cada proyecto.',
        'Con experiencia en publicidad, videoclips y ficción, siempre busco trabajar en equipo para lograr la máxima calidad estética y técnica.'
      ],
      projectCategories: {
        commercial: 'Publicidad',
        musicVideo: 'Videoclip',
        fiction: 'Ficción',
        documentary: 'Documental',
        film: 'Largometraje'
      }

    },
    contact: {
      kicker: '— Contactame —',
      title: 'CONTACTO & ACERCA',
      aboutTitle: 'Sobre mí',
      aboutLines: [
        'Soy Joaquín Marraccini, director de fotografía y fotógrafo. Me recibí en la Escuela Nacional de Realización y Experimentación Cinematográfica en Argentina y trabajo en el rubro desde 2016.',
        'Siempre me fascinaron las artes visuales y sus variadas técnicas, y como director de fotografía, estoy abierto a explorar todo tipo de mundos e historias.'
      ],
      available: 'Disponible para proyectos freelance',
      emailLabel: 'Escribime',
      follow: 'Seguí mi trabajo',
      based: 'Basado en Buenos Aires, Argentina 🇦🇷',
      location: 'Ubicación'
    }
  }
};

// Extensiones para otras secciones (proyectos, imágenes, experiencia, footer)
translations.en.projects = {
  kicker: '— My work —',
  title: 'PROJECTS',
  intro: 'Selection of Works',
  countLabel: 'PROJECTS'
};
translations.es.projects = {
  kicker: '— Mi obra —',
  title: 'PROYECTOS',
  intro: 'Selección de Obras',
  countLabel: 'PROYECTOS'
};

translations.en.images = {
  kicker: '— Gallery —',
  title: 'IMAGES',
  description: 'Personal Selection',
  countLabel: 'Images'
};
translations.es.images = {
  kicker: '— Galería —',
  title: 'IMÁGENES',
  description: 'Selección personal',
  countLabel: 'Imágenes'
};

translations.en.experience = {
  kicker: '— Technical Credits —',
  title: 'EXPERIENCE',
  rolesSummary: 'Gaffer • Electrician • 1st AC • Grip • Steadicam Operator',
  credits: 'CREDITS',
  close: 'Close',
  roles: {
    electrico: 'Electrician',
    primerAsistenteCamara: '1st AC',
    asistenteSteadicam: 'Steadicam Assistant',
    gaffer: 'Gaffer',
    SteadicamOP: 'Steadicam Operator'
  }
};
translations.es.experience = {
  kicker: '— Créditos Técnicos —',
  title: 'EXPERIENCIA',
  rolesSummary: 'Gaffer • Eléctrico • 1er AC • Grip • Asistente de Steadicam',
  credits: 'CRÉDITOS',
  close: 'Cerrar',
  roles: {
    electrico: 'Eléctrico',
    primerAsistenteCamara: '1er Asistente de Cámara',
    asistenteSteadicam: 'Asistente de Steadicam',
    gaffer: 'Gaffer',
    SteadicamOP: 'Operador de Steadicam'
  }
};

translations.en.footer = {
  role: 'Director of Photography',
  instagram: 'INSTAGRAM',
  email: 'EMAIL',
  copyright: `© ${new Date().getFullYear()} Buenos Aires, Argentina`,
  devBy: 'Design & Dev by'
};
translations.es.footer = {
  role: 'Director de Fotografía',
  instagram: 'INSTAGRAM',
  email: 'EMAIL',
  copyright: `© ${new Date().getFullYear()} Buenos Aires, Argentina`,
  devBy: 'Diseño y desarrollo por'
};

translations.en.projectPage = {
  breadcrumbProjects: 'PROJECTS',
  creditsTitle: 'CREDITS',
  informationNotAvailable: 'Information not available',
  stillsTitle: 'STILLS',
  creditLabels: {
    'Dirección': 'Direction',
    'Producción': 'Production',
    'Dirección de Fotografía': 'Director of Photography',
    'Dirección de Arte': 'Art Direction',
    'Montaje': 'Editing',
    'Directora': 'Director',
    'Productora': 'Producer',
    'Guionista': 'Screenwriter',
    'Sonidista': 'Sound',
    'Director': 'Director',
    'Banda': 'Band',
    'Voz': 'Vocals',
    'Guitarra': 'Guitar'
  }
};
translations.es.projectPage = {
  breadcrumbProjects: 'PROYECTOS',
  creditsTitle: 'CRÉDITOS',
  informationNotAvailable: 'Información no disponible',
  stillsTitle: 'STILLS',
  creditLabels: {
    'Dirección': 'Dirección',
    'Producción': 'Producción',
    'Dirección de Fotografía': 'Dirección de Fotografía',
    'Dirección de Arte': 'Dirección de Arte',
    'Montaje': 'Montaje',
    'Directora': 'Directora',
    'Productora': 'Productora',
    'Guionista': 'Guionista',
    'Sonidista': 'Sonidista',
    'Director': 'Director',
    'Banda': 'Banda',
    'Voz': 'Voz',
    'Guitarra': 'Guitarra'
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('site-lang');
      if (saved && (saved === 'es' || saved === 'en')) setLang(saved);
    } catch (e) {
      // Ignore errors if localStorage is not available (e.g., in SSR or private browsing)
    }
  }, []);

  useEffect(() => {
    try { localStorage.setItem('site-lang', lang); } catch (e) {
      // Ignore errors if localStorage is not available
    }
  }, [lang]);

  const toggleLanguage = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  const t = (path, fallback = '') => {
    const parts = path.split('.');
    let cur = translations[lang];
    for (const p of parts) {
      if (!cur) return fallback;
      cur = cur[p];
    }
    return cur ?? fallback;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); // eslint-disable-line react-refresh/only-export-components
