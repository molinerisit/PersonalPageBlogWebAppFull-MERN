import React, { useState } from 'react';
import MensajesIngles from './../languages/en-US.json';
import MensajesEspañol from './../languages/es-AR.json';
import { IntlProvider } from 'react-intl';
const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [mensajes, establecerMensajes] = useState(MensajesIngles);
  const [locale, establecerLocale] = useState('en-US');

  const establecerLenguaje = (lenguaje)  => {
    switch (lenguaje){
      case 'es-AR':
        establecerMensajes(MensajesEspañol);
        establecerLocale('es-AR')
        break;
        case 'en-US':
        establecerMensajes(MensajesIngles);
        establecerLocale('en-US')
        break;
        default: 
        establecerMensajes(MensajesIngles);
        establecerLocale('en-US')
    }
  } 


  return (
    <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
     <IntlProvider locale={locale} messages={mensajes}>
      {children}
      </IntlProvider>
    </langContext.Provider>
  
  );
};

export { LangProvider, langContext };