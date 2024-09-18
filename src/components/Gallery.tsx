"use client";

import React, { useState } from "react";
// images
import images from "@/components/ImagesData";
import Image from "next/image";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrevImage = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="main">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item">
            <Image
              src={image.thumbnail.src}
              alt={image.alt}
              height={300}
              width={300}
              className="gallery-img"
              onClick={() => openModal(index)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <div id="modal" className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={images[currentIndex].thumbnail.src}
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
}
