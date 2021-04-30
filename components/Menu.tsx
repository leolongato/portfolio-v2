import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

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
    <ul className="menu">
      <li ref={habRef} className="btnMenu" onClick={() => setBtnActive("h")}>
        <Link to="skills" offset={-50} smooth={true} duration={500}>
          <p onClick={() => setBtnActive("h")}>Habilidades</p>
        </Link>
      </li>
      <li ref={expRef} className="btnMenu">
        <Link to="experiences" offset={-50} smooth={true} duration={500}>
          <p onClick={() => setBtnActive("e")}>Experiências</p>
        </Link>
      </li>
      <li ref={sobreRef} className="btnMenu" onClick={() => setBtnActive("s")}>
        <Link to="about" offset={-50} smooth={true} duration={500}>
          <p onClick={() => setBtnActive("s")}>Sobre</p>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
