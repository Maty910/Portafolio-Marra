import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ProjectPage from './ProjectPage.jsx'
import ProjectsSection from './ProjectsSection.jsx'
import PicturesSection from './PicturesSection.jsx'
import Contact from './Contact.jsx'

import './App.css'
import { Home } from './Home.jsx'

export function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          /> {/* Página principal */}
          <Route
            path="/projects/:projectName"
            element={<ProjectPage />}
          /> {/* Página de proyecto */}
          <Route
            path="/projects"
            element={<ProjectsSection />}
          /> {/* Sección de proyectos */}
        <Route
            path="/pictures"
            element={<PicturesSection />}
          /> {/* Sección de fotografías */}
        <Route
            path="/contact"
            element={<Contact />}
          /> {/* Sección de contacto */}
        </Routes>
      </Router>
    </>
  )
}
