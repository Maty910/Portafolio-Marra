import { Link } from 'react-router-dom';

export function Projects({ projectName, imgFileName, category = "CINEMATOGRAPHY" }) {
  // Slug limpio para la URL
  const slug = projectName.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="w-full p-2">
      <Link 
        to={`/projects/${slug}`} 
        className="group block relative w-full overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
      > 
        {/* CONTENEDOR DE IMAGEN (Aspect Ratio 16:9) */}
        <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
          <img
            src={`./img/ProjectsImgs/${imgFileName}`}
            alt={projectName}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          
          {/* OVERLAY: Oscuro en mobile por defecto, transparente en desktop hasta hover */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent md:group-hover:bg-black/50 transition-colors duration-500 ease-out" />
          
          {/* GRADIENTE */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-80 transition-opacity duration-500" />
        </div>

        {/* CONTENIDO TEXTO */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
          
          {/* Título Principal */}
          <h2 className="text-white font-bebas text-3xl md:text-5xl tracking-widest uppercase drop-shadow-lg 
                        opacity-100 md:opacity-0 md:transform md:translate-y-4 
                        md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
            {projectName}
          </h2>

          {/* Línea decorativa */}
          <div className="w-12 h-px bg-white mt-3 
                          opacity-100 md:opacity-0 md:transform md:scale-x-0 
                          md:group-hover:opacity-100 md:group-hover:scale-x-100 transition-all duration-700 delay-100 ease-out" />

          {/* Categoría */}
          <span className="text-white/80 font-montserrat text-[10px] md:text-xs tracking-[0.3em] mt-3 uppercase
                          opacity-100 md:opacity-0 md:transform md:translate-y-2 
                          md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-150">
            {category}
          </span>

        </div>
      </Link>
    </div>
  );
}