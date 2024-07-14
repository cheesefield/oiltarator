import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../style.css"; // css
// images
import images from "../components/ImagesData";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const openModal = (largeImage) => {
    setModalImg(largeImage);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
      </Helmet>
      <h1>{t("nav3")}</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.thumbnail}
              alt={image.alt}
              className="gallery-img"
              onClick={() => openModal(image.large)}
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
          <img className="modal-content" src={modalImg} alt="Large view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
