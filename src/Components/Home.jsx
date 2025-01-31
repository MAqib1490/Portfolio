import React, { useEffect, useRef } from "react";
import Pdf from "../pdf/Resume.pdf.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Portfolio.",
        "My Name is Muhammad Aqib Aziz",
        "I am Frontend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aso-duration="1000">
          <h1 ref={typedRef}>Web Applications</h1>
          <a
            href={Pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aso-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
