import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../locales/en.json';
import Spanish from '../locales/es.json';

export const LangContext = React.createContext();

// Takes the lang of the navigator
const local = navigator.language;
let lang;

// Initialize the lang property 
if (local === 'en') {
   lang = English;
}else {
   lang = Spanish;
}

const LangWrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);

   function selectLanguage(e) {
       const newLocale = e.target.value;
       setLocale(newLocale);
       if (newLocale === 'en') {
         setMessages(English);
       } else {
          setMessages(Spanish);
       }
   }
   return (
       <LangContext.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </LangContext.Provider>
   );
}

export default LangWrapper;