import Head from "next/head";
import ReactNotification from "react-notifications-component";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import MenuProfile from "../components/MenuProfile";
import About from "../components/About";
import React, { useEffect, useRef, useState } from "react";
import { Link, Element } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function Home() {
  const [showProfileButton, setShowProfileButton] = useState<boolean>(false);
  const menuContainerRef = useRef<HTMLDivElement>();

  function handleOnScroll() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) return;
    if (screenWidth >= 768 && screenWidth < 1024) {
      if (window.pageYOffset >= 380) {
        setShowProfileButton(true);
      } else {
        setShowProfileButton(false);
      }
    } else {
      if (window.pageYOffset >= 470) {
        setShowProfileButton(true);
      } else {
        setShowProfileButton(false);
      }
    }
  }

  useEffect(() => {
    console.log(window.innerWidth);
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Leonardo Longato</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="l.svg" />
      </Head>
      <Element name="top" />
      <div className="body">
        <Fade left>
          <div ref={menuContainerRef} className="container-header">
            <div className="header-top">
              <div className="menuprofile">
                {showProfileButton && (
                  <Link to="top" smooth={true} duration={500}>
                    <MenuProfile />
                  </Link>
                )}
              </div>
              <Menu />
            </div>
          </div>
        </Fade>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:grid md:grid-cols-3 md:max-w-7xl">
            <ReactNotification className="normal-case" />
            <div className="md:col-span-1">
              <Header />
              <Contact />
            </div>
            <div className="md:col-span-2">
              <div className="sticky top-0 z-10 w-auto h-auto md:hidden">
                <Menu />
              </div>
              <Element name="skills" className="element">
                <Skills />
              </Element>
              <Element name="experiences" className="element">
                <Experiences />
              </Element>
            </div>
          </div>
        </div>
        <Element name="about" className="flex items-center justify-center">
          <About />
        </Element>
      </div>
    </>
  );
}
