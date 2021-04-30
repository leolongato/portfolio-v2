import SkillCard from "./SkillCard";
import Fade from "react-reveal/Fade";

const Skill: React.FC = () => {
  return (
    <div className="skills">
      <Fade top>
        <p className="title-skills">Minhas Habilidades</p>
      </Fade>
      <div className="cards">
        <SkillCard
          title="C#"
          icon="/csharp.svg"
          description="C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET."
          porcentage={90}
        />
        <SkillCard
          title="Node.Js"
          icon="/nodejs.svg"
          description="Node.Js é um software de código aberto, multiplataforma, que executa códigos JavaScript."
          porcentage={70}
        />
        <SkillCard
          title="Typescript"
          icon="/typescript.svg"
          description="TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem."
          porcentage={90}
        />
        <SkillCard
          title="React.Js"
          icon="/reactjs.svg"
          description="React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
          porcentage={80}
        />
        <SkillCard
          title="Next.Js"
          icon="/nextjs.svg"
          description="Next.Js é um framework de React.Js para desenvolvimento front-end para produção."
          porcentage={65}
        />
        <SkillCard
          title="Tailwind CSS"
          icon="/tailwind.svg"
          description="Tailwind CSS é um framework de CSS que prioriza a utilidade, com classes como flex, pt-4, text-center e rotate-90, que pode ser composta para construir qualquer design, diretamente em seu elemento html."
          porcentage={80}
        />
        <SkillCard
          title="Python"
          icon="/python.svg"
          description="Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte."
          porcentage={70}
        />
        <SkillCard
          title="Excel VBA"
          icon="/excel.svg"
          description="O VBA é uma implementação do Visual Basic da Microsoft incorporada em todos os programas do Microsoft Office"
          porcentage={80}
        />
      </div>
    </div>
  );
};

export default Skill;
