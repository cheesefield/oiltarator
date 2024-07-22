import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../style.css"; // css
// images
import images from "../components/ImagesData";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • Gallery</title>
        <meta name="title" content="OilTarator • Gallery" />
        <meta
          name="description"
          content="Explore our gallery to see the heart of our oil company in action. From drilling and extraction to refining and distribution, witness the processes and people that drive our commitment to energy excellence and sustainability."
        />
        <meta property="og:url" content="https://oiltarator.com/gallery" />
        <meta property="og:title" content="OilTarator • Gallery" />
        <meta
          property="og:description"
          content="Explore our gallery to see the heart of our oil company in action. From drilling and extraction to refining and distribution, witness the processes and people that drive our commitment to energy excellence and sustainability."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />
        <meta name="twitter:url" content="https://oiltarator.com/contact" />
        <meta name="twitter:title" content="OilTarator • contact" />
        <meta
          name="twitter:description"
          content="Explore our gallery to see the heart of our oil company in action. From drilling and extraction to refining and distribution, witness the processes and people that drive our commitment to energy excellence and sustainability."
        />
        <meta
          name="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
        <link href="www.oiltarator.com/gallery" rel="canonical" />
      </Helmet>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.thumbnail}
              alt={image.alt}
              height="300"
              width="300"
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div id="modal" className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={images[currentIndex].large}
            alt={images[currentIndex].alt}
          />
          <button className="prev" onClick={showPrevImage}>
            &#10094;
          </button>
          <button className="next" onClick={showNextImage}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
