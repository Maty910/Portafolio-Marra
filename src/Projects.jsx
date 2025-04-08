import { Link } from 'react-router-dom'

export function Projects ({ projectName, imgFileName }) {
  return ( 
    <>
      <div className="pm-project">
        <Link to={`/projects/${projectName.replace(/\s+/g, '-').toLowerCase()}`}>
          <div className="pm-project-image">
            <img src={`./../public/img/${imgFileName}`} alt="Imagen del proyecto"/>
            <span className="pm-project-text">{projectName}</span>
          </div>
        </Link>
      </div>
    </>
  )
}