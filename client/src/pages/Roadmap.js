import React, { useState } from 'react';
import '../Css/Roadmap.css';
import { IntlProvider, FormattedMessage } from 'react-intl'; //importamos los formateadores

// import './sectionTop.css';
// import './sectionFin.css';
import Modal from '../componentes/Roadmap-components/Modal.js';
import PrimerEjemploDialog from '../componentes/Roadmap-components/modal_0.js';
import SegundEjemploDialog from '../componentes/Roadmap-components/modal_1.js';
import Imagenda from '../assets/img/img_da.png';
import Imagenmo from '../assets/img/img_mo.png';
import Imagenme from '../assets/img/img_m.png';
import notebook1 from '../assets/img/img_notebook1.png';
import computer_remove from '../assets/img/computer_remove.png';
import img_colabora from '../assets/img/img_colabora.png';
import img_emprendedora from '../assets/img/img_emprendedora.webp';
import img_spaceapps from '../assets/img/img_spaceapps.png';
import img_hacker from '../assets/img/img_hacker.jpg';
import img_university from '../assets/img/img_university.png';
import img_cow1 from '../assets/img/img_cow1.jpg';
import img_impresora from '../assets/img/img_impresora.jpg';
import img_virus from '../assets/img/img_virus.png';
import img_support from '../assets/img/img_support.jpg';
import img_support1 from '../assets/img/img_support1.png';
import img_testingmanual from '../assets/img/img_testingmanual.jpg';
import img_youtube from '../assets/img/img_youtube.png';
import img_testingqa from '../assets/img/img_testingqa.png';
import img_dev from '../assets/img/img_dev.webp';
import img_database from '../assets/img/img_database.jpg';
import img_agile from '../assets/img/img_agile.jpg';
import img_platzi from '../assets/img/img_platzi.jpg';
import img_utest from '../assets/img/img_utest.png';
import img_team from '../assets/img/img_team.webp';
import argentinaImage from '../assets/img/argentina_1.png';
import img_robot from '../assets/img/img_robot.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHospital, faMagnifyingGlass, faBrain, faRobot, faComputer, faLightbulb, faUsersGear, faUserGraduate, faAddressBook,
    faAddressCard, faAllergies, faArrowDown, faAnglesDown, faPersonSkiingNordic, faImage, faBug, faRocket, faFile
} from '@fortawesome/free-solid-svg-icons';


