import React, { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import './pages.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    "/gallery-0.jpg",
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.png",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
    "/gallery-8.jpg",
    "/gallery-9.jpg",
    "/gallery-10.jpg",
    "/gallery-11.jpg",
    "/gallery-12.jpg",
    "/gallery-13.jpg",
    "/gallery-14.png"
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
                <img src={photo} alt={`Gallery Image ${i + 1}`} loading="lazy" />
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
