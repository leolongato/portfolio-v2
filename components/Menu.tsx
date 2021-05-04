import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Menu: React.FC = () => {
  const habRef = useRef<HTMLLIElement>();
  const expRef = useRef<HTMLLIElement>();
  const sobreRef = useRef<HTMLLIElement>();

  const [btnActive, setBtnActive] = useState<string>("h");

  useEffect(() => {
    switch (btnActive) {
      case "h":
        habRef.current.classList.add("btnMenu-active");
        expRef.current.classList.remove("btnMenu-active");
        sobreRef.current.classList.remove("btnMenu-active");
        break;
      case "e":
        expRef.current.classList.add("btnMenu-active");
        habRef.current.classList.remove("btnMenu-active");
        sobreRef.current.classList.remove("btnMenu-active");
        break;
      case "s":
        sobreRef.current.classList.add("btnMenu-active");
        habRef.current.classList.remove("btnMenu-active");
        expRef.current.classList.remove("btnMenu-active");
        break;
    }
  }, [btnActive]);

  return (
    <Fade left>
      <ul className="menu">
        <Link
          to="skills"
          offset={-55}
          smooth={true}
          duration={500}
          onClick={() => setBtnActive("h")}
        >
          <li
            ref={habRef}
            className="btnMenu"
            onClick={() => setBtnActive("h")}
          >
            <p>Habilidades</p>
          </li>
        </Link>
        <Link
          to="experiences"
          offset={-55}
          smooth={true}
          duration={500}
          onClick={() => setBtnActive("e")}
        >
          <li ref={expRef} className="btnMenu">
            <p>Experiências</p>
          </li>
        </Link>
        <Link
          to="about"
          offset={-55}
          smooth={true}
          duration={500}
          onClick={() => setBtnActive("s")}
        >
          <li ref={sobreRef} className="btnMenu">
            <p>Sobre</p>
          </li>
        </Link>
      </ul>
    </Fade>
  );
};

export default Menu;
