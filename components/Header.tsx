import { FcIdea, FcCommandLine } from "react-icons/fc";
import Fade from "react-reveal/Fade";

const Header: React.FC = () => {
  return (
    <Fade left>
      <div className="header">
        <div className="profile_data">
          <div className="div_profile_picture">
            <img className="profile_picture" src="/Foto_Perfil_2.png" />
          </div>
          <p className="name">Leonardo Zoccal Longato</p>
        </div>
        <p className="description">
          <FcIdea size={24} />
          &nbsp;Cientista da Computação e apaixonado por tecnologia.
        </p>
        <p className="description">
          <FcCommandLine size={24} />
          &nbsp;Desenvolvedor de Software.
        </p>
      </div>
    </Fade>
  );
};

export default Header;