function Roadmap() {
    const [modals, setModals] = useState([]);

    const openModal = (index, text, imageSrc, text_btn, showButton = true) => {
        const updatedModals = [...modals];
        updatedModals[index] = { isOpen: true, text, imageSrc, text_btn, showButton };
        setModals(updatedModals);
    };


    const closeModal = (index) => {
        const updatedModals = [...modals];
        updatedModals[index] = { isOpen: false, text: '', imageSrc: '', text_btn: '' };
        setModals(updatedModals);
    };

    const handleMouseLeave = (index) => {
        setTimeout(() => closeModal(index), 30000000);
    };

    return (


        // ----------volver a version anterior retirar botones--------

        <>
            <div className="roadmap-container">
                <header className="Top-header">
                    <p className="Top-text">
                        <FormattedMessage id="roadmap.title" defaultMessage={" Error "} />
                    </p>
                    <p className="Trailer-text">
                        <FormattedMessage id="roadmap.subtitle" defaultMessage={" Error "} />
                    </p>
                    <div className="Arrow-container">
                        <div className="Arrow"></div>
                    </div>
                </header>
            </div>
            <div className="Fin">
                <p class="parrafo"><FormattedMessage id="roadmap.start" defaultMessage={" Error "} />
                </p>
            </div>
            <div className="road_container">
                <div className="road_timeline">
                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha1" defaultMessage={" Error "} />
                        </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faHospital} />
                            <h4><FormattedMessage id="roadmap.item1.title" defaultMessage={" Error "} />
                            </h4>
                            <p class="parrafo">
                                <FormattedMessage id="roadmap.item1.content" defaultMessage={" Error "} />

                            </p>
                            <div className="road_thumbs">
                                <div>
                                    <img className="road_img-fluid rounded road_img-fluid-id1" src={Imagenda} alt="Maxwell Admin" />
                                    <p class="parrafo">
                                        <FormattedMessage id="roadmap.item1.item" defaultMessage={" Error "} />

                                    </p>
                                </div>
                                <div>
                                    <img className="road_img-fluid rounded road_img-fluid-id1" src={Imagenme} alt="Maxwell Admin" />
                                    <p class="parrafo"><FormattedMessage id="roadmap.item1.item2" defaultMessage={" Error "} />
                                    </p>
                                </div>
                                <div>
                                    <img className="road_img-fluid rounded road_img-fluid-id1" src={Imagenmo} alt="Maxwell Admin" />
                                    <p class="parrafo">
                                        <FormattedMessage id="roadmap.item1.item1" defaultMessage={" Error "} />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="road_contenedor-modal">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(0, <p id='modal_text'>
                                            <FormattedMessage id="roadmap.item1.contentmodal" defaultMessage={" Error "} /> <a href="https://www.monumentoalabandera.gob.ar/page/recorrido" className='link-argentina'> <FormattedMessage id="roadmap.item1.contentmodal2" defaultMessage={" Error "} />
                                            </a>  <FormattedMessage id="roadmap.item1.contentmodal1" defaultMessage={" Error "} />

                                        </p>, argentinaImage, <FontAwesomeIcon icon={faImage} className="btn_icon-modal" />
                                        )}
                                        onMouseLeave={() => handleMouseLeave(0)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                    {/* Aquí se muestra el Modal solo si el modal en el índice 0 está definido en el arreglo modals */}
                                    {modals[0] && (
                                        <Modal
                                            isOpen={modals[0].isOpen}
                                            closeModal={() => closeModal(0)}
                                            text={modals[0].text}
                                            imageSrc={modals[0].imageSrc}
                                            text_btn={modals[0].text_btn}

                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------ */}

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha2" defaultMessage={" Error "} />
                        </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faMagnifyingGlass} />
                            <h4><FormattedMessage id="roadmap.item2.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item2.content" defaultMessage={" Error "} />
                            </p>
                            <div className="road_thumbs">
                                <div className="road_thumbs">
                                    <img className="road_img-fluid rounded" src={computer_remove} alt="Maxwell Admin" />
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(1,
                                            <FormattedMessage id="roadmap.item2.contentmodal" defaultMessage={" Error "} />

                                        )}
                                        onMouseLeave={() => handleMouseLeave(1)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                    {modals[1] && (
                                        <Modal
                                            isOpen={modals[1].isOpen}
                                            closeModal={() => closeModal(1)}
                                            text={modals[1].text}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ...otros elementos de la línea de tiempo con sus respectivos modales... */}

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha3" defaultMessage={" Error "} />
                        </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faBrain} />
                            <h4><FormattedMessage id="roadmap.item3.title" defaultMessage={" Error "} />
                            </h4>
                            <p class="parrafo">
                                <FormattedMessage id="roadmap.item3.content" defaultMessage={" Error "} />
                            </p>
                            <div>
                                <button
                                    className="modal_btn"
                                    onClick={() => openModal(2, <FormattedMessage id="roadmap.item3.contentmodal" defaultMessage={" Error "} />)}
                                    onMouseLeave={() => handleMouseLeave(2)}
                                >
                                    <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />                            </button>
                                {/* Aquí se muestra el Modal solo si el modal en el índice 0 está definido en el arreglo modals */}
                                {modals[2] && (
                                    <Modal
                                        isOpen={modals[2].isOpen}
                                        closeModal={() => closeModal(2)}
                                        text={modals[2].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha4" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faRobot} />
                            <h4><FormattedMessage id="roadmap.item4.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item4.content" defaultMessage={" Error "} /></p>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(3, <FormattedMessage id="roadmap.item4.contentmodal" defaultMessage={" Error "} />, img_robot)}
                                        onMouseLeave={() => handleMouseLeave(3)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                    {/* Aquí se muestra el Modal solo si el modal en el índice 0 está definido en el arreglo modals */}
                                    {modals[3] && (
                                        <Modal
                                            isOpen={modals[3].isOpen}
                                            closeModal={() => closeModal(3)}
                                            text={modals[3].text}
                                            imageSrc={modals[3].imageSrc}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha5" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faComputer} />
                            <h4><FormattedMessage id="roadmap.item5.title" defaultMessage={" Error "} /></h4>
                            <p className="road_no-margin"><FormattedMessage id="roadmap.item5.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="img-fluid img_modal--notebook rounded" src={notebook1} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(4, <FormattedMessage id="roadmap.item5.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(4)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[4] && (
                                    <Modal
                                        isOpen={modals[4].isOpen}
                                        closeModal={() => closeModal(4)}
                                        text={modals[4].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha6" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faUsersGear} />
                            <h4><FormattedMessage id="roadmap.item6.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item6.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded" src={img_colabora} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded" src={img_emprendedora} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(5, <FormattedMessage id="roadmap.item6.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(5)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[5] && (
                                    <Modal
                                        isOpen={modals[5].isOpen}
                                        closeModal={() => closeModal(5)}
                                        text={modals[5].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* -------------Aca adaptamos los nuevos botones y modal independiente---------- */}

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha7" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faLightbulb} />
                            <h4><FormattedMessage id="roadmap.item7.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"> <FormattedMessage id="roadmap.item7.content" defaultMessage={" Error "} /> <a href='https://www.accenture.com/ar-es' className='link-argentina'>Accenture</a>
                                <FormattedMessage id="roadmap.item7.content1" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded" src={img_spaceapps} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <div className="road_contenedor-modal">
                                        <PrimerEjemploDialog />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*------------------------------------------------------------------------------- */}

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha8" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faUserGraduate} />
                            <h4><FormattedMessage id="roadmap.item8.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item8.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_hacker} alt="Maxwell Admin" />

                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(15, <FormattedMessage id="roadmap.item8.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(15)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[15] && (
                                    <Modal
                                        isOpen={modals[15].isOpen}
                                        closeModal={() => closeModal(15)}
                                        text={modals[15].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha9" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faAddressBook} />
                            <h4><FormattedMessage id="roadmap.item9.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item9.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_university} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_cow1} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(6, <FormattedMessage id="roadmap.item9.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(6)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[6] && (
                                    <Modal
                                        isOpen={modals[6].isOpen}
                                        closeModal={() => closeModal(6)}
                                        text={modals[6].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha10" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faPersonSkiingNordic} />
                            <h4><FormattedMessage id="roadmap.item10.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item10.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_impresora} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_virus} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(7, <FormattedMessage id="roadmap.item10.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(7)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[7] && (
                                    <Modal
                                        isOpen={modals[7].isOpen}
                                        closeModal={() => closeModal(7)}
                                        text={modals[7].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>



                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha11" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faAddressCard} />
                            <h4><FormattedMessage id="roadmap.item11.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item11.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_support} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_support1} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(8, <FormattedMessage id="roadmap.item11.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(8)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[8] && (
                                    <Modal
                                        isOpen={modals[8].isOpen}
                                        closeModal={() => closeModal(8)}
                                        text={modals[8].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha12" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faAllergies} />
                            <h4><FormattedMessage id="roadmap.item12.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item12.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_testingmanual} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_youtube} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(9, <FormattedMessage id="roadmap.item12.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(9)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[9] && (
                                    <Modal
                                        isOpen={modals[9].isOpen}
                                        closeModal={() => closeModal(9)}
                                        text={modals[9].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha13" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon icon={faBug} className='i' />
                            <h4><FormattedMessage id="roadmap.item13.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item13.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded road_img-fluid-id1" src={img_testingqa} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(10, <FormattedMessage id="roadmap.item13.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(10)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[10] && (
                                    <Modal
                                        isOpen={modals[10].isOpen}
                                        closeModal={() => closeModal(10)}
                                        text={modals[10].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha14" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faAnglesDown} />
                            <h4><FormattedMessage id="roadmap.item14.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item14.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded" src={img_dev} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded" src={img_database} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(11, <FormattedMessage id="roadmap.item14.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(11)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[11] && (
                                    <Modal
                                        isOpen={modals[11].isOpen}
                                        closeModal={() => closeModal(11)}
                                        text={modals[11].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha15" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faRocket} />
                            <h4><FormattedMessage id="roadmap.item15.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item15.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded" src={img_agile} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded" src={img_platzi} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                    <button
                                        className="modal_btn"
                                        onClick={() => openModal(12, <FormattedMessage id="roadmap.item15.contentmodal" defaultMessage={" Error "} />)}
                                        onMouseLeave={() => handleMouseLeave(12)}
                                    >
                                        <FormattedMessage id="roadmap.button" defaultMessage={" Error "} />
                                    </button>
                                </div>
                                {modals[12] && (
                                    <Modal
                                        isOpen={modals[12].isOpen}
                                        closeModal={() => closeModal(12)}
                                        text={modals[12].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="road_timeline-row">
                        <div className="road_timeline-time">
                            <FormattedMessage id="roadmap.fecha16" defaultMessage={" Error "} />                    </div>
                        <div className="road_timeline-content">
                            <FontAwesomeIcon className='i' icon={faArrowDown} />
                            <h4><FormattedMessage id="roadmap.item16.title" defaultMessage={" Error "} /></h4>
                            <p class="parrafo"><FormattedMessage id="roadmap.item16.content" defaultMessage={" Error "} /></p>
                            <div className="road_thumbs">
                                <img className="road_img-fluid rounded" src={img_utest} alt="Maxwell Admin" />
                                <img className="road_img-fluid rounded" src={img_team} alt="Maxwell Admin" />
                            </div>
                            <div>
                                <div className="">
                                  {/* <SegundEjemploDialog /> */}

                                </div>
                                {modals[14] && (
                                    <Modal
                                        isOpen={modals[14].isOpen}
                                        closeModal={() => closeModal(14)}
                                        text={modals[14].text}
                                    />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="road_timeline-row">
                        <div className="road_timeline-content">
                            <p className="road_m-0">

                                <FormattedMessage id="roadmap.item17" defaultMessage={" Error "} />
                            </p>
                            <button className="i-vermas" onClick={() => window.location.href = 'https://discreet-random-049.notion.site/Plan-de-estudios-personal-Julian-Molineris-f623307b021c44cfb5c6aa76127bf30c?pvs=4'}>
                                <FontAwesomeIcon icon={faFile} className="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Fin">
                <p class="parrafo"><FormattedMessage id="roadmap.end" defaultMessage={" Error "} />  </p>
            </div>
        </>
    );
}

export default Roadmap;
