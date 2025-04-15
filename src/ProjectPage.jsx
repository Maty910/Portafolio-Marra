import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './ProjectPage.css'
import { Header } from './Header.jsx'

function ProjectPage () {
  const { projectName } = useParams()

  const formattedProjectName = projectName.replace(/-/g, ' ')

  const [images, setImages] = useState([]);
  useEffect(() => {
    const selectImagesByProject = (projectName) => {
      switch (projectName) {
        case 'castillo-de-arena':
          return import.meta.glob('./assets/Stills Castillos de arena/*.{png,jpg,jpeg,svg}');
        case 'cada-cosa-que-no-sé':
            return import.meta.glob('./assets/Stills ccqns/*.{png,jpg,jpeg,svg}');
        default:
          return import.meta.glob('./img/DefaultProject/*.{png,jpg,jpeg,svg}');
      }
    };

    const importAll = selectImagesByProject(projectName);

    try {
      const loadImages = async () => {
        const imagePaths = await Promise.all(
          Object.values(importAll).map((importFn) => importFn().then((mod) => mod.default))
        );
        setImages(imagePaths);
      };
      loadImages();
    } catch (error) {
      console.error('Error loading images:', error);
    }
  }, [projectName]);
  // useEffect(() => {
  //   try {
  //     const importAll = import.meta.glob('../public/img/Stills Castillos de arena/*.{png,jpg,jpeg,svg}');
  //     const loadImages = async () => {
  //       const imagePaths = await Promise.all(
  //         Object.values(importAll).map((importFn) => importFn().then((mod) => mod.default))
  //       );
  //       setImages(imagePaths);
  //     };
  //     loadImages();
  //   } catch (error) {
  //     console.error('Error loading images:', error);
  //   }
  // }, []);

  return (
    <>
    <Header />
      <h1>
        Project: {`${formattedProjectName}`}
      </h1>
      <p>Details about the project will go here.</p>
      <h3>Stills:</h3>
      <div className="pm-stills-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen del proyecto ${index + 1}`} />
        ))}
      </div>
    </>
  );
}

export default ProjectPage