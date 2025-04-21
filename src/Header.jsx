import { Link } from 'react-router-dom';

// Component that renders the header of the page with a logo and a navigation bar

export function Header () {
  return (
    <header className="pm-header">
      <nav>
        <div className="logo">
          <h1>Joaquín Marraccini</h1>
          {/* <p>Dir. de Fotografía</p> */}
        </div>
        <ul className="nav">
          <li className="nav-button"><Link to="/">HOME</Link></li>
          <li className="nav-button"><Link to="/#projects">PROJECTS</Link></li>
          <li className="nav-button"><Link to="/#about">ABOUT ME</Link></li>
          <li className="nav-button"><Link to="/#contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  )
}