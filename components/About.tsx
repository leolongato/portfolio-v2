import Fade from "react-reveal/Fade";

const About: React.FC = () => {
  return (
    <Fade right>
      <div className="main-container">
        <p className="ml-4 title-skills">Sobre</p>
        <div className="about-container">
          <div className="infos-container">
            <p className="about-description">
              <p className="tech-title">Porque deste site ?</p>
              Este site foi criado com o intuito de desenvolver minhas
              habilidades com Front-end e divulgar meu portfólio.
            </p>
            <div>
              <p className="tech-title">Tecnologias Utilizadas:</p>
              <div className="techs-container">
                <div
                  className="tech-div"
                  onClick={() => window.open("https://nextjs.org/")}
                >
                  <img className="icon-tech" src="nextjs.svg" alt="" />
                  <p className="title-tech">Next.Js</p>
                </div>
                <div
                  className="tech-div"
                  onClick={() => window.open("https://tailwindcss.com/")}
                >
                  <img className="icon-tech" src="tailwind.svg" alt="" />
                  <p className="title-tech">TailwindCSS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="socials-container">
            <p className="rights">
              © Todos os direitos reservados - Leonardo Zoccal Longato
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
