import React from "react";
import "../Css/Portfolio.css";
import Header from "../componentes/AppHeader.js";
import ScriptComponent from "../componentes/scriptComponent.js"; // "S" en mayúscula
import M from "materialize-css"; // Importa la biblioteca Materialize CSS

import CvioImage from "../assets/img/Cvio.png";
import InspirateImage from "../assets/img/Inspirate.png";
import BeautyHouseImage from "../assets/img/Beautyhouse.png";
import SlifeImage from "../assets/img/slife.png";
import PatataBitImage from "../assets/img/Patatabit.png";
import Pantalla from "../assets/img/pantalla-img.png";
import nueva from "../assets/img/Patatabit.png";
import  MercadoCarnes from "../assets/img/MercadoCarnes.png";
import MChat from "../assets/img/MChat.png";
import ComunidadVibe from "../assets/img/Vibe.png";
import Brandmonkeydigital from "../assets/img/Brandmonkeydigital.png";


import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl'; //importamos los formateadores


function Portfolio() {
  // Inicializar Materialize CSS después de que el componente se haya montado
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  // Función para manejar el clic en los botones del carousel
  const handleCarouselButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Header />
      <div className="espacio"></div>
      <div className="container-all" id="move-content">
        <section className="magico">
          <div className="contenido">
            <img src={Pantalla} alt="" id="img-tablet" />
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <div className="carousel center-align">
                    {/* Item 0 */}
                    <div className="carousel-item">
                      <img src={MChat} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "https://mchatserver.online/")
                            }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Mchat-com-1087a00ca64e4e14b73eeda88cc149cc?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="carousel-item">
                      <img src={MercadoCarnes} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "https://mercado-carnes-deploy-frontend.vercel.app/")
                          }
                          className="button-Portfolio"
                        >
                          {" "}
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/MercadoCarnes-com-1c373e26da824e65bcf7818250f3eb41?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                    {/* Item 5 */}
                    <div className="carousel-item">
                      <img src={PatataBitImage} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "../webs/batatabit/index.html")
                          } 
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Batatabit-com-b8c38beb58704cd49e8bd022546f565d?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                    {/* Item 6 */}                    
                    {/* Item 7 */}
                    <div className="carousel-item">
                      <img src={InspirateImage} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "../webs/inspirate.ar/index.html")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Inspirate-com-1e6279a32f774d7181c25fc46c1bd8de?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                    {/* Item 7 */}
                    <div className="carousel-item">
                      <img src={CvioImage} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "../webs/cvio")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Cvio-com-1e6279a32f774d7181c25fc46c1bd8de?pvs=4/")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                         {/* Item 7 */}
                         <div className="carousel-item">
                      <img src={Brandmonkeydigital} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "https://brandmonkeydigital.com/")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Inspirate-com-1e6279a32f774d7181c25fc46c1bd8de?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                         {/* Item 7 */}
                         <div className="carousel-item">
                      <img src={ComunidadVibe} alt="" className="contenido" />
                      <div className="flex_container">
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Comunidadvibe-com-a4e0798bf8934972a0acf914710a3a05?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button"
                            defaultMessage={"Visit"}
                          />
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "https://discreet-random-049.notion.site/Comunidadvibe-com-a4e0798bf8934972a0acf914710a3a05?pvs=4")
                          }
                          className="button-Portfolio"
                        >
                          <FormattedMessage
                            id="portfolio.button1"
                            defaultMessage={"Documentation"}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="espacio"></div>
      </div>
      {/* <ScriptComponent /> */}
    </div>
  );
}

export default Portfolio;
