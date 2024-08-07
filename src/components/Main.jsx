import { useContext, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaAward, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbCornerRightDown, TbSend } from "react-icons/tb";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import { LuMouse, LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import Picture from "../assets/image/newphoto_removebg.png";
import { ThemeContext } from "../context/ThemeContext";
import emailjs from "../../node_modules/@emailjs/browser";
import { useTranslation } from "react-i18next";
import CV from "../assets/CV/BunyadMirzazada.pdf";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { SiBulma, SiFigma, SiJquery, SiMongodb, SiRedux } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";

function Main() {
  const { color, setColor } = useContext(ThemeContext);
  useEffect(() => {
    const options = {
      strings: ["Front-End and Mobile Developer"],
      loop: true,
      typeSpeed: 130,
      backSpeed: 80,
      backDelay: 2000,
    };
    const typing = new Typed(".typedText", options);
    return () => {
      typing.destroy();
    };
  }, []);

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rmanlx7",
        "template_tgv7gzh",
        form.current,
        "tPihT6yhTcJF4ICP-"
      )
      .then(
        (result) => {
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { t, i18n } = useTranslation();
  return (
    <main
      className={`${color ? "darkbg" : "lightbg"
        } px-[10vw] overflow-hidden w-full`}
    >
      <section
        className="featured-box relative flex h-24 min-h-[700px] py-[2em] max-md:flex-col max-md:justify-center max-md:h-[100vh]"
        id="home"
      >
        <div className="featured-text relative flex justify-center content-center min-h-[80vh] flex-col w-[65%] pl-5 max-lg:p-0 max-md:w-full max-md:order-2 max-md:justify-center max-md:content-start max-md:min-h-[60vh]">
          <div className="featured-text-card">
            <span className="bg-[#43766C] text-white py-[4px] px-[9px] text-[20px] max-md:text-[16px] rounded-[5px] cursor-default">
              {t("nameSurname")}
            </span>
          </div>
          <div className="featured-name text-[45px] font-semibold text-[#B8B8B8] my-[20px] max-sm:text-[40px]">
            <p
              className={`${color ? "text-white" : ""
                } max-lg:text-[20px] max-md:text-[23px] cursor-default`}
            >
              {t("I_m")} <span className="typedText text-[#1E9FAB]"></span>
            </p>
          </div>
          <div className="featured-text-info lg:w-[90%] text-[15px] mb-8 text-[#B8B8B8]">
            <p>
              {t("featuredText")}
            </p>
          </div>
          <div className="social_icons flex gap-7 max-md:mt-[2em]">
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer shadow-lg">
              <Link
                href="https://www.linkedin.com/in/bunyadmirzazada/"
                className={`${color ? "text-white" : ""}`}
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer shadow-lg">
              <Link
                to="https://github.com/MirzazadaBunyad"
                className={`${color ? "text-white" : ""}`}
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer shadow-lg">
              <Link to="mailto:bunyadmirzazada@gmail.com" target="_blank">
                <MdEmail className={`${color ? "text-white" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex content-center min-h-[80vh] w-[35%] justify-end max-md:order-1 max-md:justify-center max-md:min-h-[150px] max-md:w-full max-md:mt-[65px]">
          <div className="image w-96 h-96 my-auto mx-0 max-md:w-[150px] max-md:h-[150px]">
            <img
              src={Picture}
              alt="avatar"
              className="w-96 h-96 object-contain max-md:w-[150px] max-md:h-[150px]"
            />
          </div>
        </div>
        <div className="scroll-icon-box">
          <a
            href="#about"
            className={`${color ? "text-white" : ""
              } scroll-btn  absolute bottom-0 left-1/2 flex justify-center items-center w-[150px] h-[50px] gap-1 no-underline text-[#B8B8B8] rounded-[30px] border-[1px] border-solid z-[9] shadow-lg`}
          >
            <LuMouse className="text-[24px]" />
            <p className="text-[12px]">{t("scrollDown")}</p>
          </a>
        </div>
      </section>
      <section className="section py-[2em]" id="about">
        <div className="top-header text-center mb-[4em]">
          <h1 className="text-2xl font-semibold mb-2.5 cursor-default">{t("aboutMe")}</h1>
        </div>
        <div className="flex justify-between w-full gap-[50px] max-md:flex-col max-md:justify-center">
          <div className="col flex w-[90%] max-md:justify-center max-md:w-full">
            <div
              className={`${color ? "bg-[#232D3F]" : ""
                } about-info relative flex items-center flex-col py-[30px] px-[20px] w-full rounded-[20px] shadow-2xl`}
            >
              <h3 className="text-xl font-semibold mb-3.5 cursor-default">{t("myIntro")}</h3>
              <p className="text-center text-[15px] text-[#777]">
                {t("introduction")}
              </p>
              <div className="about-btn">
                <a href={CV} download={CV}>
                  <button className="px-[20px] text-white rounded-[30px] cursor-pointer flex items-center h-[50px] transition-all hover:text-white mt-[20px] bg-[#6E57E0] hover:bg-[#285BD4]">
                    {t("downloadCV")}
                    <HiOutlineDocumentArrowDown className="ml-[10px]" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col flex max-lg:flex-col">
            <div className="skills-box flex flex-col">
              <div className="skills-box m-2.5">
                <div className="skills-header mb-5">
                  <h3 className="text-xl font-semibold cursor-default">Front-End</h3>
                </div>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <FaHtml5 />
                    HTML5
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <FaCss3Alt />
                    CSS3
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <FaBootstrap />
                    Bootstrap5
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <RiTailwindCssFill />
                    Tailwind CSS
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <SiBulma />
                    Bulma CSS
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <FaSass />
                    SASS
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <VscJson />
                    JSON
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <SiJquery />
                    jQuery
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <RiJavascriptFill />
                    JavaScript
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <BiLogoTypescript />
                    Typescript
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <FaReact />
                    React.js
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <SiRedux />
                    Redux Toolkit
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <RiNextjsFill />
                    Next.js
                  </span>
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    AJAX
                  </span>
                </div>
              </div>
              <div className="skills-box m-2.5">
                <div className="skills-header mb-5">
                  <h3 className="text-xl font-semibold cursor-default">{t("mobile")}</h3>
                </div>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                    <FaReact />
                    React Native
                  </span>
                </div>
              </div>
            </div>
            <div className="skills-box m-2.5">
              <div className="skills-header mb-5">
                <h3 className="text-xl font-semibold cursor-default">{t("database")}</h3>
              </div>
              <div className="skills-list flex flex-wrap gap-2">
                <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                  <SiMongodb />
                  MongoDB
                </span>
              </div>
            </div>
            <div className="skills-box m-2.5">
              <div className="skills-header mb-5">
                <h3 className="text-xl font-semibold cursor-default">{t("design")}</h3>
              </div>
              <div className="skills-list flex flex-wrap gap-2">
                <span className="text-sm flex items-center gap-1 bg-[#6E57E0] text-white px-2.5 py-0.5 rounded-[5px]">
                  <SiFigma />
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section py-[2em]" id="projects">
        <div className="top-header text-center mb-[4em]">
          <h1 className="text-2xl font-semibold mb-2.5 cursor-default">{t("projects")}</h1>
        </div>
        <div className="project-container flex w-full justify-center gap-5 flex-wrap">
          <div
            className={`project-box shadow-2xl relative flex justify-center items-center flex-col w-[30%] h-[250px] rounded-[20px] overflow-hidden max-md:w-[80%] max-sm:w-full ${color ? "bg-[#6E57E0]" : ""
              }`}
          >
            <IoBagRemoveOutline className="text-5xl text-[#00b5e7] mb-6 z-[9]" />
            <h3 className="text-xl font-semibold cursor-default">{t("completed")}</h3>
            <label className="text-[15px]">{t("finished")}</label>
          </div>
          <div
            className={`project-box shadow-2xl relative flex justify-center items-center flex-col w-[30%] h-[250px] rounded-[20px] overflow-hidden max-md:w-[80%] max-sm:w-full ${color ? "bg-[#6E57E0]" : ""
              }`}
          >
            <FaAward className="text-5xl text-[#00b5e7] mb-6 z-[9]" />
            <h3 className="text-xl font-semibold cursor-default">{t("experience")}</h3>
            <label className="text-[15px]">{t("years")}</label>
          </div>
        </div>
      </section>
      <section className="section py-[2em]" id="contact">
        <div className="top-header text-center mb-[4em]">
          <h1 className="text-2xl font-semibold mb-2.5 cursor-default">{t("contact")}</h1>
          <span className="cursor-default">{t("contDesc")}</span>
        </div>
        <div className="row flex justify-between w-full gap-12 max-md:flex-col max-md:justify-center">
          <div className="col flex w-[50%] max-md:justify-center max-md:w-full">
            <div className="contact-info relative flex flex-col items-center justify-center p-5 w-full h-[315px] bg-[#6E57E0] rounded-lg overflow-hidden">
              <h2 className="text-2xl flex text-center items-center text-white mb-5 cursor-default">
                {t("find")} <TbCornerRightDown className="text-xl" />
              </h2>
              <p className="flex items-center gap-2.5 my-1 text-white max-sm:text-xs cursor-default">
                <MdOutlineEmail className="text-lg" />
                Email:
                <a
                  href="mailto:bunyadmirzazada@gmail.com"
                  className="text-white"
                >
                  bunyadmirzazada@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5 my-1 text-white max-sm:text-xs cursor-default">
                <LuPhone className="text-lg" />
                Phone:
                <a href="tel:+994509709702" className="text-white">
                  (+994) 50 970 97 02
                </a>
              </p>
            </div>
          </div>
          <div className="col flex w-1/2 max-md:justify-center max-md:w-full">
            <div className="form-control flex flex-col gap-2.5 w-full">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-inputs flex gap-2.5 w-full max-sm:flex-col">
                  <input
                    type="text"
                    className="input-field w-1/2 h-[55px] bg-transparent border-2 border-solid border-gray-400 rounded-lg px-[20px] outline-none max-sm:w-full"
                    placeholder={t("name")}
                    name="from_name"
                    required
                  />
                  <input
                    type="email"
                    className="input-field w-1/2 h-[55px] bg-transparent border-2 border-solid border-gray-400 rounded-lg px-[20px] outline-none max-sm:w-full"
                    placeholder="Email"
                    name="from_email"
                    required
                  />
                </div>
                <div className="text-area mt-[10px]">
                  <textarea
                    required
                    placeholder={t("message")}
                    name="message"
                    className="w-full h-[250px] bg-transparent border-2 border-solid border-gray-400 rounded-lg px-[20px] py-[15px] outline-none resize-none"
                  ></textarea>
                </div>
                <div className="form-button flex justify-end items-end gap-2.5 mt-[5px]">
                  {isSent && (
                    <p className="bg-[#38AE2B] rounded-[30px] text-center px-[15px] w-[150px] h-[50px] py-[0px] slide-in">
                      {t("sent")}
                    </p>
                  )}
                  <button
                    type="submit"
                    value="Send"
                    className="px-[20px] z-[999] text-white rounded-[30px] cursor-pointer flex items-center h-[50px] transition-all hover:text-white mt-[20px] bg-[#6E57E0] hover:bg-[#00b5e7] max-md:w-full max-md:justify-center"
                  >
                    <TbSend className="mr-1 text-lg flex items-center justify-center" />
                    {t("send")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Main;
