import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdLocationOn, MdPermIdentity } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { GiHistogram } from "react-icons/gi";

const Experiences: React.FC = () => {
  return (
    <div className="m-4">
      <h1 className="title-skills">Experiências</h1>
      <VerticalTimeline animate={false} className="w-full">
        <VerticalTimelineElement
          className="normal-case vertical-timeline-element--work"
          contentStyle={{
            background: "#1F2937",
            color: "white",
            borderTop: "3px solid #607B8B",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #1F2937" }}
          date="Março/2019 - Setembro/2020"
          iconStyle={{ background: "#1F2937" }}
          icon={<GiHistogram color="#B3A99F" size="36" />}
        >
          <h2
            style={{ color: "#B3A99F" }}
            onClick={() =>
              window.open("https://www.itauassetmanagement.com.br")
            }
            className="cursor-pointer"
          >
            Itaú Asset Management
          </h2>
          <h3 className="position">
            <MdPermIdentity />
            Estagiário - Desenvolvimento de Software
          </h3>
          <h4 className="location">
            <MdLocationOn color="red" />
            Itaim Bibi - SP
          </h4>
          <p className="text-gray-400">
            Desenvolver projetos voltados a correções e melhorias no sistema
            Charles River. Apoiar e dar suporte nas rotinas dos Gestores de
            Fundo / Trading.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="normal-case vertical-timeline-element--work"
          contentStyle={{
            background: "#1F2937",
            color: "white",
            borderTop: "3px solid darkorange",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #1F2937" }}
          date="Abril/2018 - Fevereiro/2019"
          iconStyle={{ background: "#1F2937", color: "#fff" }}
          icon={<AiFillPrinter color="darkorange" size="36" />}
        >
          <h2
            onClick={() => window.open("https://www.infodigitus.com.br/")}
            style={{ color: "darkorange" }}
            className="cursor-pointer"
          >
            Info Digitus
          </h2>
          <h3 className="position">
            <MdPermIdentity />
            Estagiário - Desenvolvimento de Software
          </h3>
          <h4 className="location">
            <MdLocationOn color="red" />
            Vila Mariana, SP
          </h4>
          <p className="text-gray-400">
            Desenvolvimento e suporte de programas feitos em C# para tratamento
            de arquivos e geração de documentos (boletos, holerites etc).
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
