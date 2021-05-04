import { FaClipboard } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { store, ReactNotificationOptions } from "react-notifications-component";
import SwitchTheme from "../components/SwitchTheme";
import Fade from "react-reveal/Fade";

const notification: ReactNotificationOptions = {
  title: "",
  message: "E-mail copiado com sucesso!",
  type: "success",
  container: "top-center",
  animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__fadeOut"], // `animate.css v4` classes,
  dismiss: {
    duration: 1000,
    onScreen: false,
  },
};

const Contact: React.FC = () => {
  return (
    <Fade left>
      <div className="contact">
        <div className="flex mb-2">
          <RiLinkedinFill
            className="w-12 h-12 text-white bg-blue-500 border-0 rounded hover:bg-opacity-75"
            onClick={() =>
              window.open("https://linkedin.com/in/leonardolongato")
            }
          />
          &nbsp;&nbsp;&nbsp;
          <RiGithubFill
            className="w-12 h-12 text-white bg-gray-800 rounded hover:bg-opacity-75"
            onClick={() => window.open("https://github.com/leolongato")}
          />
        </div>
        <p className="title">Entre em contato:</p>
        <CopyToClipboard text="leonardolongato@gmail.com">
          <div className="clip-switch">
            <div
              className="clipboard-content"
              onClick={() => store.addNotification(notification)}
            >
              <div className="contact-content">
                <img src="/gmail.svg" className="gmail_icon" />
                <p className="email-address">leonardolongato@gmail.com</p>
              </div>
              <FaClipboard className="clip-icon" size={18} />
            </div>
            <div className="switch-div">
              <p className="title-theme">
                Altere o tema&nbsp;
                <MdArrowForward />
                &nbsp;
              </p>
              <SwitchTheme />
            </div>
          </div>
        </CopyToClipboard>
      </div>
    </Fade>
  );
};

export default Contact;
