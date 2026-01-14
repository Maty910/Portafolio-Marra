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
        'I am Joaquín Marraccini, Director of Photography and Photographer.',
        'My focus is on visual storytelling, using light and color to enhance the narrative.',
        'With experience in advertising, music videos, and fiction, I always seek the best aesthetic and technical quality in every project.'
      ]
    },
    contact: {
      kicker: '— Get in Touch —',
      title: 'CONTACT & ABOUT',
      aboutTitle: 'About Me',
      aboutLines: [
        'I am Joaquin Marraccini, a Cinematographer and Photographer based in Buenos Aires, Argentina.',
        'Passion for visual storytelling drives every frame I capture.'
      ],
      available: 'Available for freelance projects',
      emailLabel: 'Email Me',
      follow: 'Follow My Work',
      based: 'Based in Buenos Aires, Argentina 🇦🇷'
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
        'Soy Joaquín Marraccini, Director de Fotografía y Fotógrafo.',
        'Mi enfoque está en la narración visual, utilizando la luz y el color para potenciar la historia.',
        'Con experiencia en publicidad, videoclips y ficción, siempre busco la mayor calidad estética y técnica en cada proyecto.'
      ]
    },
    contact: {
      kicker: '— Contactame —',
      title: 'CONTACTO & ACERCA',
      aboutTitle: 'Sobre mí',
      aboutLines: [
        'Soy Joaquín Marraccini, Director de Fotografía y Fotógrafo en Buenos Aires, Argentina.',
        'La pasión por la narración visual guía cada plano que capturo.'
      ],
      available: 'Disponible para proyectos freelance',
      emailLabel: 'Escribime',
      follow: 'Seguí mi trabajo',
      based: 'Basado en Buenos Aires, Argentina 🇦🇷'
    }
  }
};

// Extensiones para otras secciones (proyectos, imágenes, experiencia, footer)
translations.en.projects = {
  kicker: '— Projects —',
  title: 'PROJECTS',
  intro: 'Selection of Works',
  countLabel: 'PROJECTS'
};
translations.es.projects = {
  kicker: '— Proyectos —',
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
  rolesSummary: 'Gaffer • Electrician • 1st AC • Grip',
  credits: 'CREDITS',
  close: 'Close',
  roles: {
    electrico: 'Electrician',
    primerAsistenteCamara: '1st AC',
    asistenteSteadicam: 'Steadicam Assistant',
    gaffer: 'Gaffer'
  }
};
translations.es.experience = {
  kicker: '— Créditos Técnicos —',
  title: 'EXPERIENCIA',
  rolesSummary: 'Gaffer • Electrician • 1st AC • Grip',
  credits: 'CRÉDITOS',
  close: 'Cerrar',
  roles: {
    electrico: 'Eléctrico',
    primerAsistenteCamara: '1er Asistente de Cámara',
    asistenteSteadicam: 'Asistente de Steadicam',
    gaffer: 'Gaffer'
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
  stillsTitle: 'STILLS'
};
translations.es.projectPage = {
  breadcrumbProjects: 'PROYECTOS',
  creditsTitle: 'CRÉDITOS',
  informationNotAvailable: 'Información no disponible',
  stillsTitle: 'STILLS'
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('site-lang');
      if (saved && (saved === 'es' || saved === 'en')) setLang(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
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

export const useLanguage = () => useContext(LanguageContext);
