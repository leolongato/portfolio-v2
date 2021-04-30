const About: React.FC = () => {
  return (
    <div className="main-container">
      <p className="title">Sobre</p>
      <div className="about-container">
        <div className="infos-container">
          <p>
            Este site foi criado com o intuito de desenvolver minhas habilidades
            com Front-end e divulgar meu portfólio.
          </p>
          <div>
            <p className="font-semibold">Tecnologias Utilizadas:</p>
            <div className="techs-container">
              <img className="icon-tech" src="nextjs.svg" alt="" />
              <p className="title-tech">Next.Js</p>
              <img className="icon-tech" src="tailwind.svg" alt="" />
              <p className="title-tech">TailwindCSS</p>
            </div>
          </div>
        </div>
        <div className="socials-container">
          <p>Minhas redes sociais:</p>
        </div>
      </div>
    </div>
  );
};

export default About;
