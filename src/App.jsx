import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const headerShadow = () => {
      const navHeader = document.getElementById("header");
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      } else {
        navHeader.style.boxShadow = "none";
      }
    };

    window.onscroll = () => {
      headerShadow();
    };
    const scroll = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    scroll.reveal(".featured-text-card", {});
    scroll.reveal(".featured-name", { delay: 100 });
    scroll.reveal(".featured-text-info", { delay: 200 });
    scroll.reveal(".featured-text-btn", { delay: 200 });
    scroll.reveal(".social_icons", { delay: 200 });
    scroll.reveal(".featured-image", { delay: 300 });
    scroll.reveal(".project-box", { interval: 100 });
    scroll.reveal(".top-header", {});

    const scrollLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    scrollLeft.reveal(".about-info", { delay: 100 });
    scrollLeft.reveal(".contact-info", { delay: 100 });

    const scrollRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    scrollRight.reveal(".skills-box", { delay: 100 });
    scrollRight.reveal(".form-control", { delay: 100 });
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
