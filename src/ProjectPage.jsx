import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function ProjectPage () {
  const { projectName } = useParams()

  const formattedProjectName = projectName.replace(/-/g, ' ')

  const [images, setImages] = useState([]);

  useEffect(() => {
    try {
      const importAll = import.meta.glob('../public/img/Stills Castillos de arena/*.{png,jpg,jpeg,svg}');
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
  }, []);

  return (
    <div>
      <h1>
        Project: {`${formattedProjectName}`}
      </h1>
      <p>Details about the project will go here.</p>
      <h3>Stills</h3>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen del proyecto ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage