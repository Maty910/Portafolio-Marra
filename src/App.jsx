import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrandProvider } from './BrandContext.jsx'; // <--- IMPORTANTE

// Componentes
import { Home } from './Home.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ProjectPage from './ProjectPage.jsx';
import ImagesSection from './ImagesSection.jsx';
import Extras from './Extras.jsx';
import Contact from './Contact.jsx';

import './index.css';

export function App() {
  return (
    <BrandProvider> {/* <--- Envolvemos la app aquí */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/projects/:projectName" element={<ProjectPage />} />
          <Route path="/images" element={<ImagesSection />} />
          <Route path="/extras" element={<Extras />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </BrandProvider>
  );
}