import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componentes/AppHeader';
import { FormattedMessage } from 'react-intl';

function Home() {
  const navigate = useNavigate();

  const redirectToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="Home mt-15 bg-black  flex flex-col text-center text-white">
      <Header />
      <div className="container-all w-full max-w-7xl px-4 py-0 mt-20"> {/* Ajusta el mt-16 según sea necesario */}
        <main className="flex flex-col items-center justify-center flex-grow">
          <section className="mt-0 mb-0">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <FormattedMessage id="home.title" defaultMessage={"Hi, I am "}/><strong className="text-aquamarine">Julian Molineris</strong>.
            </h1>
            <p className="text-white text-xl md:text-2xl font-medium uppercase mb-6">
              <FormattedMessage id="home.subtitle" defaultMessage={"I'm a web developer."}/>
            </p>
            <div className="flex justify-center">
              <button
                className="text-white bg-transparent border-2 border-aquamarine rounded-full px-8 py-4 text-lg transition-colors duration-300 hover:bg-aquamarine hover:text-black"
                onClick={redirectToContact}
              >
                <FormattedMessage id="home.button" defaultMessage={"WORK WITH ME!"}/>
              </button>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Home;
