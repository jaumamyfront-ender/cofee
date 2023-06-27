import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
    document.body.classList.add("lock");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("lock");
  };

  return (
    <div className="centergalery">
      <div className="basment__galery">
        <div className="basement__image">
          <img src="./assets/galleryItem_1.jpg" alt="" />
          <img
            className="zoom"
            src="./assets/itemZoom.png"
            alt=""
            style={{ objectFit: "contain" }}
            onClick={() => openModal("./assets/galleryItem_1.jpg")}
          />
        </div>
        <div className="basement__image">
          <img src="./assets/galleryItem_3.jpg" alt="" />
          <img
            className="zoom"
            src="./assets/itemZoom.png"
            alt=""
            style={{ objectFit: "contain" }}
            onClick={() => openModal("./assets/galleryItem_3.jpg")}
          />
        </div>
        <div className="basement__image">
          <img src="./assets/galleryItem_4.jpg" alt="" />
          <img
            className="zoom"
            src="./assets/itemZoom.png"
            alt=""
            style={{ objectFit: "contain" }}
            onClick={() => openModal("./assets/galleryItem_4.jpg")}
          />
        </div>
        <div className="basement__image position">
          <img src="./assets/imgDescOne.jpg" alt="" />
          <img
            className="zoom"
            src="./assets/itemZoom.png"
            alt=""
            style={{ objectFit: "contain" }}
            onClick={() => openModal("./assets/imgDescOne.jpg")}
          />
        </div>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close" onClick={closeModal}>
              X
            </div>
            <img src={selectedImage} alt="#" className="item__img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
