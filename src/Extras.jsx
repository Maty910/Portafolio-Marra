const Extras = () => {
  // Datos simulados para la sección Extras (Behind the Scenes, Gear, etc.)
  const extraItems = [
    { id: 1, title: 'BTS - Rodaje Nocturno', category: 'Behind The Scenes', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, title: 'Setup de Iluminación', category: 'Tech Specs', img: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, title: 'Color Grading Process', category: 'Post', img: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, title: 'Rodaje en Exterior', category: 'Location', img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, title: 'Camera Rig', category: 'Gear', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { id: 6, title: 'Festival de Cine', category: 'Events', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <div className="extras-container fade-in">
      <div className="extras-hero">
        <h2>EXTRAS</h2>
        <p>Behind the scenes, material inédito y procesos técnicos.</p>
      </div>

      <div className="extras-grid">
        {extraItems.map((item) => (
          <div key={item.id} className="extra-card">
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <span>{item.category}</span>
              </div>
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extras;