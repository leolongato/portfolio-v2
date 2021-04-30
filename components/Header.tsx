import { FcIdea } from "react-icons/fc";
import Fade from "react-reveal/Fade";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Fade left>
        <div className="profile_data">
          <div className="div_profile_picture">
            <img className="profile_picture" src="/Foto_Perfil_2.png" />
          </div>
          <p className="name">Leonardo Zoccal Longato</p>
        </div>
        <p className="description">
          <FcIdea size={16} />
          &nbsp;Cientista da Computação e apaixonado por tecnologia.
        </p>
      </Fade>
    </div>
  );
};

export default Header;
