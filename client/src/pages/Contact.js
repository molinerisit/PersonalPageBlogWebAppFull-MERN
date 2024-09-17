import React, { useState } from "react";
import Modal from "../componentes/Modal";
import icoUser from "../assets/Ico/ico-user.png";
import icoTel from "../assets/Ico/ico-tel.png";
import icoInstagram from "../assets/Ico/ico-instagram.png";
import icoLinkedin from "../assets/Ico/ico-linkedin.png";
import icoGmail from "../assets/Ico/ico-gmail.png";
import icoTwitter from "../assets/Ico/ico-twitter.png";
import icoYoutube from "../assets/Ico/ico-youtube.png";
import icoWhatsapp from "../assets/Ico/ico-whatsapp.png";
import { FormattedMessage } from "react-intl";
import "../Css/styleanimation.css";

const Contact = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  return (
    <div className="relative">
      {/* Modal for Call and Message */}
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <div className="p-4 flex flex-col items-center text-center">
      
          <img src={icoUser} alt="" className="w-24 h-24 mb-4 rounded-full" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              <FormattedMessage id="contact.modal.label" defaultMessage={"Call"} />
            </h3>
            <h3 className="text-lg font-semibold mb-4">
              <FormattedMessage id="contact.modal.label1" defaultMessage={"Message"} />
            </h3>
            <div className="flex justify-center gap-4">
              <a href="tel:+543412527455">
                <img src={icoTel} alt="" className="w-12 h-12 rounded-full" />
              </a>
              <a href="https://wa.me/+54543412527455?text=%C2%A1Hola%20Julian!">
                <img src={icoWhatsapp} alt="" className="w-12 h-12 rounded-full" />
              </a>
            </div>
          </div>
          <button
            onClick={() => cambiarEstadoModal1(!estadoModal1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            <FormattedMessage id="contact.modal.button" defaultMessage={"Accept"} />
          </button>
        </div>
      </Modal>

      {/* Modal for Email Form */}
      <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2} titulo="Hola">
        <div className="p-4 flex flex-col items-center text-center">
          <div className="w-full max-w-md">
            <form
              className="flex flex-col gap-4"
              action="https://formspree.io/f/xeqdwlbq"
              method="POST"
            >
              <label className="flex flex-col">
                <span className="text-lg font-semibold">
                  <FormattedMessage id="contact.modal.label2" defaultMessage={"Your Email"} />
                </span>
                <input
                  type="email"
                  name="_replyto"
                  className="mt-1 p-2 border border-gray-300 rounded-lg"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-lg font-semibold">
                  <FormattedMessage id="contact.modal.label3" defaultMessage={"Your message"} />
                </span>
                <textarea
                  name="message"
                  className="mt-1 p-2 border border-gray-300 rounded-lg"
                ></textarea>
              </label>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              >
                <FormattedMessage id="contact.modal.button1" defaultMessage={"Send"} />
              </button>
            </form>
          </div>
          <button
            onClick={() => cambiarEstadoModal2(!estadoModal2)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            <FormattedMessage id="contact.modal.button" defaultMessage={"Accept"} />
          </button>
        </div>
      </Modal>

      {/* Main Contact Section */}
      <main className="mt-5 py-12 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('../assets/img/cel-img.png')` }}>
       
        <div className="flex flex-wrap justify-center gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="flex flex-col items-center text-center animate-bubble">
              <a onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                <img className="w-16 h-16 rounded-full border border-gray-600" src={icoTel} alt="" />
              </a>
              <p className="text-lg mt-2 text-white">
                <FormattedMessage id="contact.element.tel" defaultMessage={"Telephone"} />
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-bubble">
              <a href="https://www.instagram.com/julianmolineris/" target="_blank" rel="noopener noreferrer">
                <img className="w-16 h-16 rounded-full border border-gray-600" src={icoInstagram} alt="" />
              </a>
              <p className="text-lg mt-2 text-white">Instagram</p>
            </div>
            <div className="flex flex-col items-center text-center animate-bubble">
              <a href="https://www.linkedin.com/in/julianmolineris/" target="_blank" rel="noopener noreferrer">
                <img className="w-16 h-16 rounded-full border border-gray-600" src={icoLinkedin} alt="" />
              </a>
              <p className="text-lg mt-2 text-white">Linkedin</p>
            </div>
            <div className="flex flex-col items-center text-center animate-bubble">
              <a onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                <img className="w-16 h-16 rounded-full border border-gray-600" src={icoGmail} alt="" />
              </a>
              <p className="text-lg mt-2 text-white">
                <FormattedMessage id="contact.element.email" defaultMessage={"Email"} />
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-bubble">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img className="w-16 h-16 rounded-full border border-gray-600" src={icoTwitter} alt="" />
              </a>
              <p className="text-lg mt-2 text-white">Twitter</p>
            </div>
            <div className="flex flex-col items-center text-center animate-bubble">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img className="w-16 h-16 rounded-full border border-gray-600" src={icoYoutube} alt="" />
              </a>
              <p className="text-lg mt-2 text-white">Youtube</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
