import { useEffect } from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

const Extras = () => {
  // Datos simulados (Reemplazalos con tus trabajos reales de técnico)
  const extraItems = [
    { id: 1, title: 'Nocturna en la Ciudad', role: 'Gaffer', year: '2023', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, title: 'Videoclip "Ecos"', role: 'Steadicam Op', year: '2023', img: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, title: 'Comercial Ford', role: 'Best Boy', year: '2022', img: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, title: 'Corto "El Encuentro"', role: 'Eléctrico', year: '2022', img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, title: 'Documental Andes', role: '1st AC', year: '2021', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { id: 6, title: 'Fashion Film Zara', role: 'Gaffer', year: '2021', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000' },
  ];

  // Scroll al top al entrar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-400 selection:text-black fade-in font-sans">
      <Header />

      <main className="pt-2 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- ENCABEZADO DE SECCIÓN (Consistencia Total) --- */}
        <div className="mb-2 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start">
            
            {/* SUBTÍTULO / KICKER */}
            <span className="text-yellow-400 font-montserrat text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 ml-1">
              — Créditos Técnicos —
            </span>

            {/* TÍTULO PRINCIPAL */}
            <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white leading-none selection:bg-yellow-400 selection:text-black fade-in">
              EXPERIENCE
            </h1>

            {/* BAJADA */}
            <p className="font-montserrat text-white/40 text-xs md:text-sm tracking-[0.2em] mt-2 uppercase ml-1">
              Gaffer • Steadicam Operator • Electrician • Camera Assistant  
            </p>
          </div>
          
          {/* CONTADOR */}
          <span className="font-montserrat text-xs text-white/30 hidden md:block tracking-widest mb-1 uppercase">
            {extraItems.length} CREDITOS
          </span>
        </div>

        {/* --- GRID DE CRÉDITOS TÉCNICOS --- */}
        {/* Usamos un grid de 3 columnas para diferenciarlo de "Proyectos" (que tiene 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {extraItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-gray-900 overflow-hidden rounded-sm cursor-default"
            >
              {/* IMAGEN DE FONDO */}
              <div className="aspect-4/3 w-full overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
                />
                
                {/* Overlay Gradiente siempre visible para legibilidad */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                
                {/* ETIQUETA DE ROL (Destacada) */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bebas text-sm px-2 py-0.5 tracking-wider rounded-sm shadow-lg transform translate-y-0 md:-translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                  {item.role}
                </div>
              </div>

              {/* INFO (Abajo, superpuesta) */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col items-start justify-end h-full pointer-events-none">
                
                {/* Rol (Versión móvil o fija) */}
                <span className="text-yellow-400 font-montserrat text-[10px] font-bold tracking-[0.2em] uppercase mb-1 md:hidden">
                  {item.role}
                </span>

                {/* Título */}
                <h3 className="text-white font-bebas text-2xl md:text-3xl tracking-wide leading-none mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                {/* Año / Categoría extra */}
                <span className="text-white/40 font-montserrat text-[10px] tracking-widest uppercase">
                  {item.year}
                </span>

                {/* Línea decorativa que se anima al hover */}
                <div className="w-full h-px bg-white/20 mt-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Extras;