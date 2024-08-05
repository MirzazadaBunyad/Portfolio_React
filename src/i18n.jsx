import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  az: {
    translation: {
      home: "Əsas",
      about: "Haqqımda",
      projects: "Layihələr",
      contact: "Əlaqə",
      downloadCV: "CV yüklə",
      nameSurname: "Mirzəzadə Bünyad",
      I_m: "",
      featuredText: "Vizual olaraq heyrətamiz və istifadəçi rahatcılığı üçün veb-saytlar hazırlayan front-end, həmçinin React Native ilə mobil proqramlar hazırlayan gənc və təcrübəli developer.",
      scrollDown: "Aşağı sürüşdürün",
      aboutMe: "Haqqımda",
      myIntro: "Təqdimatım",
      introduction: "Mən JavaScript və React üzərində işləyən front-end developerəm. Müasir veb texnologiyalarından istifadə edərək cəlbedici interfeyslər yaratmaq üzrə ixtisaslaşmışam. Təcrübəmə istifadəçinin istifadəsini yaxşılaşdırmaq üçün innovativ həllər yaratmaqla işlədiyim JavaScript,React və digər kitabxanlarda layihələrin inkişafı daxildir.",
      mobile: "Mobile Development",
      database: "Databaza",
      design: "Dizayn",
      projects: "Proyektlərim",
      completed: "Tamamlanmış",
      finished: "5+ bitmiş proyekt",
      experience: "Təcrübə",
      years: "1 il",
      contact: "Əlaqə",
      contDesc: "Layihəniz var? Buradan mənimlə əlaqə saxlayın.",
      find: "Məni burada axtarın",
      name: "Ad",
      message: "Mesaj",
      send: "Göndər",
      sent: "Uğurla göndərildi",
      copyright: "Bütün hüquqlar qorunur - Mirzəzadə Bünyad © 2024."
    },
  },
  en: {
    translation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV",
      nameSurname: "Mirzazada Bunyad",
      I_m: "I'm",
      featuredText: "A young and experienced front-end developer who builds visually stunning and user-friendly websites and also develops mobile apps with React Native.",
      scrollDown: "Scroll down",
      aboutMe: "About me",
      myIntro: "My introduction",
      introduction: "I am a front-end developer working on JavaScript and React. I specialize in creating attractive interfaces using modern web technologies. My experience includes project development in JavaScript, React and other libraries where I try to create innovative solutions to improve the user experience.",
      mobile: "Mobile Development",
      database: "Database",
      design: "Design",
      projects: "Projects",
      completed: "Completed",
      finished: "5+ finished projects",
      experience: "Experience",
      years: "1 year",
      contact: "Contact",
      contDesc: "Do you have a project? Contact me here.",
      find: "Find me",
      name: "Name",
      message: "Message",
      send: "Send",
      sent: "Successfully sent",
      copyright: "All rights reserved - Mirzazada Bunyad © 2024."
    },
  },
};
i18n.use(initReactI18next).init({
  lng: "az",
  resources,
});
export default i18n;
