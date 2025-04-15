// Component that renders the header of the page with a logo and a navigation bar

export function Header () {
  return (
    <header className="pm-header">
        <nav>
          <div className="logo">
            <h1>Joaquín Marraccini</h1>
            <p>Dir. de Fotografía</p>
          </div>
          <ul className="nav">
            <li className="nav-button"><a href="#home">Home</a></li>
            <li className="nav-button"><a href="#projects">Projects</a></li>
            <li className="nav-button"><a href="#about">About</a></li>
            <li className="nav-button"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  )
}
