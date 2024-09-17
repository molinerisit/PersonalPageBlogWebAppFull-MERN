import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../componentes/AppHeader";
import postman from "../assets/img/postman-icon.png";
import jira from "../assets/img/jira-icon.png";
import selenium from "../assets/img/selenium-icon.png";
import jmeter from "../assets/img/jmeter-icon.png";
import vscode from "../assets/img/vscode-icon.jpg";
import azure from "../assets/img/azure-icon.png";
import mysql from "../assets/img/mysql-icon.png";
import mongo from "../assets/img/mongo-icon.png";
import react from "../assets/img/react-icon.png";
import node from "../assets/img/node-icon.png";
import java from "../assets/img/java-icon.png";
import eclipse from "../assets/img/eclipse-icon.png";
import javascript from "../assets/img/js-icon.png";
import junit from "../assets/img/junit-icon.png";
import sql from "../assets/img/sql-icon.png";
import educacionit from "../assets/img/educacionit-icon.png";
import coursera from "../assets/img/coursera-icon.png";
import google from "../assets/img/google-icon.png";
import udemy from "../assets/img/udemy-icon.png";
import platzi from "../assets/img/platzi-icon.png";
import egg from "../assets/img/egg-icon.png";
import oracle from "../assets/img/oracle-icon.png";
import cisco from "../assets/img/cisco-icon.png";
import me from "../assets/img/me-icon2.png";
import englandFlag from "../assets/img/england.webp";
import argentinaFlag from "../assets/img/argentina.webp";
import Chart from "chart.js/auto";
import { IntlProvider, FormattedMessage } from "react-intl"; //importamos los formateadores

