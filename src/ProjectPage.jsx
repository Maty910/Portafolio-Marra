import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './ProjectPage.css'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'

function ProjectPage () {
  const { projectName } = useParams()

  const formattedProjectName = projectName.replace(/-/g, ' ')

  const [images, setImages] = useState([]);
  useEffect(() => {
    const selectImagesByProject = (projectName) => {
      switch (projectName) {
        case 'castillo-de-arena':
          return import.meta.glob('./assets/Stills Castillos de arena/*.{png,jpg,jpeg,svg}')
        case 'cada-cosa-que-no-sé':
            return import.meta.glob('./assets/Stills ccqns/*.{png,jpg,jpeg,svg}')
        case 'la-misma-sombra':
            return import.meta.glob('./assets/Stills LMS/*.{png,jpg,jpeg,svg}')
        case 'intervalo':
            return import.meta.glob('./assets/Stills Intervalo/*.{png,jpg,jpeg,svg}')
        default:
          return import.meta.glob('./img/DefaultProject/*.{png,jpg,jpeg,svg}')
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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Header />
      <h1 className='pm-project-title'>
        {`${formattedProjectName}`}
      </h1>
      <p className='pm-project-details'>
        <b>Detalles sobre el proyectos van a ir acá</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam, voluptates deleniti, earum dignissimos expedita consequatur blanditiis quasi officiis porro pariatur ut similique magni autem! Error facere odit assumenda itaque.
      </p>
      <h3 className='pm-project-h3'>Stills:</h3>
      <div className="pm-stills-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen del proyecto ${index + 1}`}
            className="pm-picture"
            onClick={() => handleImageClick(image)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="pm-modal" onClick={handleCloseModal}>
          <span className="pm-close" onClick={handleCloseModal}>&times;</span>
          <img className="pm-modal-content" src={selectedImage} alt="Vista completa" />
        </div>
      )}

      {formattedProjectName === 'castillo de arena' && (
        <>
          <iframe
            width="1000"
            // height="700"
            src="https://www.youtube.com/embed/kdsB5FriV-0?start=172"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
          <Footer />
        </>
      )}

      {formattedProjectName === 'cada cosa que no sé' && (
        <>
          <iframe
            width="1000"
            // height="700"
            src="https://www.youtube.com/embed/F8fFVuaMbu8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
          <Footer />
        </>
      )}

      {formattedProjectName === 'bajo la misma sombra' && (
        <Footer />
      )}

      {formattedProjectName === 'intervalo' && (
        <>
          <iframe
            width="1000"
            // height="700"
            src="https://www.youtube.com/embed/l2T53phSMQM?start=405"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
          <Footer />
        </>
      )}

      {/* Puedes agregar más condiciones para otros proyectos aquí */}
    </>
  );
}

export default ProjectPage