import { Link } from 'react-router-dom'

export function Projects ({ projectName, imgFileName }) {
  const slug = projectName.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="w-full p-2">
      <Link to={`/projects/${slug}`} className="block">
        <div className="relative w-full h-[50vw] md:h-[26vw] max-h-[26vw] overflow-hidden rounded-lg">
          <img
            src={`./img/ProjectsImgs/${imgFileName}`}
            alt={projectName}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-[2vw] md:text-2xl font-bebas opacity-0 hover:opacity-100 transition-opacity duration-200">
            {projectName}
          </div>
        </div>
      </Link>
    </div>
  )
}