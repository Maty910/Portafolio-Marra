import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes de Páginas
import { Home } from './Home.jsx';
import ProjectsSection from './ProjectsSection.jsx'; // La página de grilla
import ProjectPage from './ProjectPage.jsx';         // La página de detalle
import ImagesSection from './ImagesSection.jsx';
import Extras from './Extras.jsx';
import Contact from './Contact.jsx';

// Estilos globales
import './index.css';

export function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Sección de proyectos (Grilla) */}
        <Route path="/projects" element={<ProjectsSection />} />
        
        {/* Página de proyecto individual (Detalle) */}
        <Route path="/projects/:projectName" element={<ProjectPage />} />
        
        {/* Sección de fotografías */}
        <Route path="/images" element={<ImagesSection />} />
        
        {/* Sección de extras */}
        <Route path="/extras" element={<Extras />} />
        
        {/* Sección de contacto */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}