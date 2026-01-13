import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrandProvider } from './BrandContext.jsx'; // <--- IMPORTANTE
import { LanguageProvider } from './LanguageContext.jsx';

// Componentes
import { Home } from './Home.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ProjectPage from './ProjectPage.jsx';
import ImagesSection from './ImagesSection.jsx';
import Experience from "./Experience.jsx";
import Contact from './Contact.jsx';

import './index.css';

export function App() {
  return (
    <LanguageProvider>
      <BrandProvider> {/* <--- Envolvemos la app aquí */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/projects/:projectName" element={<ProjectPage />} />
            <Route path="/images" element={<ImagesSection />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </BrandProvider>
    </LanguageProvider>
  );
}