import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ProjectPage from './ProjectPage.jsx'
import './App.css'
import { Home } from './Home.jsx'

export function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route
            path="/projects/:projectName"
            element={<ProjectPage />}
          /> {/* Página de proyecto */}
        </Routes>
      </Router>
    </>
  )
}
