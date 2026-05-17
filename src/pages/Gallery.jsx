import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import './pages.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    "/images/gallery-0.webp",
    "/images/gallery-1.webp",
    "/images/gallery-2.webp",
    "/images/gallery-3.webp",
    "/images/gallery-4.webp",
    "/images/gallery-5.webp",
    "/images/gallery-6.webp",
    "/images/gallery-7.webp",
    "/images/gallery-8.webp",
    "/images/gallery-9.webp",
    "/images/gallery-10.webp",
    "/images/gallery-11.webp",
    "/images/gallery-12.webp",
    "/images/gallery-13.webp"
  ];

  return (
    <div className="gallery-page">
      <header className="page-header">
        <div className="container">
          <h1>Visual Journey</h1>
          <p>Glimpses of life at Spice & Brew</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo, i) => (
              <div key={i} className="gallery-item fade-in" onClick={() => setSelectedImg(photo)} title="View Image">
                <img src={photo} alt={`Gallery Image ${i + 1}`} width="800" height="600" loading="lazy" />
                <div className="insta-overlay">
                  <FaSearchPlus />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImg(null)}><FaTimes /></button>
            <img src={selectedImg} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
