import React, { useState, useEffect } from 'react';
import '../../Css/Modal.css';
import '../../Css/Roadmap.css';
import { SecondModal } from './SecondModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { IntlProvider, FormattedMessage } from 'react-intl'; //importamos los formateadores


const Modal = ({ isOpen, closeModal, text, imageSrc, text_btn }) => {
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const toggleSecondModal = () => {
    setSecondModalOpen(!isSecondModalOpen);
  };

  const handleCloseModal = () => {
    closeModal();
    setSecondModalOpen(false);
  };

  useEffect(() => {
    let closingTimeout;
    if (isOpen) {
      closingTimeout = setTimeout(handleCloseModal, 15000000);
    }

    return () => {
      clearTimeout(closingTimeout);
    };
  }, [isOpen]);

  return (
    <div className="modal">
      <div className="modal_content">
        <p class="parrafo" id="modal_text">
        <FormattedMessage id="roadmap.item7.contentmodal" defaultMessage={" Error "}/>
        </p>
        <button className="modal_btn-img btn-icon-modal" onClick={toggleSecondModal}>
        <FontAwesomeIcon icon={faImage} className="i_icon-modal" />
</button>
<button className="modal_close-btn modal_btn-img btn-icon-modal" onClick={handleCloseModal}>
<FontAwesomeIcon icon={faTimesCircle} className="i_icon-modal" />
        </button> 
        {isSecondModalOpen && <SecondModal closeModal={toggleSecondModal} />}
       
      </div>
    </div>
  );
};

const PrimerEjemploDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const mostrarDialogo = () => {
    setShowDialog(true);
  };

  const cerrarDialogo = () => {
    setShowDialog(false);
  };

  return (
    <div id="PrimerEjemploDialog">
      <button className="mostrar-modal modal_btn" onClick={mostrarDialogo}>
        Read more...
      </button>
      {showDialog && (
        <Modal
          isOpen={showDialog}
          closeModal={cerrarDialogo}
          text="On February 27, 1812, General Manuel Belgrano raised the newly created Argentine flag on the shores of the Paraná, for the first time. Because of this, Rosario is known as the 'Cradle of the Argentine Flag'."
          imageSrc="img/argentina_1.png"
          text_btn="Click Me"
        />
      )}
    </div>
  );
};

export default PrimerEjemploDialog;
