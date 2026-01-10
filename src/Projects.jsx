import { Link } from 'react-router-dom';

export function Projects({ projectName, imgFileName, category = "CINEMATOGRAPHY" }) {
  // Slug limpio para la URL
  const slug = projectName.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="w-full p-2">
      <Link to={`/projects/${slug}`} className="group block relative w-full overflow-hidden rounded-sm">
        
        {/* CONTENEDOR DE IMAGEN (Aspect Ratio 16:9 standard de cine) */}
        <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
          <img
            src={`./img/ProjectsImgs/${imgFileName}`}
            alt={projectName}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          
          {/* OVERLAY OSCURO (Solo en Hover) - Mejora lectura del texto */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
        </div>

        {/* CONTENIDO TEXTO (Centrado y animado) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          
          {/* Título: Sube y aparece */}
          <h2 className="text-white font-bebas text-3xl md:text-5xl tracking-widest uppercase drop-shadow-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            {projectName}
          </h2>

          {/* Línea decorativa: Se expande */}
          <div className="w-8 h-1px bg-white mt-3 opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-700 delay-100 ease-out" />

          {/* Categoría (opcional): Aparece con delay */}
          <span className="text-white/80 font-montserrat text-[10px] md:text-xs tracking-[0.3em] mt-3 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 uppercase">
            {category}
          </span>

        </div>
      </Link>
    </div>
  );
}