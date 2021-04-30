import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div>
        <FaLinkedin color="white" />
        <FaGithub color="white" />
      </div>
    </div>
  );
};

export default Footer;
