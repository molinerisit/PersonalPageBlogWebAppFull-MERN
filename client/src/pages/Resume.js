import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/AppHeader.js";
import ImagenYo from "../assets/img/ImagenYo.png";
import { IntlProvider, FormattedMessage } from "react-intl"; //importamos los formateadores

function Resume() {
  const navigate = useNavigate();

  const redirectToCv = () => {
    navigate("/Cvonline");
  };

  const redirectToRoadmap = () => {
    navigate("/Roadmap");
  };

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center mb-6 sm:mb-0">
            <img
              src={ImagenYo}
              alt="Imagen de Julian Molineris"
              className="w-56 h-auto sm:w-64 md:w-72 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Julian Molineris
            </h1>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              <FormattedMessage id="resume.txt" defaultMessage={"Specialist in"} />
              <strong className="text-teal-400 font-extrabold">
                {" "}
                Web development <FormattedMessage id="resume.y" defaultMessage={"and"} /> testing QA
              </strong>
              ,{" "}
              <FormattedMessage
                id="resume.txt1"
                defaultMessage={"with experience in diagnosing and repairing of"}
              />
              <strong className="text-teal-400 font-extrabold">
                {" "}
                Hardware <FormattedMessage id="resume.y" defaultMessage={"and"} /> software
              </strong>
              <FormattedMessage
                id="resume.txt2"
                defaultMessage={" in computer systems and networks. Additionally, I have strong skills as "}
              />
              <strong className="text-teal-400 font-extrabold">
                {" "}
                Cybersecurity consultant
              </strong>
              .{" "}
              <FormattedMessage
                id="resume.txt3"
                defaultMessage={
                  " My focus is on ensuring the security and efficiency of systems while creating functional and optimized websites. If you are looking for a reliable and proactive professional, I am here to assist you with your projects."
                }
              />
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition"
                onClick={redirectToCv}
              >
                <FormattedMessage id="resume.button" defaultMessage={"View CV"} />
              </button>
              <button
                className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition"
                onClick={redirectToRoadmap}
              >
                <FormattedMessage id="resume.button1" defaultMessage={"View roadmap"} />
              </button>
            </div>
          </div>
        </div>
        <div className="h-24 w-full"></div>
      </main>
    </div>
  );
}

export default Resume;
