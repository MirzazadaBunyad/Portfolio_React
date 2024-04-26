import i18next from "i18next";
import { initReactI18next } from "react-i18next";

function i18n() {
  const resources = {
    az: {
      translation: {
        hello: "salam",
      },
    },
    en: {
      translation: {
        hello: "hello",
      },
    },
  };
  i18next.use(initReactI18next).init({
    lng: "az",
    resources,
  });
  return <div>i18n</div>;
}
export default i18n;
