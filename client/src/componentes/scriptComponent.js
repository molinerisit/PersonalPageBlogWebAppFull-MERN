import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

Modal.setAppElement('#root');

const ContactPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const openPortfolioModal = () => {
    setIsPortfolioModalOpen(true);
  };

  const closePortfolioModal = () => {
    setIsPortfolioModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar la lógica para enviar el formulario de contacto aquí
  };

  return (
    <div className="container-all" id="move-content">
      <main className="main-contact">
        <div className="espacio-contact"></div>
        <div className="texto-uno">
          <h2 className="titulo-cel">Julian´s phone</h2>
        </div>
        <div className="contenedor-contact">
          <div className="imagen-cel">
            <div className="btn-container" id="img-cel">
              <div className="item1" onClick={openPortfolioModal}>
                <FontAwesomeIcon className="btn-red" icon={faPhone} />
                <p className="nombre">Telefono</p>
              </div>
              <div className="item4" onClick={openContactModal}>
                <FontAwesomeIcon className="btn-red" icon={faEnvelope} />
                <p className="nombre">Correo</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal
        isOpen={isContactModalOpen}
        onRequestClose={closeContactModal}
        className="eins-modal"
        overlayClassName="eins-modal-overlay"
      >
        <div className="eins-modal-content">
          <div className="eins-modal-close" onClick={closeContactModal}>
            &times;
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label>Tu Correo Electrónico:</label>
            <input type="email" name="_replyto" />

            <label>Tu Mensaje:</label>
            <textarea name="message"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={isPortfolioModalOpen}
        onRequestClose={closePortfolioModal}
        className="eins-modal"
        overlayClassName="eins-modal-overlay"
      >
        <div className="eins-modal-content">
          <div className="eins-modal-close" onClick={closePortfolioModal}>
            &times;
          </div>
          {/* Contenido del modal de portafolio */}
          <h2>Contenido del modal de portafolio</h2>
          <p>Aquí puedes agregar cualquier contenido que desees mostrar en el modal de portafolio.</p>
        </div>
      </Modal>
    </div>
  );
};

export default ContactPage;
