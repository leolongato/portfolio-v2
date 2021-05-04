import TimelineCard from "./TimelineCard";

const Experiences: React.FC = () => {
  return (
    <div className="experiences-container">
      <h1 className="title-skills">Experiências</h1>
      <ul className="list-skills">
        <TimelineCard
          company="Itaú Unibanco - Previdência PJ"
          period="Set/2020 - Presente"
          description="Desenvolver projetos de automações e melhorias internas, realizando
          o entendimento do escopo e propondo a melhor solução tecnológica."
          tasks={[
            "Modelagem de banco de dados SQL.",
            "Criação de aplicações em .NET.",
            "Criação de aplicações Web.",
            "Utilização de arquiteturas de software escaláveis.",
            "Utilização de metodologia ágil (SCRUM).",
          ]}
        />
        <TimelineCard
          company="Itaú Unibanco - Asset Management"
          period="Mar/2019 - Set/2020"
          description="Desenvolver projetos voltados a correções e melhorias no sistema Charles River. Apoiar e dar suporte nas rotinas dos Gestores de Fundo /
          Trading."
          tasks={[
            "Desenvolver automações para o sistema Charles River em.NET.",
            "Auxiliar na modelagem de banco de dados SQL.",
            "Criação de automações de planilhas em VBA.",
          ]}
        />
        <TimelineCard
          company="InfoDigitus Ltda"
          period="Abr/2018 - Fev/2019"
          description="Desenvolvimento e suporte de aplicações em .NET para tratamento de arquivos e geração de documentos (boletos, holerites, etc)."
          tasks={[
            "Desenvolvimento de aplicações em .NET.",
            "Versionamento de código via GitHub.",
          ]}
        />
      </ul>
    </div>
  );
};

export default Experiences;
