import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import CV from "../assets/CV/Bunyad_Mirzazada.pdf";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const { color, setColor } = useContext(ThemeContext);
  const toggleDarkMode = () => setColor(!color);

  const myMenuFunction = () => {
    let menuBtn = document.getElementById("myNavMenu");
    let body = document.body;
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
      body.style.overflow = "hidden";
    } else {
      menuBtn.className = "nav-menu";
      body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const currentSectionId = current.getAttribute("id");

        const link = document.querySelector(
          `.nav-menu a[href="#${currentSectionId}"]`
        );
        if (link && currentSectionId === "home") {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="header"
      className={`${color ? "darkbg" : "lightbg"
        } bg-black fixed flex justify-between items-center w-full h-[90px] leading-[90px] px-[9vw] z-[100] transition-all`}
    >
      <div className="nav-menu flex items-center" id="myNavMenu">
        <ul className="nav_menu_list flex items-center max-md:flex-col">
          <li className="list-none relative">
            <Link
              to="home"
              className={`no-underline cursor-pointer font-500 px-[15px] mx-[20px] ${color ? "text-white" : ""
                }`}
              activeClass="active-link"
              spy={true}
              smooth={true}
              duration={750}
            >
              Home
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link
              to="about"
              className={`no-underline cursor-pointer font-500 px-[15px] mx-[20px] ${color ? "text-white" : ""
                }`}
              activeClass="active-link"
              spy={true}
              smooth={true}
              duration={750}
            >
              About
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link
              to="projects"
              className={`no-underline cursor-pointer font-500 px-[15px] mx-[20px] ${color ? "text-white" : ""
                }`}
              activeClass="active-link"
              spy={true}
              smooth={true}
              duration={750}
            >
              Projects
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link
              to="contact"
              className={`no-underline cursor-pointer font-500 px-[15px] mx-[20px] ${color ? "text-white" : ""
                }`}
              activeClass="active-link"
              spy={true}
              smooth={true}
              duration={750}
            >
              Contact
            </Link>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="nav-button max-lg:hidden">
          <a href={CV} download={CV}>
            <button className="font-500 bg-[#efefef] px-[20px] rounded-xl border-0 cursor-pointer flex items-center h-[50px] transition-all hover:bg-[#6E57E0] hover:text-white">
              Download CV <HiOutlineDocumentArrowDown className="ml-[10px]" />
            </button>
          </a>
        </div>
        <div className="pt-2">
          <button onClick={toggleDarkMode}>
            {color ? (
              <MdDarkMode className="text-[24px]" />
            ) : (
              <MdLightMode className="text-[24px]" />
            )}
          </button>
        </div>
      </div>
      <div className="nav-menu-btn hidden max-md:flex max-md:items-center max-md:justify-center">
        <a>
          <GiHamburgerMenu
            className={`text-[28px] cursor-pointer ${color ? "darkbg" : "lightbg"
              }`}
            onClick={myMenuFunction}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
