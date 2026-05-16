import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import './pages.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    "/gallery-0.webp",
    "/gallery-1.webp",
    "/gallery-2.webp",
    "/gallery-3.webp",
    "/gallery-4.webp",
    "/gallery-5.webp",
    "/gallery-6.webp",
    "/gallery-7.webp",
    "/gallery-8.webp",
    "/gallery-9.webp",
    "/gallery-10.webp",
    "/gallery-11.webp",
    "/gallery-12.webp",
    "/gallery-13.webp",
    "/gallery-14.webp"
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
