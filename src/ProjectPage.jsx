import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
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
      <h1 className="text-center text-white text-4xl md:text-6xl font-bebas h1-span my-6">{formattedProjectName}</h1>

      <p className="max-w-4xl mx-auto text-white text-base md:text-lg px-4">
        <strong>Detalles sobre el proyectos van a ir acá</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam, voluptates deleniti, earum dignissimos expedita consequatur blanditiis quasi officiis porro pariatur ut similique magni autem! Error facere odit assumenda itaque.
      </p>

      <h3 className="text-white text-2xl md:text-3xl mt-6 mb-4 px-4">Stills:</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2 mb-6 p-2 bg-black">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image)}
            className="w-full block rounded-lg overflow-hidden focus:outline-none"
            aria-label={`Abrir imagen ${index + 1}`}
          >
            <img src={image} alt={`Imagen del proyecto ${index + 1}`} className="w-full h-[40vw] md:h-[26vw] object-cover transition-transform duration-500 hover:scale-105" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={handleCloseModal}>
          <button className="absolute top-6 right-6 text-4xl text-gray-300 hover:text-white" onClick={handleCloseModal} aria-label="Cerrar modal">&times;</button>
          <img src={selectedImage} alt="Vista completa" className="max-w-[85vw] max-h-[90vh] rounded" />
        </div>
      )}

      {/* Iframe responsivo por proyecto */}
      {formattedProjectName === 'castillo de arena' && (
        <div className="w-full px-4 mt-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded"
              src="https://www.youtube.com/embed/kdsB5FriV-0?start=172"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            />
          </div>
        </div>
      )}

      {formattedProjectName === 'cada cosa que no sé' && (
        <div className="w-full px-4 mt-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded"
              src="https://www.youtube.com/embed/F8fFVuaMbu8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            />
          </div>
        </div>
      )}

      {formattedProjectName === 'intervalo' && (
        <div className="w-full px-4 mt-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded"
              src="https://www.youtube.com/embed/l2T53phSMQM?start=405"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            />
          </div>
        </div>
      )}

      {/* Footer global */}
      <Footer />

      {/* Puedes agregar más condiciones para otros proyectos aquí */}
    </>
  );
}

export default ProjectPage