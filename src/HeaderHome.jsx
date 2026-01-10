import { Link } from 'react-router-dom';

// Component that renders the header of the page with a logo and a navigation bar

export function Header () {
  return (
    <header className="w-full flex justify-center items-center py-8">
      <nav className="w-full max-w-6xl flex flex-col items-center">
        <div className="logo">
          <h1 className="font-bebas h1-span text-4xl text-white">Joaquin Marraccini</h1>
        </div>
        <ul className="flex gap-8 mt-2">
          <li><Link className="text-white no-underline" to="/">HOME</Link></li>
          <li><Link className="text-white no-underline" to="/projects">PROYECTOS</Link></li>
          <li><Link className="text-white no-underline" to="/photos">FOTOGRAFÍA</Link></li>
          <li><Link className="text-white no-underline" to="/extras">EXTRAS</Link></li>
          <li><Link className="text-white no-underline" to="/contact">CONTACTO</Link></li>
        </ul>
      </nav>
    </header>
  )
}