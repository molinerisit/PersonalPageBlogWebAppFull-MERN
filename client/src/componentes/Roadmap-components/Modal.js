import React, { useState } from 'react';
import '../../Css/Modalo.css';
import {SecondModal, ThirdModal } from './SecondModal';

function Modal({ isOpen, closeModal, text, imageSrc, text_btn }) {
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const toggleSecondModal = () => {
    setSecondModalOpen(!isSecondModalOpen);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal_content">
        {imageSrc && <img className="modal_img" src={imageSrc} alt="Imagen" />}
        <p class="parrafo" id="modal_text">{text}</p>
      </div>
    </div>
  );
}

export default Modal;