function CvOnline() {
  useEffect(() => {
    // Datos del gráfico
    const data = {
      labels: [
        "Creatividad",
        "Objetividad",
        "Efectividad",
        "Organización",
        "Liderazgo",
        "Autonomía",
      ],
      datasets: [
        {
          label: "Habilidades",
          data: [20, 19, 18, 17, 20, 14],
          backgroundColor: "green",
          borderColor: "black",
        },
      ],
    };

    // Opciones del gráfico
    const options = {
      indexAxis: "y",
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    const ctx = document
      .getElementById("Chart-softhabilities")
      .getContext("2d");
    const previousChart = Chart.getChart(ctx); // Obtener la instancia del gráfico anterior

    if (previousChart) {
      // Si hay un gráfico previo, destruirlo antes de crear uno nuevo
      previousChart.destroy();
    }

    // Crear el nuevo gráfico
    new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <img
              src={me}
              alt="Julian Molineris"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                <FormattedMessage
                  id="cv.title"
                  defaultMessage={" Developer | QA "}
                />
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 mt-2">
                <FormattedMessage
                  id="cv.subtitle"
                  defaultMessage={" ¡Hi, I am Julian Molineris! "}
                />
              </h1>
            </div>
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                <FormattedMessage
                  id="cv.contact"
                  defaultMessage={" Contact "}
                />
              </h1>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-blue-500 mr-2"
                  />
                  <a
                    className="text-blue-600 hover:underline"
                    href="tel:+543412527455"
                  >
                    +54 (341) 2527-455
                  </a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500 mr-2"
                  />
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:molinerisjulian@gmail.com"
                  >
                    molinerisjulian@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    className="text-blue-500 mr-2"
                  />
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://linkedin.com/in/julianmolineris/"
                  >
                    in/julianmolineris/
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <aside>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <FormattedMessage
                    id="cv.skills"
                    defaultMessage={" Skills "}
                  />
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">MERN Stack</h2>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">
                      <FormattedMessage
                        id="cv.abilities.item"
                        defaultMessage={" Project management "}
                      />
                    </h2>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">
                      <FormattedMessage
                        id="cv.abilities.item1"
                        defaultMessage={" Databases "}
                      />
                    </h2>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">
                      <FormattedMessage
                        id="cv.abilities.item2"
                        defaultMessage={" Manual/Automation testing "}
                      />
                    </h2>
                  </div>
                  <button
                    onClick={() => {}}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  >
                    <FormattedMessage
                      id="cv.button1"
                      defaultMessage={" See more "}
                    />
                  </button>
                </div>
              </aside>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <FormattedMessage
                    id="cv.abilities"
                    defaultMessage={" Abilities "}
                  />
                </h2>

                <canvas
                  id="Chart-softhabilities"
                  className="w-full h-64"
                ></canvas>
                <h2 className="text-xl font-semibold text-gray-800 mt-6">
                  <FormattedMessage
                    id="cv.languagues"
                    defaultMessage={"Languages"}
                  />
                </h2>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={englandFlag}
                      alt="English"
                      className="w-12 h-12"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">
                        <FormattedMessage
                          id="cv.languagues.eng"
                          defaultMessage={"Intermediate"}
                        />
                        <br />
                        <FormattedMessage
                          id="cv.languagues.eng1"
                          defaultMessage={"English"}
                        />
                        (B2)
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={argentinaFlag}
                      alt="Spanish"
                      className="w-12 h-12"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">
                        <FormattedMessage
                          id="cv.languagues.esp"
                          defaultMessage={" Native "}
                        />
                        <br />
                        <FormattedMessage
                          id="cv.languagues.esp1"
                          defaultMessage={"Spanish"}
                        />
                        (AR)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <aside>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <FormattedMessage
                    id="cv.courses"
                    defaultMessage={" Courses "}
                  />
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img
                      src={educacionit}
                      alt="Educacion IT"
                      className="w-16 h-16"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">
                        <FormattedMessage
                          id="cv.courses.educacionit"
                          defaultMessage={" EducacionIT "}
                        />
                      </h2>
                      <p>Fullstack JavaScript Developer (2023)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={coursera} alt="Coursera" className="w-16 h-16" />
                    <div>
                      <h2 className="text-lg font-semibold">
                        <FormattedMessage
                          id="cv.courses.coursera"
                          defaultMessage={" Coursera "}
                        />
                      </h2>
                      <p>
                        Introduction to Deep Learning with Tensorflow (2023)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={google} alt="Google" className="w-16 h-16" />
                    <div>
                      <h2 className="text-lg font-semibold">
                        <FormattedMessage
                          id="cv.courses.google"
                          defaultMessage={" Google "}
                        />
                      </h2>
                      <p>Google IT Automation with Python (2023)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={udemy} alt="Udemy" className="w-16 h-16" />
                    <div>
                      <h2 className="text-lg font-semibold">
                        <FormattedMessage
                          id="cv.courses.udemy"
                          defaultMessage={" Udemy "}
                        />
                      </h2>
                      <p>Advanced Selenium WebDriver (2023)</p>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="mb-6">
              <h1 className="text-xl font-semibold text-gray-800 mb-4">
                <FormattedMessage
                  id="cv.experience"
                  defaultMessage={" Experience "}
                />
              </h1>
              <ul className="space-y-4">
                <li className="bg-gray-200 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold">
                    <FormattedMessage
                      id="cv.experience.job1.title"
                      defaultMessage={"Software Developer"}
                    />
                  </h2>
                  <p>
                    <FormattedMessage
                      id="cv.experience.job1.company"
                      defaultMessage={"ABC Technologies"}
                    />
                    <br />
                    <FormattedMessage
                      id="cv.experience.job1.period"
                      defaultMessage={"January 2020 - Present"}
                    />
                  </p>
                  <p>
                    <FormattedMessage
                      id="cv.experience.job1.description"
                      defaultMessage={"Developed and maintained web applications using React and Node.js."}
                    />
                  </p>
                </li>
                <li className="bg-gray-200 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold">
                    <FormattedMessage
                      id="cv.experience.job2.title"
                      defaultMessage={"QA Engineer"}
                    />
                  </h2>
                  <p>
                    <FormattedMessage
                      id="cv.experience.job2.company"
                      defaultMessage={"XYZ Solutions"}
                    />
                    <br />
                    <FormattedMessage
                      id="cv.experience.job2.period"
                      defaultMessage={"June 2017 - December 2019"}
                    />
                  </p>
                  <p>
                    <FormattedMessage
                      id="cv.experience.job2.description"
                      defaultMessage={"Performed manual and automated testing for various software applications."}
                    />
                  </p>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h1 className="text-xl font-semibold text-gray-800 mb-4">
                <FormattedMessage
                  id="cv.education"
                  defaultMessage={" Education "}
                />
              </h1>
              <ul className="space-y-4">
                <li className="bg-gray-200 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold">
                    <FormattedMessage
                      id="cv.education.title1"
                      defaultMessage={"Bachelor's in Computer Science"}
                    />
                  </h2>
                  <p>
                    <FormattedMessage
                      id="cv.education.institution1"
                      defaultMessage={"University of Technology"}
                    />
                    <br />
                    <FormattedMessage
                      id="cv.education.period1"
                      defaultMessage={"2014 - 2018"}
                    />
                  </p>
                </li>
                <li className="bg-gray-200 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold">
                    <FormattedMessage
                      id="cv.education.title2"
                      defaultMessage={"Master's in Software Engineering"}
                    />
                  </h2>
                  <p>
                    <FormattedMessage
                      id="cv.education.institution2"
                      defaultMessage={"Institute of Advanced Studies"}
                    />
                    <br />
                    <FormattedMessage
                      id="cv.education.period2"
                      defaultMessage={"2019 - 2021"}
                    />
                  </p>
                </li>
              </ul>
            </div>

              <aside>
                <div className="space-y-4">

                <h2 className="text-2xl font-semibold text-gray-800">
                <FormattedMessage
                  id="cv.tools"
                  defaultMessage={"Tools"}
                />
              </h2>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={postman} alt="Postman" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">Postman</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={jira} alt="Jira" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">Jira</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={selenium} alt="Selenium" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">Selenium</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={jmeter} alt="JMeter" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">JMeter</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={vscode} alt="VSCode" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">VSCode</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={azure} alt="Azure" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">Azure</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={mysql} alt="MySQL" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">MySQL</h2>
                  </div>
                  <div className="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg">
                    <img src={mongo} alt="MongoDB" className="w-16 h-16" />
                    <h2 className="text-lg font-semibold">MongoDB</h2>
                  </div>
                  
                </div>
                
              </aside>
            </div>
            <div className="text-center mt-8">
              <a
                href="/cv"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                <FormattedMessage
                  id="cv.button"
                  defaultMessage={" Download CV "}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CvOnline;
