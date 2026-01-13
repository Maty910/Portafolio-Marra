import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext.jsx';

// Component that renders the header of the page with a logo and a navigation bar

export function Header () {
  const { t } = useLanguage();

  return (
    <header className="w-full flex justify-center items-center py-8">
      <nav className="w-full max-w-6xl flex flex-col items-center">
        <div className="logo">
          <h1 className="font-bebas h1-span text-4xl text-white">Joaquin Marraccini</h1>
        </div>
        <ul className="flex gap-8 mt-2">
          <li><Link className="text-white no-underline" to="/">{t('nav.home')}</Link></li>
          <li><Link className="text-white no-underline" to="/projects">{t('nav.projects')}</Link></li>
          <li><Link className="text-white no-underline" to="/photos">{t('nav.images')}</Link></li>
          <li><Link className="text-white no-underline" to="/extras">EXTRAS</Link></li>
          <li><Link className="text-white no-underline" to="/contact">{t('nav.contact')}</Link></li>
        </ul>
      </nav>
    </header>
  )
}