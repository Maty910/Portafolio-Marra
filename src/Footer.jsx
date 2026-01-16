import { useLanguage } from './LanguageContext.jsx';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 relative z-10 selection:bg-yellow-400 selection:text-black fade-in">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* IZQUIERDA: Identidad */}
        <div className="text-center md:text-left">
          <h2 className="font-bebas text-2xl md:text-3xl tracking-widest leading-none text-white hover:text-white/90 transition-colors cursor-default">
            JOAQUÍN MARRACCINI
          </h2>
          <p className="font-montserrat text-[0.65rem] md:text-xs tracking-[0.3em] text-white/40 uppercase mt-2">
            {t('footer.role')}
          </p>
        </div>

        {/* DERECHA: Contacto & Redes (Estilo Navegación) */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <a 
            href="https://www.instagram.com/joaco_marra/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bebas text-lg tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:tracking-[0.15em]"
          >
            {t('footer.instagram')}
          </a>
          
          <span className="hidden md:block text-white/20">|</span>
          
          <a 
            href="mailto:marraccinijoaquin@gmail.com" 
            className="font-bebas text-lg tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:tracking-[0.15em]"
          >
            {t('footer.email')}
          </a>
        </div>

      </div>

      {/* COPYRIGHT & DEV (Súper sutil al final) */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="font-montserrat text-[10px] tracking-wider text-white/80 uppercase">
          {t('footer.copyright')}
        </p>
        
        <p className="font-montserrat text-[10px] tracking-wider text-white/80 uppercase">
          {t('footer.devBy')}{' '}
          <a 
            href="https://github.com/Maty910" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors border-b border-transparent hover:text-yellow-400 hover:border-yellow-400 hover:text-shadow-[0_0_5px_rgba(250,204,21,0.4)]"
          >
            @Maty910
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer