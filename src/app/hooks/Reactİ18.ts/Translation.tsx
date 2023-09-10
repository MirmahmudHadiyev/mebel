import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import az from "./az";

const resources = {
    'AZ':az,
   'EN':en,
  }
  
   
i18n


  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorage.getItem("lng" ) || "AZ",
    returnObjects:true,
    
    interpolation: {
      escapeValue: false ,
  
    }
  });

  export default i18n;