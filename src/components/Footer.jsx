import { useContext } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { color, setColor } = useContext(ThemeContext);

  function scrollActive() {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const link = document.querySelector(
        '.nav-menu a[href*="' + sectionId + '"]'
      );
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  return (
    <footer
      className={`${
        color ? "darkbg" : "lightbg"
      } flex justify-center items-center flex-col gap-y-8 bg-[#f8f8f8] py-9 px-14`}
    >
      <div className="top-footer">
        <p className="text-2xl font-semibold">Mirzazada Bunyad</p>
      </div>
      <div className="footer-social-icons flex gap-7">
        <div className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer shadow-lg">
          <a href="https://www.linkedin.com/in/bunyadmirzazada/" target="blank">
            <BsLinkedin className={`${color ? "text-white" : ""}`} />
          </a>
        </div>
        <div className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer shadow-lg">
          <a href="https://github.com/MirzazadaBunyad" target="blank">
            <FaGithub className={`${color ? "text-white" : ""}`} />
          </a>
        </div>
        <div className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer shadow-lg">
          <a href="mailto:bunyadmirzazada@gmail.com" target="blank">
            <MdEmail className={`${color ? "text-white" : ""}`} />
          </a>
        </div>
      </div>
      <div className="text-sm mt-2.5 max-md:text-center">
        <p>Copyright &copy; 2024 Mirzazada Bunyad - All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
